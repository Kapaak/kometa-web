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
  const queryBlogPosts = groq`*[
    _type == "blog" &&
    _id > coalesce($lastId, "") &&
    (
      !defined($categories) ||
      count($categories) == 0 ||
      count(tags[@ in $categories]) > 0
    )
  ]{"id":_id,title,shortDescription,description,createdAt,author,readTime,"alt":image.alt,image{asset->{...,metadata}},tags,"slug":slug.current}[] [0...$pageSize] | order(createdAt desc)`;

  const blogPosts = await client.fetch(queryBlogPosts, {
    categories: filters.categories,
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
