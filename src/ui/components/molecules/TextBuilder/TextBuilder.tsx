import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

import { SanityImage } from '~/domains';

import { Text } from '../../atoms';

import * as S from './TextBuilder.style';

interface TextBuilderProps {
  value: PortableTextBlock[];
  options?: {
    paragraph: {
      position?: 'center' | 'left' | 'right';
    };
  };
}

export const TextBuilder = ({ value, options }: TextBuilderProps) => {
  const { paragraph } = options || {};
  return (
    <PortableText
      value={value}
      components={{
        block: {
          normal: (props) => {
            return <Text align={paragraph?.position}>{props.children}</Text>;
          },
          h2: (props) => {
            return <S.H2 align={paragraph?.position}>{props.children}</S.H2>;
          },
          h3: (props) => {
            return <S.H3 align={paragraph?.position}>{props.children}</S.H3>;
          },
        },
        types: {
          //the difference between image and imageAlt is that imageAlt supports alt tag
          imageAlt: (props) => {
            const value: SanityImage = props.value;

            return (
              <S.ImageContainer
                aspectRatio={String(
                  value?.asset?.metadata?.dimensions?.aspectRatio
                )}
              >
                <S.TextBuilderImage
                  alt={value.alt}
                  sizes="(max-width: 1023px) 90vw, 60vw"
                  src={props.value?.asset?.url}
                  fill
                />
              </S.ImageContainer>
            );
          },
        },

        listItem: {
          bullet: (props) => {
            return (
              <S.ListItem>
                <Text>{props.children}</Text>
              </S.ListItem>
            );
          },
          number: (props) => {
            return (
              <S.ListItem>
                <Text variant="body2">{props.children}</Text>
              </S.ListItem>
            );
          },
        },
      }}
    />
  );
};
