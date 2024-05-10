import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { Flex } from './Flex'

describe('Flex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      withTheme(<Flex direction="row">This is inside flex</Flex>)
    )

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
