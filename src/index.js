import '../public/index.html';
import '../public/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);