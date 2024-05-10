import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { MainDescription } from './MainDescription'

describe('MainDescription', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      withTheme(<MainDescription>Lorem ipsum</MainDescription>)
    )

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
