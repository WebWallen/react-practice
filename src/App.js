import React from 'react';
import Counter from './practice/counter';
import Visibility from './practice/visibility';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) return 'Enter valid value to add item';
    
    else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        // Concat previous state options array with new option
        options: prevState.options.concat([option])
      };
    });
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
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <User name="Daniel" age={33}/>
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
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
      <ul>
        {
          props.options.map(option => <Option key={option} text={option}/>)
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

    this.setState(() => {
      return {
        error: error
      }
    })
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
      <IndecisionApp options={['Pitbull', 'Poodle']}/>
      {/* <Counter /> */}
      {/* <Visibility />  */}
    </>
  )
}
