import React from 'react';

function SearchBar({ setSearchQuery }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="my-5 text-center">
      <input
        type="text"
        placeholder="Search by tag"
        onChange={handleSearch}
        className='border border-gray-300 rounded-md px-10'
      />
    </div>
  );
}

export default SearchBar;
