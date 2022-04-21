import { renderHook, act } from '@testing-library/react-hooks';
import { ChangeEvent } from 'react';
import usePagination from './usePagination';

describe('hooks/usePagination', () => {
    const items: number[] = Array.from(Array(150), (_e, i) => i);

    test('initializes with currentPage(1) and itemsPerPage(10) and items length(10) and pageNumber(15) and totalItems(50)', () => {
        const { result } = renderHook(() => usePagination(items));
        expect(result.current.currentPage).toEqual(1);
        expect(result.current.itemsPerPage).toEqual(10);
        expect(result.current.items.length).toEqual(10);
        expect(result.current.pagesNumber).toEqual(15);
        expect(result.current.totalItems).toEqual(150);
    });

    test('handlePage should return 15 value', () => {
        const { result } = renderHook(() => usePagination(items));
        const { handlePage } = result.current;
        act(() => handlePage({ target: { value: '15' } } as ChangeEvent<HTMLSelectElement>));
        expect(result.current.currentPage).toEqual(15);
    });
    test('handleNext should return 2 value', () => {
        const { result } = renderHook(() => usePagination(items));
        const { handleNext } = result.current;
        act(() => handleNext());
        expect(result.current.currentPage).toEqual(2);
    });
    test('handlePrevious should return 1 value', () => {
        const { result } = renderHook(() => usePagination(items));
        const { handleNext, handlePrevious } = result.current;
        act(() => {
            handleNext();
            handlePrevious();
        });
        expect(result.current.currentPage).toEqual(1);
    });
    test('handleItemsPerPage should return itemsPerPage(50) and items length(50) and pagesNumber(3)', () => {
        const { result } = renderHook(() => usePagination(items));
        const { handleItemsPerPage } = result.current;
        act(() => handleItemsPerPage({ target: { value: '20' } } as ChangeEvent<HTMLSelectElement>));
        expect(result.current.itemsPerPage).toEqual(20);
        expect(result.current.items.length).toEqual(20);
    });
    test('handleItemsPerPage should return 15 value', () => {
        const { result } = renderHook(() => usePagination(items));
        const { handleItemsPerPage } = result.current;
        act(() => handleItemsPerPage({ target: { value: '50' } } as ChangeEvent<HTMLSelectElement>));
        expect(result.current.itemsPerPage).toEqual(50);
        expect(result.current.items.length).toEqual(50);
        expect(result.current.pagesNumber).toEqual(3);
    });
});
