import React, { Component } from "react";
import "./App.css";
import Person from "./components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "jas", age: 20 },
      { id: 2, name: "yash", age: 22 },
      { id: 3, name: "samar", age: 30 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    //find the person with id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    //getting the person with id. Don't mutate state with ... spread operator
    const person = {
      ...this.state.persons[personIndex]
    }

    //updating the person's name
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //update the state
    this.setState({
      persons: persons
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
                change={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];

    if (persons.length <= 2) {
      classes.push('red'); //classes = 'red'
    }

    if (persons.length <= 1) {
      classes.push('bold') //classes = 'red, bold'
    }
    return (
      <div className="App">
        {/* <button style={style} onClick={() => this.switchNameHandler("Jassa")}> */}
        <p className={classes.join(" ")}>This is really working..!</p>
        <button style={style} onClick={this.toggleNameHandler}>
          Toggle Persons
        </button>
        {person}
      </div>
    );
  }
}


export default App;