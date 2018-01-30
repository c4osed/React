import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import Navbar from './Navbar';

const element = <div>
    <Navbar/>
    <h1>Hello React</h1>
</div>

ReactDom.render(element, document.getElementById('root'))