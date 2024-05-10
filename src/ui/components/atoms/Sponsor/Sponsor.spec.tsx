import { render } from '@testing-library/react'

import { withTheme } from '~/ui/theme'

import { Sponsor } from './Sponsor'

describe('Sponsor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      withTheme(<Sponsor href="" name="sponsor" />)
    )

    expect(baseElement).toBeTruthy()
    expect(baseElement).toMatchSnapshot()
  })
})
