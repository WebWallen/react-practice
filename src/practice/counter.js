import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  };

  handleAddOne() {
    console.log('Plus');
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    console.log('Minus');
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    console.log('Reset');
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;

// let count = 0;

// const addOne = () => {
//   count = count + 1;
//   console.log('Add one', count)
//   renderCounterApp();
// };

// const minusOne = () => {
//   count = count - 1;
//   console.log('Minus one')
// };

// const reset = () => {
//   count = 0;
//   console.log('Reset count')
// };

// let templateThree;

// const renderCounterApp = () => {
//   templateThree = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
//     return (
//       <div className="counter">
//         {templateThree}
//         {renderCounterApp()}
//       </div>
//     )
// }