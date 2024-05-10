import { render } from '@testing-library/react';

import { withTheme } from '~/ui/theme';

import { Card } from './Card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<Card />));

    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});
