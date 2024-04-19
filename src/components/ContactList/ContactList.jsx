import cc from './ContactList.module.css';

import Contact from '../Contact/Contact';

const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={cc.contactList}>
      {contactList.map(({ id, name, number }) => (
        <li className={cc.contact} key={id}>
          <Contact name={name} number={number} id={id} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
