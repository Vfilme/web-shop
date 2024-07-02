const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('i did it :)');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT} `);
});
