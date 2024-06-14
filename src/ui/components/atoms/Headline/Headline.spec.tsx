import { render } from '@testing-library/react';

import { withTheme } from '~/ui/theme';

import { H1 } from './Headline';

describe('H1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<H1>Headline</H1>));

    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});
