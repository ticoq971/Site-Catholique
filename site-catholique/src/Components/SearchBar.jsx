// SearchBar.jsx
import React, { useState } from 'react';
import data from '../data/articles.json';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" relative w-90 max-w-md  ">
      <input
        type="text"
        placeholder="Rechercher un article..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 text-secondary rounded border border-secondary mb-3"
      />

      {searchTerm.length > 0 && (
        filteredData.length > 0 ? (
          <ul className="absolute z-50 w-full  mt-1 rounded shadow max-h-64 overflow-auto">
            {filteredData.map((item, index) => (
           <Link to ={`/articles/${item.id}`} >  <li key={index} className="bg-secondary text-primary p-2  rounded shadow">
                <strong>{item.title}</strong>
                <p className="text-sm text-gray-900">{item.description?.slice(0, 60)}...</p>
              </li></Link> 
            ))}
          </ul>
        ) : (
          <p className="text-sm text-white italic">Aucun article ne commence par « {searchTerm} »</p>
        )
      )}
    </div>
  );
};

export default SearchBar;
