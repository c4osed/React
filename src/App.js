import React, {Component} from 'react';
import MyComponent from './MyComponent';
class App extends Component {
  render() {
    return (
      <div>
        <MyComponent c="C"/>
      </div>
    );
  }
}

export default App;