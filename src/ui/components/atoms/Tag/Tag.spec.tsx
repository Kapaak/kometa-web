import { render } from '@testing-library/react';

import { withTheme } from '~/ui/theme';

import { Tag } from './Tag';

describe('Tag', () => {
  it('should render successfully', () => {
    const { baseElement } = render(withTheme(<Tag>This is Tag</Tag>));

    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});
