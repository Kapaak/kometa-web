import { Fragment } from 'react'

import { FooterMainContentItem } from '../FooterMainContentItem'
import { FooterMainContentItemWrapper } from '../FooterMainContentItemWrapper'

import * as S from './FooterMainContent.style'

import { footerMainContentData } from './FooterMainContent.data'
export function FooterMainContent() {
  return (
    <S.FooterMainContent>
      {footerMainContentData.map((footerContent) => (
        <FooterMainContentItemWrapper
          key={footerContent.title}
          title={footerContent.title}
        >
          {footerContent.data.map((item, index) => (
            <Fragment key={index}>
              <FooterMainContentItem
                label={item.label}
                details={item.details}
              />
              {item !== footerContent.data.at(-1) && <br />}
            </Fragment>
          ))}
        </FooterMainContentItemWrapper>
      ))}
    </S.FooterMainContent>
  )
}
