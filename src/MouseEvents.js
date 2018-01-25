import React, {Component} from 'react';

class MouseEvents extends Component {
    render() {
        return (
            <div>
                <h1>Mouse Event</h1>
                <button onClick={() => {
                    alert("aa")
                }}>On Click
                </button>
            </div>
        );
    }
}

export default MouseEvents;