import { PropsWithChildren } from 'react'

import { Footer } from '~/components'

interface PageLayoutProps extends PropsWithChildren {}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      {/* Navigation */}
      <main>{children}</main>
      <Footer />
    </>
  )
}
