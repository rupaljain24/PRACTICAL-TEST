import React from 'react'
import './country.css'

function Country({country}) {
   const handleAlert =()=>{
       alert("Weather Deatils")

   }
    return (
        <div className='container'>
           <article className="single-Country">
      <img src={country.flags.png} alt={country.name.common} />
      <h4>Name:{country.name.common}</h4>
      <h4>Capital:{country.capital}</h4>
      <h4>Population:{country.population}</h4>
        <button className="check-btn" onClick={handleAlert}>
         Check Weather
        </button>

    </article>
        </div>
    )
}

export default Country
