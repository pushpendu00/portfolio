import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import IPInfo from 'ip-info-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IPInfo>
        <App />
    </IPInfo>
);
