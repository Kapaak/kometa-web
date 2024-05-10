import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { Divider } from './Divider'

describe('Divider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<Divider />))

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
