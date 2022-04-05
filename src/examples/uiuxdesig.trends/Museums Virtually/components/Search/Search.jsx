import React, { useState } from "react";

// icons
import { BsSearch, BsSliders } from "react-icons/bs";

// styles
import { containerCss, inputCss, searchCss, filterButtonCss } from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={containerCss}>
      <button onClick={null} className={searchCss}>
        <BsSearch />
      </button>
      <input
        className={inputCss}
        value={search}
        placeholder="Search countries, museums..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className={filterButtonCss} onClick={null}>
        <BsSliders />
      </button>
    </div>
  );
};

export default Search;
