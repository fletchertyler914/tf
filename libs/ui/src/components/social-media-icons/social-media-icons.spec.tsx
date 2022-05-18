import { render } from '@testing-library/react';

import SocialMediaIcons from './social-media-icons';

describe('SocialMediaIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialMediaIcons />);
    expect(baseElement).toBeTruthy();
  });
});
