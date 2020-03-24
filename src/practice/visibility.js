import React from 'react';

// 1. Create a class extending React.Component
class Visibility extends React.Component {
    // 2. Define a constructor function, pass props, call super on props, and bind any relevant methods by sandwiching them between "this"
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        // 3. Set up the intitial state
        this.state = {
            visibility: false
        }
    }

    // 4. Create any helper methods and specify what effect they should have on the previous state
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    // 5. Render + return what should be reflected on the website and pass through methods to onClick and state changes to this.state
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey, these are some details you can see!</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Visibility;