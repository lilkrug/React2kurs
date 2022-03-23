import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Exchange from './Exchange';
import Chess from './Chess';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <Exchange />
    </React.StrictMode>,
    document.getElementById('exchange')
);

ReactDOM.render(
    <React.StrictMode>
        <Chess />
    </React.StrictMode>,
    document.getElementById('chess')
);


