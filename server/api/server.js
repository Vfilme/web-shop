const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.options('*', cors(corsOptions));

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

const PORT = process.env.PORT || 4000;
const {
    getProducts,
    getProduct,
    getProductsCategories,
    getProductsPrice,
    getPageProducts,
    usePriceRange,
    useCategoriesRange,
} = require('../scripts');

app.use(express.json());

const products = getProducts();

app.get('/test', (req, res) => {
    const minPrice = req.query.minPrice || 0;
    const maxPrice = req.query.maxPrice || Number.MAX_VALUE;
    const categories = req.query.categories || null;

    const newProducts = usePriceRange(products, minPrice, maxPrice);
    res.json(products);
});

app.get('/all-products', (req, res) => {
    res.json(products);
});

app.get('/products', (req, res) => {
    const minPrice = req.query.min_price || 0;
    const maxPrice = req.query.max_price || Number.MAX_VALUE;

    const categories = req.query.categories || null;
    const newProducts = usePriceRange(products, minPrice, maxPrice);
    const newProducts2 = useCategoriesRange(newProducts, categories);

    const pageNumber = req.query.page_number || 1;
    const pageSize = req.query.pageSize || 8;

    res.json(getPageProducts(newProducts2, pageNumber, pageSize));
});

app.get('/product', (req, res) => {
    const productId = req.query.productId;
    const product = getProduct(products, productId);
    res.json(product);
});

app.get('/products/count', (req, res) => {
    const minPrice = req.query.min_price || 0;
    const maxPrice = req.query.max_price || Number.MAX_VALUE;
    const categories = req.query.categories || null;

    const newProducts = usePriceRange(products, minPrice, maxPrice);
    res.json(useCategoriesRange(newProducts, categories).length);
});

app.get('/products/price-range', (req, res) => {
    res.json(getProductsPrice(products));
});

app.get('/products/categories', (req, res) => {
    res.json(getProductsCategories(products));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT} `);
});
