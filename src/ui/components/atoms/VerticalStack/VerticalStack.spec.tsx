import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { VerticalStack } from './VerticalStack'

describe('VerticalStack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      withTheme(<VerticalStack>This is inside VerticalStack</VerticalStack>)
    )

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
