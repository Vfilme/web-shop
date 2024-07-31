export const setCategoriesInURL = (
    el: string,
    searchParams: URLSearchParams,
    setSearchParams: (params: URLSearchParams) => void,
) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!params.has('categories')) {
        params.set('categories', `${[`${el}`]}`);
        setSearchParams(params);
    } else {
        const categories = new Set([
            ...(params.get('categories')?.split(',') as Array<string>),
        ]);
        if (categories.has(el)) {
            categories.delete(el);
            if (categories.size) params.set('categories', `${[...categories]}`);
            else {
                params.delete('categories');
            }
            setSearchParams(params);
        } else {
            categories.add(el);
            params.set('categories', `${[...categories]}`);
            setSearchParams(params);
        }
    }
};
