import React from 'react';
import './App.css';

function App() {

const app = {
  // Can't render whole object, must use properties (string/num)
  title: 'Indecision App', 
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two', 'Three']
};

const submit = (e) => {
  e.preventDefault();
  e.target.name = e.target.value
}

const numbers = [50, 100, 150];

// JSX Variable
const template = (
  <div>
    {/* Javascript expressions go in curly braces */}
    <h1>{app.title}</h1>
    {/* This is good for making dynamic values in a big database */}
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
    <ol>
      {
        app.options.map(op => <li key={op}>Option: {op}</li>)
      }
    </ol>
    {
      numbers.map(num => <p key={num}>Number: {num}</p>)
    }
    <form onSubmit={submit}>
      <input type="test" name="option"></input>
      <button>Add Option</button>
    </form>
  </div>
)

const user = {
  name: 'Daniel',
  age: 32,
  location: 'Kingsport'
};

function getLocation(location) {
  return location ? <p>Location: {location}</p> : undefined;
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {/* If location isn't defined, nothing shows up */}
    {getLocation(user.location)}
  </div>
)

  return (
    <div className="App">
      {template}
      {templateTwo}
    </div>
  );

}

export default App;
