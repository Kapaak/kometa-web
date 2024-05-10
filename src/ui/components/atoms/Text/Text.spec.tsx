import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { Text } from './Text'

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<Text variant="body2" />))

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
