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