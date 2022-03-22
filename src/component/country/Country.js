import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.countries);
    const {area, capital, population, name, flags} = props.countries;
    return (
        <div className='country'>
             <h1>Country Name : {name.common}</h1>
             <img src={flags.png} alt="" />
             <h2>population : {population}</h2>
             <h3>Area : {area}</h3>
             <h3>Capital : {capital}</h3>
        </div>
    );
};

export default Country;