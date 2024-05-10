import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { A } from './A'

describe('A', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<A />))

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
