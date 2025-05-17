import { CalendarBlank, Timer, User } from '@phosphor-icons/react';

import { TransformedBlogPost } from '~/domains';
import { Headline, NextSanityImage } from '~/ui/components/atoms';
import { IconText, TextBuilder } from '~/ui/components/molecules';
import { convertDateToString } from '~/utils/date';

import { useRouter } from 'next/router';
import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import * as S from './BlogPostScreen.style';

interface BlogPostScreenProps {
  blog: TransformedBlogPost;
}

export function BlogPostScreen({ blog }: BlogPostScreenProps) {
  const router = useRouter();

  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: blog?.title ?? 'Neuvedeno', href: router.asPath },
  ];
  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <S.BlogPostSection>
        <S.BlogPostMaxWidth>
          <S.BlogPostContainer gap="1rem">
            <Headline>{blog?.title}</Headline>
            <S.BlogPostMeta>
              <IconText icon={User} text={blog?.author ?? '-'} />
              <IconText icon={Timer} text={`${blog?.readTime ?? '-'} min`} />
              <IconText
                icon={CalendarBlank}
                text={
                  blog?.createdAt
                    ? convertDateToString(new Date(blog.createdAt))
                    : '-'
                }
              />
            </S.BlogPostMeta>

            <S.BlogItemImageContainer aspectRatio={blog?.aspectRatio}>
              {blog?.image && (
                <NextSanityImage
                  image={blog.image}
                  alt={blog?.alt ?? ''}
                  blurDataURL={blog?.blurDataURL}
                  placeholder={blog?.blurDataURL ? 'blur' : 'empty'}
                  sizes="(max-width: 768px) 80vw, 60vw"
                  fill
                  objectFit="cover"
                />
              )}
            </S.BlogItemImageContainer>
            <TextBuilder value={blog?.description} />
          </S.BlogPostContainer>
        </S.BlogPostMaxWidth>
      </S.BlogPostSection>
    </BreadcrumbsLayout>
  );
}
