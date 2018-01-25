import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import App from './App.js';

const element = <div>
    <App/>
</div>

ReactDom.render(element, document.getElementById('root'))