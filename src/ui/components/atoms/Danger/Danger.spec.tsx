import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { Danger } from './Danger'

describe('Danger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<Danger />))

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
