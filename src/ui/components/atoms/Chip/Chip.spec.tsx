import { render } from '@testing-library/react';

import { withTheme } from '~/ui/theme';

import { Chip } from './Chip';

describe('Chip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<Chip>This is Chip</Chip>));

    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});
