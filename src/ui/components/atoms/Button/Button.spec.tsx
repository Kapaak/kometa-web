import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { Button } from './Button'

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<Button variant="plain" />))

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
