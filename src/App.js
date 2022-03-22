
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './component/countries/Countries';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';


function App() {
  return (
    <div className="App">
      <Home></Home>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

// function LoadCountries(){
//   const [country, setCountries] = useState([]);

//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   },[]);

//   return(
//     <div>
//       <h2>Load total Countries</h2>
//       <p>Country : {country.length}</p>
//       {
//         country.map(countries => <Country name={countries.name.common} population={countries.population} flags={countries.flags.png}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div style={{backgroundColor: 'aqua', border: '2px solid red', margin:'10px', borderRadius:'5px'}}>
//       <h3>Name : {props.name}</h3>
//       <h4>Population : {props.population}</h4>
//       <p>{props.flags}</p>
//     </div>
//   )
// }

export default App;
