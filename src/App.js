import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "jas", age: 20 },
      { id: 2, name: "yash", age: 22 },
      { id: 3, name: "samar", age: 30 }
    ],
    showPersons: false
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "jas", age: 20 },
        { name: "yash", age: 22 },
        { name: event.target.value, age: 30 }
      ]
    });
  };

  toggleNameHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deleteNameHandler = index => {
    // const persons = this.state.persons.splice(); //or
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons
    });
  };

  render() {
    const { persons, showPersons } = this.state;
    const style = {
      backgroundColor: "green",
      color: 'white',
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let person = null;

    if (showPersons) {
      person = (
        <div>
          {persons.map((person, index) => {
            return (
              <Person
                click={() => this.deleteNameHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={() => this.nameChangedHandler(person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];

    if (persons.length <= 2) {
      classes.push('red'); //classes = 'red'
    }

    if (persons.length <= 1) {
      classes.push('bold') //classes = 'red, bold'
    }
    return (
      <StyleRoot>
        <div className="App">
          {/* <button style={style} onClick={() => this.switchNameHandler("Jassa")}> */}
          <p className={classes.join(" ")}>This is really working..!</p>
          <button style={style} onClick={this.toggleNameHandler}>
            Toggle Persons
        </button>
          {person}
        </div>
      </StyleRoot>
    );
  }
}


export default Radium(App);