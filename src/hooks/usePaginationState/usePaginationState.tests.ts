import { renderHook, act } from '@testing-library/react-hooks';
import usePaginationState from './usePaginationState';

describe('hooks/usePaginationState', () => {
    test('handles first page', () => {
        const { result } = renderHook(() => usePaginationState(1, 10, 100));

        expect(result.current.currentPage).toEqual(1);
        expect(result.current.pagesTotal).toEqual(10);
        expect(result.current.fromIndex).toEqual(0);
        expect(result.current.toIndex).toEqual(9);
        expect(result.current.hasNextPage).toEqual(true);
        expect(result.current.hasPreviousPage).toEqual(false);
    });

    test('handles last page', () => {
        const { result } = renderHook(() => usePaginationState(10, 10, 100));

        expect(result.current.currentPage).toEqual(10);
        expect(result.current.pagesTotal).toEqual(10);
        expect(result.current.fromIndex).toEqual(90);
        expect(result.current.toIndex).toEqual(99);
        expect(result.current.hasNextPage).toEqual(false);
        expect(result.current.hasPreviousPage).toEqual(true);
    });

    test('go to next page', () => {
        const { result } = renderHook(() => usePaginationState(1, 10, 100));
        const { goNext } = result.current;

        act(() => goNext());

        expect(result.current.currentPage).toEqual(2);
        expect(result.current.pagesTotal).toEqual(10);
        expect(result.current.fromIndex).toEqual(10);
        expect(result.current.toIndex).toEqual(19);
        expect(result.current.hasNextPage).toEqual(true);
        expect(result.current.hasPreviousPage).toEqual(true);
    });

    test('go to previous page', () => {
        const { result } = renderHook(() => usePaginationState(10, 10, 100));
        const { goPrevious } = result.current;

        act(() => goPrevious());

        expect(result.current.currentPage).toEqual(9);
        expect(result.current.pagesTotal).toEqual(10);
        expect(result.current.fromIndex).toEqual(80);
        expect(result.current.toIndex).toEqual(89);
        expect(result.current.hasNextPage).toEqual(true);
        expect(result.current.hasPreviousPage).toEqual(true);
    });
});
