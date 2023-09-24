import React, { useState,useEffect } from 'react';
import axios from './axios';
import './App.css';


function App() {
  //data storage
  const [joke, setJoke] = useState([]);
  const [dadJoke, setDadJoke] = useState([]);
  
    
  const fetchChuckJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random", {headers: {Accept:"application/json"}})
    console.log(response.data.value);
    setJoke(response.data.value);
  };
  const fetchDadJoke = async () => {
    const response = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept:"application/json"}})
    console.log(response.data.joke);
    setDadJoke(response.data.joke);
  };
  useEffect(() => {
    fetchChuckJoke();
    fetchDadJoke();
  }, []);

        return (
          <>
        <div>
            <hi className="topTitle">Chuck Norris and Dad Jokes</hi>
          <div className="container">
              <h2 className='title'>Chuck Norris jokes.</h2>
              <div className="joke">{joke}</div>
              <button className="btn btn-primary" onClick={fetchChuckJoke}>Get Another Chuck Joke</button>
              </div>

          <div className="container">
              <h2 className='title'>The Absolute Best Dad jokes.</h2>
            <div className="joke">{dadJoke}</div>
                  <button className="btn btn-primary" onClick={fetchDadJoke}>Get Another Dad Joke</button>
            </div>
          </div>
          <footer className="footer">
            <h1>this site was made by myount</h1>
            <image src='../public/MYlogo.png' alt="..."></image>
          </footer>
    </>
  )
}



export default App;
