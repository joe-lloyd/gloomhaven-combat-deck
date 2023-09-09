import { act, renderHook } from '@testing-library/react';
import { usePerkToggle } from './usePerkToggle';

test('toggles perk correctly', () => {
  const { result } = renderHook(() => usePerkToggle());

  // Test initial state
  expect(result.current.selectedPerks).toEqual({});

  // Toggle first box
  act(() => {
    result.current.togglePerk('Add two +1 cards', 0);
  });

  expect(result.current.selectedPerks).toEqual({ 'Add two +1 cards': 1 });

  // Toggle second box
  act(() => {
    result.current.togglePerk('Add two +1 cards', 1);
  });

  expect(result.current.selectedPerks).toEqual({ 'Add two +1 cards': 2 });

  // Toggle off
  act(() => {
    result.current.togglePerk('Add two +1 cards', 1);
  });

  expect(result.current.selectedPerks).toEqual({ 'Add two +1 cards': 0 });
});
