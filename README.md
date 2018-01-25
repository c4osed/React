# 3.Props

## App.js
```
import React, {Component} from 'react';
import MyComponent from './MyComponent';
class App extends Component {
    render() {
        return (
            <div>
                <MyComponent animal="Bat" isAnimal/>
                <MyComponent animal="Cat" isAnimal={true}/>
                <MyComponent animal="Book"/>
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
        let {animal, isAnimal} = this.props;
        animal = "It is a " + animal;
        return (
            <div>
                {/* <h1>This is {this.props.animal}</h1> */}
                <h1>{isAnimal && animal}</h1>
            </div>
        );
    }
}

export default MyComponent;
```