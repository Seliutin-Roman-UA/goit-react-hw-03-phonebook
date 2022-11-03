import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm ';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';

import { PhoneBook } from './App.styled';

const keyLS = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'ROMAN Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { name, number } = newContact;

    if (this.state.contacts.some(el => el.name === name)) {
      alert(`${name} is already  in  contacts`);
      return;
    }
    const id = nanoid(8);
    this.setState(state => {
      return { contacts: [...state.contacts, { id, name, number }] };
    });
  };

  delContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(i => i.id !== id),
    }));
  };
  setFilter = event => this.setState({ filter: event.currentTarget.value });
  clearFilter = () => this.setState({ filter: '' });

  componentDidMount() {
    try {
      const localStorageData = localStorage.getItem(keyLS);   
      if (localStorageData) this.setState({ contacts: JSON.parse(localStorageData) });
      } catch (error) {
      console.error('I am so sory. Shit happens: ', error.message);
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem(keyLS, JSON.stringify(this.state.contacts));
  }

  render() {
    const { contacts } = this.state;
    const normalizeFilter = this.state.filter.toLowerCase();
    const filtredContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <PhoneBook>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.setFilter}
          onClick={this.clearFilter}
        />
        <ListContacts
          filtredContacts={filtredContacts}
          delContact={this.delContact}
        />
      </PhoneBook>
    );
  }
}
