import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { API_DOMAIN } from './common/url';

const App = () => {

  const getAw = async () =>{
    const data = await axios.get(API_DOMAIN)
    console.log('%c 🌯 data: ', 'font-size:20px;background-color: #B03734;color:#fff;', data);
  }

  useEffect(()=>{
    getAw();
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
