import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { Hidden } from './Hidden'

describe('Hidden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<Hidden>This is hidden</Hidden>))

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
