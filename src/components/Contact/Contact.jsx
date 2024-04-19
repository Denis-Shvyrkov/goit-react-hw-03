import cnc from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={cnc.contactWrap}>
      <div className={cnc.contactInfo}>
        <div>
          <p>
            <IoPersonSharp className={cnc.contactIcon} />
            {name}
          </p>
        </div>
        <div>
          <p>
            <FaPhone className={cnc.contactIcon} />
            {number}
          </p>
        </div>
      </div>
      <button onClick={() => onDelete(id)} className={cnc.deleteBtn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
