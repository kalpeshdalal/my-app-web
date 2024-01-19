
import React, { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchComp = ({ placeholder = "", onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
    if (onSearch) onSearch('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-2 rounded-xl">
      <div><FiSearch className="m-2 text-gray-400" /></div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className="p-1  w-full border-none outline-none mr-2"
      />
      {searchTerm ? <FiX className="m-2 text-gray-400 cursor-pointer" onClick={handleClear} />:<div className='mx-4'></div>}
    </form>
  );
};

export default SearchComp;
