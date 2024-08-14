import { isNotNull } from '../../../shared/lib/helpers/IsNotNull';

export const deleteParam = (
    param: string,
    searchParams: URLSearchParams,
    setSearchParams: (searchParams: URLSearchParams) => void,
) => {
    const categories: string | null = searchParams.get('categories');
    const params = new URLSearchParams(searchParams.toString());
    if (isNotNull(categories)) {
        const newCategories = categories.split(',').filter((c: string) => {
            return c != param;
        });
        params.set('categories', newCategories.toString());
        if (newCategories.length == 0) params.delete('categories');
        setSearchParams(params);
    }
};
