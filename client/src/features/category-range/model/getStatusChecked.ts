export const getStatusChecked = (el: string, searchParams: any) => {
    const params = new URLSearchParams(searchParams.toString());
    return (
        params.has('categories')
            ? params.get('categories')?.split(',')
            : ['empty']
    )?.includes(el);
};
