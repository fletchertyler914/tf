import { render } from '@testing-library/react';

import Web2 from './index';

describe('Web2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Web2 />);
    expect(baseElement).toBeTruthy();
  });
});
