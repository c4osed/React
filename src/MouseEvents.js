import React, {Component} from 'react';

class MouseEvents extends Component {
    OnClick() {
        alert("Hello");
    }
    render() {
        return (
            <div>
                <h1>Mouse Event</h1>
                {/* <button onClick={() => {
                    alert("Hello")
                }}>On Click
                </button> */}
                <button onClick={this.OnClick}>On Click</button>
            </div>
        );
    }
}

export default MouseEvents;