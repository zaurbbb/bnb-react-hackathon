import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import './styles/index.css';
import './styles/reset.css';
import App from './App';
import {ThemeProvider} from '@mui/material';
import {theme} from './themes/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (window.ethereum) {
    root.render(
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    );
} else {
    alert('install metamask extension!!')
}

