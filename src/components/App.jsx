import React, {Component} from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm"


export class App extends Component {
  state = {
    contacts: [],
  }
  
  formAddContact = ({name, number}) => {
    const newContact = { id: nanoid(), name, number };
    this.state.contacts.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
        ? alert(`${newContact.name} is already in contacts`)
        : this.setState(prevState => {
          return {contacts: [newContact, ...prevState.contacts]}
        })
    )
}
  
render() {
  return (
    <>
    <h2>Phonebook</h2>
      <ContactForm addContact={this.formAddContact} />
      </>
  );
  }
};
 