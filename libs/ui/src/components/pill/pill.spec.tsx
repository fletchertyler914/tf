import { render } from '@testing-library/react';

import Pill from './pill';

describe('Pill', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pill title="Test" />);
    expect(baseElement).toBeTruthy();
  });
});
