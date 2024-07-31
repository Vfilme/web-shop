export const changePriceRange = (
    searchParams: URLSearchParams,
    setSearchParams: (params: URLSearchParams) => void,
    value: number[],
) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('min_price', `${value[0]}`);
    params.set('max_price', `${value[1]}`);
    setSearchParams(params);
};
