import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { IconButton } from './IconButton'

describe('IconButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      withTheme(<IconButton icon={null} variant="plain" />)
    )

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
