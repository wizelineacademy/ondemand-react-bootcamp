import { useMemo } from "react";

export const DOTS = '...';

const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
    totalPageCount,
    pageSize,
    pagesShowed = 1,
    currentPage
}) => {
    const paginationRange = useMemo(() => {
        //const totalPageCount = Math.ceil(totalCount / pageSize);

        const totalPageNumbers = pagesShowed + 5;

        if (totalPageNumbers >= totalPageCount) {
        return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - pagesShowed, 1);
        const rightSiblingIndex = Math.min(
            currentPage + pagesShowed,
            totalPageCount
        );
        
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * pagesShowed;
        let leftRange = range(1, leftItemCount);
        
        return [...leftRange, DOTS, totalPageCount];
        }
        
        if (shouldShowLeftDots && !shouldShowRightDots) {
        
        let rightItemCount = 3 + 2 * pagesShowed;
        let rightRange = range(
            totalPageCount - rightItemCount + 1,
            totalPageCount
        );
        return [firstPageIndex, DOTS, ...rightRange];
        }
        
        if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
        
    }, [totalPageCount, pagesShowed, currentPage]);
    
    return paginationRange;
}