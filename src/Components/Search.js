import "./search.css";
import React, { useEffect, useState } from "react";
import Country from "./Country";

function Search() {
  const [country, setCountry] = useState('');
  const [list,setList] =useState([])

  const handleTextChange = (e) => {
    setCountry(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Button Clicked");
    if (country === "") {
      alert("Fields cannot be Empty");
    } else {
      fetchData();
    }
  };
  const fetchData = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    const list = await response.json();
    setList(list);
    console.log(list)
 
  };
  return (
    <div className="search">
      <form className="search-form">
        <input
          type="text"
          placeholder="Country e.g India"
          name="country"
          value={country}
          onChange={handleTextChange}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </form>
      <div>
        {list.map((country) => {
            {/* console.log(country) */}
          return <Country key={country.id} {...country} country={country} />
        })}
      </div>
    </div>
  );
}

export default Search;
