import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {
    const [country, setCountry] = useState([]);

    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
            <h2>Hello Reacts JSX Deploy Netlify</h2>
            <h3>All Country : {country.length}</h3>
            <div className='container'>
            
            {
               country.map(countries => <Country 
                countries={countries}
                key={countries.cca3}               
                   ></Country>) 
            }
        </div>
        </div>
    );
};

// const DisplayCountry = (props)=>{
//     return(
//         <div>
//             <h1>Country Name : {props.name}</h1>
//         </div>
//     )
// }
export default Countries;