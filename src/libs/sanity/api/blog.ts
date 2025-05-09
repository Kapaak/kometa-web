import { groq } from 'next-sanity';
import { SanityBlogPost } from '~/domains';
import { client } from '../config';

interface Pagination {
  lastId?: string;
  pageSize?: number;
}

interface BlogPostFilters extends Pagination {
  categories?: string[];
}

export async function getBlogPosts(
  filters: BlogPostFilters
): Promise<SanityBlogPost[]> {
  let filterQuery: string[] = [];

  if (filters?.categories) {
    filters?.categories?.forEach((category) => {
      filterQuery.push(`"${category}" in tags`);
    });
  }

  //TODO: need to comment out mergedFilter to generate FE sanity types
  const mergedFilter = filterQuery.join(' || ');

  const queryBlogPosts = groq`*[_type == "blog"  && _id > $lastId][${mergedFilter}]{"id":_id,title,shortDescription,description,createdAt,author,readTime,"alt":image.alt,image{asset->{...,metadata}},tags,"slug":slug.current}[] [0...$pageSize] | order(createdAt desc)`;

  const blogPosts = await client.fetch(queryBlogPosts, {
    lastId: filters.lastId,
    pageSize: filters.pageSize,
  });

  return blogPosts;
}

export async function getBlogById(blogId: string): Promise<SanityBlogPost> {
  const query = groq`*[_type == "blog" && slug.current == $blogId][0]{"id":_id,title,shortDescription, description[]{
    ...,
    _type == "imageAlt" => {
      ...,
      asset->
    },
  },createdAt,author,readTime,image{asset->{...,metadata},alt},tags,slug}`;

  const blog: SanityBlogPost = await client.fetch(query, { blogId });

  return blog;
}
