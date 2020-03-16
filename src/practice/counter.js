let count = 0;

const addOne = () => {
  count = count + 1;
  console.log('Add one', count)
  renderCounterApp();
};

const minusOne = () => {
  count = count - 1;
  console.log('Minus one')
};

const reset = () => {
  count = 0;
  console.log('Reset count')
};

let templateThree;

const renderCounterApp = () => {
  templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
    return (
      <div className="counter">
        {templateThree}
        {renderCounterApp()}
      </div>
    )
}