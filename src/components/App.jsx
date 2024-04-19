import { useEffect, useState } from 'react';
import ac from './App.module.css';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import * as Yup from 'yup';

import Notification from './Notification/Notification';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem('contacts');
  return savedContacts !== null ? JSON.parse(savedContacts) : [];
};

const initialValues = { name: '', number: '' };

const formValidation = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
      'Please enter digits'
    )
    .required('Required'),
});

function App() {
  const [inputValue, setInputValue] = useState('');

  const [contacts, setContacts] = useState(getInitialContacts);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputValue = e => {
    setInputValue(e.target.value);
  };

  const onAdd = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={ac.app}>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initialValues} onAdd={onAdd} validationSchema={formValidation} />
      <SearchBox inputValue={inputValue} onChange={handleInputValue} />
      {contacts.length !== 0 ? (
        <ContactList contactList={visibleContacts} onDelete={deleteContact} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
