import cc from './ContactList.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';

const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={cc.contactList}>
      {contactList.map(({ id, name, number }) => (
        <li className={cc.contact} key={id}>
          <div className={cc.contactInfo}>
            <div>
              <p>
                <IoPersonSharp className={cc.contactIcon} />
                {name}
              </p>
            </div>
            <div>
              <p>
                <FaPhone className={cc.contactIcon} />
                {number}
              </p>
            </div>
          </div>
          <button onClick={() => onDelete(id)} className={cc.deleteBtn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
