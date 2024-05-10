import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { MaxWidth } from './MaxWidth'

describe('MaxWidth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<MaxWidth />))

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
