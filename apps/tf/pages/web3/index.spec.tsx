import { render } from '@testing-library/react';

import Web3 from './index';

describe('Web3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Web3 />);
    expect(baseElement).toBeTruthy();
  });
});
