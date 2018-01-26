import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import Calculator from './Calculator'

const element = <div>
    <h1>Calculator</h1>
    <Calculator/>
</div>

ReactDom.render(element, document.getElementById('root'))