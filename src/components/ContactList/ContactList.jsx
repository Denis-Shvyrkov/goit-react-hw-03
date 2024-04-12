import cc from './ContactList.module.css';

const ContactList = ({ contactList }) => {
  return (
    <ul className={cc.contactList}>
      {contactList.map(({ id, name, number }) => (
        <li className={cc.contact} key={id}>
          <div className={cc.contactInfo}>
            <p>{name}</p>
            <p>{number}</p>
          </div>
          <button className={cc.deleteBtn}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
