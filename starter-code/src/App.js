import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact.js";
class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandom = () => {
    console.log("clicked");
    let random = Math.floor(Math.random() * (contacts.length - 1 - 5)) + 5;
    if (!this.state.contacts.includes(contacts[random])) {
      this.setState({
        contacts: [contacts[random], ...this.state.contacts]
      });
    }
    // contacts.splice(random, 1);
    console.log(contacts);
  };

  sort = () => {
    console.log("clicked");
    let sort = this.state.contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      contacts: sort
    });
  };
  // Sort Contact By Popularity
  sortPop = () => {
    console.log("POP IS CLICKEEEEEED");
    let sort = this.state.contacts.sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    this.setState({
      contacts: sort
    });
  };

  deleteContact = index => {
    this.state.contacts.splice(index, 1);
    this.setState({
      contacts: this.state.contacts
    });
  };

  addAll = () => {
    this.setState({
      contacts: contacts
    });
  };

  render() {
    let item = this.state.contacts.map((el, i) => {
      return (
        <Contact
          index={i}
          key={i}
          img={el.pictureUrl}
          name={el.name}
          popularity={el.popularity}
          delete={this.deleteContact}
        />
      );
    });
    return (
      <div class="container">
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sort}>Sort</button>
        <button onClick={this.sortPop}>Sort by Popularity</button>
        <button onClick={this.addAll}>Add all</button>

        <table id="contactTable">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{item}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
