import { useId } from 'react';

const SearchBox = ({ inputValue, onChange }) => {
  const searchId = useId();
  return (
    <div>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input type="text" value={inputValue} onChange={onChange} id={searchId} />
    </div>
  );
};

export default SearchBox;
