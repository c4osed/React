import React from 'react';
import ReactDom from 'react-dom';
// import App from './App.js';
import './index.css'
import Loadable from 'react-loadable';

// const element = <div>     <App/> </div>

const LoadableOtherComponent = Loadable({
    loader: () => import ('./App'),
    loading: () => <div>Loading...</div>
});

const MyComponent = () => (<LoadableOtherComponent/>);

ReactDom.render(LoadableOtherComponent, document.getElementById('root'))