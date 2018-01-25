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