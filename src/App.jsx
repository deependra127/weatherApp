import React from 'react';
import Weather from './Weather';
import './appstyle.css';
import metro from './assets/meteorology.png';

const App = () => {
  return (
    <div id='container'>
      <header id='header'>
        <div ><img src= {metro} alt="logo" id='logo'/></div>
        <div id='name'><span id='header-special'>WEATHER</span> HUB</div>
      </header>
      <main id='main'>
        <div id='weather'>
          <Weather/>
        </div>
      </main>
    </div>
  )
}

export default App