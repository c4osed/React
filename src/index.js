import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const element = <div>
    <h1>Hello React</h1>
</div>

ReactDom.render(element, document.getElementById('root'))