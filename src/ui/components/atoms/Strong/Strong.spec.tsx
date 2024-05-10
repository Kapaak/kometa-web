import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { Strong } from './Strong'

describe('Strong', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<Strong>Stronk</Strong>))

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
