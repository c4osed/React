# 2.Component

## index.js
```
import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import App from './App.js';

const element = <div>
    <App/>
</div>

ReactDom.render(element, document.getElementById('root'))
```

## App.js
```
import React, {Component} from 'react';
import MyComponent from './MyComponent';
class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <MyComponent/>
                <MyComponent/>
                <MyComponent/>
            </div>
        );
    }
}

export default App;
```

## MyComponent.js
```
import React, {Component} from 'react';

class MyComponent extends Component {
    render() {
        return (
            <h1>This is Component</h1>
        );
    }
}

export default MyComponent;
```