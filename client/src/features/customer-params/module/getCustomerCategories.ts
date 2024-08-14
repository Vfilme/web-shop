export const getCustomerCategoreis = (searchParams: URLSearchParams) => {
    const categories = [
        ['Clothes'],
        ['Electronics'],
        ['Furniture'],
        ['Shoes'],
        ['Miscellaneous'],
    ];
    return categories.filter((c) => {
        if (searchParams.get('categories')?.includes(c.toString())) return c;
    });
};
