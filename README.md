# Get Started
## Installation
```
sudo npm install -g create-react-app
create-react-app react-docs
```
## Run React
```
cd react-docs
npm start
```
## Remove and Create
```
rm -f src/*
touch src/index.css
touch src/index.js
```

## Hello React
index.js
```
import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

const element = <div>
    <h1>Hello React</h1>
</div>

ReactDom.render(element, document.getElementById('root'))
```