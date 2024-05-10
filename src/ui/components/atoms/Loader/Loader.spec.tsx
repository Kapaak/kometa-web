import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { Loader } from './Loader'

describe('Loader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<Loader />))

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
