import React, { Component } from 'react';
import data from './j.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        {
          data.map(function(student){
            return <li>{student.id} - {student.name}</li>;
          })
        }
      </div>
    );
  }
}

export default App;
