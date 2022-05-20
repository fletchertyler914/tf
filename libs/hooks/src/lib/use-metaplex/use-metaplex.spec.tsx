import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useMetaplex from './use-metaplex';

describe('useMetaplex', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useMetaplex());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
