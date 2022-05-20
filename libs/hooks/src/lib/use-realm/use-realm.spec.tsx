import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useRealm from './use-realm';

describe('useRealm', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useRealm());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
