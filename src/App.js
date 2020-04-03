import React from 'react';
import Counter from './practice/counter';
import Visibility from './practice/visibility';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    // Bind each method to their specific instances as defined by "this"
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  // Lifecycle methods only available in class-based components
  // Local storage only works with strings, hence need for JSON
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
      // Now options are persisted after reloads
        this.setState(() => ({ options }));
        console.log('Fetching data');
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('Saving data')
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  // Delete all options by setting to empty array
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  // Delete one option
  handleDeleteOption(optionToRemove) {
    console.log('delete ', optionToRemove)
    this.setState((prevState) => ({
      // Filter out the option specified to remove by making not equal to other options
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  // Add option by concating previous options state to an array-ified container for new option
  handleAddOption(option) {
    if (!option) return 'Enter valid value to add item';
    
    else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put Your life in the hands of a computer."

    return (
      <div>
        {/* Props allow us to pass custom info to components */}
        <Header />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          // Variables/elements require state, functions/methods don't
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <User name="Daniel" age={33}/>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision',
  subtitle: 'Put Your Life in the Hands of a Computer'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      <ul>
        {
          props.options.map((option) => (
            <Option 
              key={option} 
              text={option}
              // Passing in parent method to child via props
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </ul>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.text}
      <button 
        // To make dynamic, use a CB with onClick and pass in the text to be deleted via props
        onClick={((e) => {
          props.handleDeleteOption(props.text);
        })}
      >
        Delete
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    // ".option" corresponds with name given to input and trim removes whitespace
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error }));

    // Clear input after submission 
    if (!error) e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Add more stuff/things."></input>
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}


// Stateless functional component practice
const User = (props) => {
  return (
    <div>
      {/* Difference: no "this" -- and faster sans class overhead*/}
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      {/* Default props are now empty array, this is custom */}
      {/* <IndecisionApp options={['Pitbull', 'Poodle']}/> */}
      <Counter />
      {/* <Visibility />  */}
    </>
  )
}
