import '../public/index.html';
import '../public/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(<App />);