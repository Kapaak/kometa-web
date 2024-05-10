import { Fragment } from 'react';

import { useTheme } from 'styled-components';

import { A, Strong, Text, VerticalStack } from '~/ui/components/atoms';
import { formatLink } from '~/utils/format';

interface FooterMainContentItemProps {
  label: string;
  details: {
    value: string;
    href?: string;
    action?: 'contact' | 'download';
    external?: boolean;
  }[];
}

export function FooterMainContentItem({
  label,
  details,
}: FooterMainContentItemProps) {
  const theme = useTheme();
  const { grey } = theme.colors;

  return (
    <VerticalStack>
      <Text variant="body5" color={grey[100]}>
        <Strong>{label}</Strong>
      </Text>
      {details.map((detail, index) => (
        <Fragment key={index}>
          {detail.action === 'download' && (
            <Text variant="body5" color={grey[100]}>
              <A
                href={detail?.href}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                {detail.value}
              </A>
            </Text>
          )}

          {detail.action === 'contact' && detail?.href && (
            <Text variant="body5" color={grey[100]}>
              <A href={formatLink(detail.href)}>{detail.value}</A>
            </Text>
          )}

          {detail.external && detail?.href && (
            <Text variant="body5" color={grey[100]}>
              <A href={detail.href} target="_blank" rel="noopener noreferrer">
                {detail.value}
              </A>
            </Text>
          )}

          {detail.action === undefined && !detail.external && (
            <Text variant="body5" color={grey[100]}>
              {detail.value}
            </Text>
          )}
        </Fragment>
      ))}
    </VerticalStack>
  );
}
