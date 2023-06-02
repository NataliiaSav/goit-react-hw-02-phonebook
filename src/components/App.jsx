import React, {Component} from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };
  
  formAddContact = ({name, number}) => {
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase() 
        ? alert(`${name} is already in contacts`)
        : this.setState(prevState => {
          return {contacts: [ ...prevState.contacts, {id: nanoid(), name: name, number: number}]}
        })
    )
}
  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };
  render() {
  const existingContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  return (
    <>
    <h2>Phonebook</h2>
      <ContactForm onSubmit={this.formAddContact} />
      <h3>Contacts</h3>
      <Filter value={this.state.filter} onChange={this.changeFilter}/>
      <ContactList contacts={existingContact} onDeleteContact={this.deleteContact} />
      </>
  );
  }
};
 