const path = require('path');
const fs = require('fs');

const getProducts = () => {
    const productsFilePath = path.join(__dirname, 'products.json');
    const productsData = fs.readFileSync(productsFilePath, 'utf8');
    return JSON.parse(productsData);
};

const getProduct = (products, id) => {
    const [product] = products.filter((el) => {
        return el.id == id;
    });
    return product;
};

const getProductsCategories = (products) => {
    let categories = new Set();
    products.forEach(({ category }) => {
        categories.add(category.name);
    });
    return [...categories];
};

const getPageProducts = (products, pageNumber, pageSize) => {
    const pageStart = pageNumber * pageSize - pageSize + 1;
    const pageEnd = pageNumber * pageSize;
    const newProducts = products.filter((e, i) => {
        return i + 1 >= pageStart && i + 1 <= pageEnd;
    });
    return newProducts;
};

const getProductsPrice = (products) => {
    const minPrice = products.reduce((min, { price }) => {
        return (min = min > price ? price : min);
    }, Number.MAX_VALUE);
    const maxPrice = products.reduce((max, { price }) => {
        return (max = max < price ? price : max);
    }, Number.MIN_VALUE);
    return { minPrice: minPrice, maxPrice: maxPrice };
};

const usePriceRange = (products, minPrice = 0, maxPrice = Number.MAX_VALUE) => {
    return products.filter(
        ({ price }) => price >= minPrice && price <= maxPrice,
    );
};

const useCategoriesRange = (products, categories) => {
    if (!categories) return products;
    return products.filter(({ category }, i) => {
        return categories.split(',').includes(category.name);
    });
};

module.exports = {
    getProducts,
    getProduct,
    getProductsCategories,
    getProductsPrice,
    getPageProducts,
    usePriceRange,
    useCategoriesRange,
};
