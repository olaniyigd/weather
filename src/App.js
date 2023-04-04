import './App.css';
import React from 'react';
import {useState} from "react"
const api = {
  key: '958b7b3692bdac3680931b541ca98a33',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {
  const [search, setSearch] = useState ("");
  const [weather, setWeather] = useState ({});
  const searchPressed = () => {
    fetch (`${api.base}weather?q=${search}&unts=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result =>{
    setWeather (result)
    });
  }

  return (
    <div className="App">
      {/* HEADER */}
      <h1>Weather App</h1>
      {/* SEARCH BOX */}

      <div>
      <input 
      type='text'
      placeholder='enter your city'
      onChange={(e)=> setSearch (e.target.value)}
      />
      <button onClick={searchPressed}>Search</button>
      </div>
      {typeof weather.main != "undefined" ?
      
      <div>
      {/* LOCATION */}
      <p>{weather.name}</p>
      {/* TEMPERATURE F/C */}
      
      <p>{weather.main.temp} C</p>
      {/* CONDITION SUNNY */}
      <p>{weather.weather[0].main}</p>
      <p>({weather.weather[0].description})</p>
      </div>

      :
      ""
      }
    </div>
  );
}

export default App;
