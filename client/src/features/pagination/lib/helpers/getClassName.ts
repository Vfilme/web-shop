export const getClassName = (
    numberActualPage: number,
    countPages: number,
    el: number,
) => {
    const firstPage = numberActualPage - 1 ? numberActualPage - 1 : 3;
    const lastPage = numberActualPage == countPages ? countPages - 2 : '';
    const condition: boolean =
        `${firstPage} ${numberActualPage} ${lastPage} ${numberActualPage + 1}`.includes(
            el.toString(),
        );
    if (!condition) return 'outSideGroup';
    return '';
};
