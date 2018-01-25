# 4.State

## App.js
```
import React, {Component} from 'react';
import MyComponent from './MyComponent';
class App extends Component {
    render() {
        return (
            <div>
                <MyComponent/>
            </div>
        );
    }
}

export default App;
```

## MyComponent
```
import React, {Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0
        }
        setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }
    render() {
        let {time} = this.state
        return (
            <div>
                <h1>{time}</h1>
            </div>
        );
    }
}

export default MyComponent;
```