import { GetStaticPropsContext } from 'next';
import { groq } from 'next-sanity';

import { SanityBlogPost, TransformedBlogPost } from '~/domains';
import { client } from '~/libs/sanity';
import { getBlogById } from '~/libs/sanity/api/blog';
import { BlogPostScreen } from '~/screens/blog-post-page';
import { transformBlogPost } from '~/utils/transform-sanity-model';

interface BlogItemPageProps {
  blogPost: TransformedBlogPost;
}

export default function BlogItemPage({ blogPost }: BlogItemPageProps) {
  return <BlogPostScreen blog={blogPost} />;
}

export const getStaticProps = async (ctx: GetStaticPropsContext<any>) => {
  const { blogId } = ctx.params;

  const blogPost = await getBlogById(blogId);

  const transformedBlogPost = transformBlogPost(blogPost);

  return {
    props: {
      blogPost: transformedBlogPost,
    },
    revalidate: 10,
  };
};

//zkus opravit NextSanityImage podle plavani-luzanky

//V TextBuilderu budu muset volat API, abych dostal url image, mozna to udelej jako param do comp,
//at to neni zavisly na API, ale na props
//Oddelej obrazek na mobilu z blog listu, ty tagy dej jinam
//Pridej loading indicator na Blog list

//IMG URL DOSTAN ROVNOU PRI FETCHI INFA O STRANCE

export const getStaticPaths = async () => {
  const queryBlog = groq`*[_type == "blog"]{"slug": slug.current}`;

  const blogs: SanityBlogPost[] = await client.fetch(queryBlog);

  const paths = blogs
    ?.map(
      (blog) =>
        blog?.slug && {
          params: { blogId: blog?.slug },
        }
    )
    ?.filter(Boolean);

  return {
    paths,
    fallback: true,
  };
};
