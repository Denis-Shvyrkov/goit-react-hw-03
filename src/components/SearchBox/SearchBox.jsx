import { useId } from 'react';
import sc from './Searchbox.module.css';

const SearchBox = ({ inputValue, onChange }) => {
  const searchId = useId();
  return (
    <div className={sc.field}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={sc.input}
        type="text"
        value={inputValue}
        onChange={onChange}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
