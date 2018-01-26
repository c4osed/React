import React, {Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.C = this
            .C
            .bind(this)
    }
    B(b) {
        alert(b)
    }
    C() {
        alert(this.props.c)
    }
    render() {
        let a = "A";
        let b = "B";
        return (
            <div>

                {alert(a)}
                <button onClick={() => {
                    alert(a)
                }}>A</button>

                {this.B(b)}
                {/* <button onClick={this.B}>B-1</button> */}
                <button onClick={() => {
                    this.B(b)
                }}>B-2</button>

                <button onClick={this.C}>C</button>
            </div>
        );
    }
}

export default MyComponent;