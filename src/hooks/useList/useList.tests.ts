import { renderHook, act } from '@testing-library/react-hooks';
import useList from './useList';

describe('hooks/useList', () => {
    test('returns initial items', () => {
        const { result } = renderHook(() => useList([1, 2, 3]));

        expect(result.current[0]).toStrictEqual([1, 2, 3]);
    });

    test('clears list', () => {
        const { result } = renderHook(() => useList([1, 2, 3]));

        const [, { clear }] = result.current;

        act(() => {
            clear();
        });

        expect(result.current[0]).toStrictEqual([]);
    });

    test('adds item', () => {
        const { result } = renderHook(() => useList([1, 2, 3]));

        const [, { add }] = result.current;

        act(() => {
            add(4);
        });

        expect(result.current[0]).toStrictEqual([1, 2, 3, 4]);
    });

    test('removes item', () => {
        const { result } = renderHook(() => useList([1, 2, 3]));

        const [, { remove }] = result.current;

        act(() => {
            remove(2);
        });

        expect(result.current[0]).toStrictEqual([1, 3]);
    });

    test('toggles item', () => {
        const { result } = renderHook(() => useList([1, 2, 3]));

        act(() => {
            result.current[1].toggle(2);
        });

        expect(result.current[0]).toStrictEqual([1, 3]);

        act(() => {
            result.current[1].toggle(2);
        });

        expect(result.current[0]).toStrictEqual([1, 3, 2]);
    });
});
