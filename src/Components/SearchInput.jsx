import React, { useState } from "react";
import "../Styles/search.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  const [inputSearch, setInputSearch] = useState();
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };
  return (
    <form>
      <input
        className="input__search"
        type="text"
        placeholder="Rechercher la vidéo"
        onChange={handleChange}
        value={inputSearch}
      />
      <Link className="" to={`/ParentsCardSearchResult${inputSearch}`}>
        <button className="button_search" type="submit">
          <BsSearch />
        </button>
      </Link>
    </form>
  );
}
