import React from 'react';
import Weather from './Weather';
import './appstyle.css';

const App = () => {
  return (
    <div id='container'>
      <header id='header'>
        <div ><img src="src/assets/meteorology.png" alt="logo" id='logo'/></div>
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