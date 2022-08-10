import React from 'react';
// Import FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Search = ({ handleChange }) => {
  const element = <FontAwesomeIcon icon={faSearch} />

  return (

    <div className="col-8 col-sm-8 col-lg-6">
      <div className="input-group rounded">
        <div className="search-box-container">
          <i className="search-box-icon">{element}</i>
          <input type="search" className="form-control search-box-input" placeholder="Buscar..." aria-label="Search" aria-describedby="search-addon" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};