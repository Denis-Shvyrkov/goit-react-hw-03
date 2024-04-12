import { useState } from 'react';
import ac from './App.module.css';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

const initialContactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Luke Skywalker', number: '227-91-30' },
  { id: 'id-6', name: 'Obi Van Kenobi', number: '227-91-47' },
];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState(initialContactList);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log(visibleContacts);

  const handleInputValue = e => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className={ac.app}>
      <SearchBox inputValue={inputValue} onChange={handleInputValue} />
      <ContactList contactList={visibleContacts} />
    </div>
  );
}

export default App;
