import React from 'react';

class IndecisonApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put Your life in the hands of a computer."
    const options = ["Stuff", "Things", "Stuff and Things"]

    return (
      <div>
        {/* Props allow us to pass custom info to components */}
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.options.map(option => <Option key={option} text={option}/>)
          }
          {/* <Option /> */}
        </ul>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Add more stuff/things."></input>
        </form>
      </div>
    );
  }
}

export default function App() {
  return (
    <>
      <IndecisonApp />
    </>
  )
}