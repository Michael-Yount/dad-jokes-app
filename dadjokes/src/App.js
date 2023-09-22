import React, { useState,useEffect } from 'react';
import axios from './axios';
import './App.css';


function App() {
  //data storage
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    
  const loadData = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random", {headers: {Accept:"application/json"}})
    console.log(response.data.joke);
    setJoke(response.data.joke);
  }
  loadData();
}, []);

const handleClick = (event) => {
  console.log('clicked');


};

  return (
    <div className="container">
        <h2 className='title'>The Absolute Best/Worst Dad jokes.</h2>
        <div className="joke">{joke}</div>
        <button className="btn btn-primary" onClick={handleClick}>Get Another Joke</button>
      </div>
  )
}



export default App;
