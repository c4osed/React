import React, {Component} from 'react';
import Button from './Button';

class Calculator extends Component {
    render() {
        return (
            <div className="layout">
                <div className="result">0
                </div>
                <Button value="7"/>
                <Button value="7"/>
                <Button/>
            </div>
        );
    }
}

export default Calculator;