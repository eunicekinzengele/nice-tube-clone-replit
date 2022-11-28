import React, { useState } from "react";
import "../Styles/search.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  const [inputSearch, setInputSearch] = useState();
  const handleChange = (e) => {
    setInputSearch(e.target.value);

    const filtered = !inputSearch === 0
    ? null
    :data.filter((item) =>
        item.titre.toLowerCase().includes(inputSearch.toLowerCase())
    );

    // const filtered = search.length > 0
    //     ? data.filter((item) =>
    //         item.titre.toLowerCase().includes(search.toLowerCase())
    //      ) : []
  };
  return (
    <div className="row input_buton">
    <form>
      <input
        className="input__search"
        type="text"
        placeholder="Rechercher la vidéo"
        onChange={handleChange}
        value={inputSearch}
      />
      <Link className="" to={`/PageOfSearchResults${inputSearch}`}>
        <button className="button_search" type="submit">
          <BsSearch />
        </button>
      </Link>
    </form>
    </div>
  );
}
