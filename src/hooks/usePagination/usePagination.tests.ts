import { renderHook, act } from '@testing-library/react-hooks';
import { ChangeEvent } from 'react';
import usePagination from './usePagination';

describe('hooks/usePagination', () => {
    test('initializes with currentPage(1) and itemsPerPage(10)', () => {
        const { result } = renderHook(() => usePagination());
        expect(result.current.currentPage).toEqual(1);
        expect(result.current.itemsPerPage).toEqual(10);
    });

    test('handleChangePage should set currentPage(15) ', () => {
        const { result } = renderHook(() => usePagination());
        const { handleChangePage } = result.current;
        act(() => handleChangePage({ target: { value: '15' } } as ChangeEvent<HTMLSelectElement>));
        expect(result.current.currentPage).toEqual(15);
    });
    test('handleNext should set currentPage(2)', () => {
        const { result } = renderHook(() => usePagination());
        const { handleNext } = result.current;
        act(() => handleNext());
        expect(result.current.currentPage).toEqual(2);
    });
    test('handlePrevious should set currentPage(1)', () => {
        const { result } = renderHook(() => usePagination());
        const { handleNext, handlePrevious } = result.current;
        act(() => {
            handleNext();
            handlePrevious();
        });
        expect(result.current.currentPage).toEqual(1);
    });
    test('handleItemsPerPage should set itemsPerPage(20)', () => {
        const { result } = renderHook(() => usePagination());
        const { handleItemsPerPage } = result.current;
        act(() => handleItemsPerPage({ target: { value: '20' } } as ChangeEvent<HTMLSelectElement>));
        expect(result.current.itemsPerPage).toEqual(20);
    });
    test('handleItemsPerPage should set itemsPerPage(50)', () => {
        const { result } = renderHook(() => usePagination());
        const { handleItemsPerPage } = result.current;
        act(() => handleItemsPerPage({ target: { value: '50' } } as ChangeEvent<HTMLSelectElement>));
        expect(result.current.itemsPerPage).toEqual(50);
    });
});
