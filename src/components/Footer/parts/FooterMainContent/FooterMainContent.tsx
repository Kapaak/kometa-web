import { Fragment, useMemo } from 'react';

import { useGetSharedDocuments } from '~/adapters/sharedDocumentsAdapter';

import { FooterMainContentItem } from '../FooterMainContentItem';
import { FooterMainContentItemWrapper } from '../FooterMainContentItemWrapper';

import * as S from './FooterMainContent.style';

import {
  FooterContentData,
  footerMainContentData,
} from './FooterMainContent.data';

export function FooterMainContent() {
  const { data: sharedDocuments } = useGetSharedDocuments();

  const footerContent = useMemo<FooterContentData[]>(() => {
    if (!sharedDocuments?.length) return footerMainContentData;

    const documentsItem: FooterContentData['data'][number] = {
      label: 'Dokumenty',
      details: sharedDocuments.map((document) => ({
        value: document.label ?? '',
        href: document.file ?? '',
        external: true,
      })),
    };

    return footerMainContentData.map((section) =>
      section.id === 'usefulLinks'
        ? { ...section, data: [...section.data, documentsItem] }
        : section
    );
  }, [sharedDocuments]);

  return (
    <S.FooterMainContent>
      {footerContent.map((section) => (
        <FooterMainContentItemWrapper key={section.title} title={section.title}>
          {section.data.map((item, index) => (
            <Fragment key={index}>
              <FooterMainContentItem
                label={item.label}
                details={item.details}
              />
              {item !== section.data.at(-1) && <br />}
            </Fragment>
          ))}
        </FooterMainContentItemWrapper>
      ))}
    </S.FooterMainContent>
  );
}
