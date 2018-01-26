import React, {Component} from 'react';

class MyComponent extends Component {
    constructor() {
        super()
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