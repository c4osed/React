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