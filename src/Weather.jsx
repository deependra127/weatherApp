import React from 'react';
import './wstyle.css';
import { useState } from 'react';
import DataFetcher from './DataFetcher';

const Weather = () => {
  const [cityInput, setcityInput] = useState('');
  const [city, setCity] = useState('fugging');
  const [weatherData, setweatherData] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if(!cityInput) return;
    setCity(cityInput);
  }

  const handleData = (data) =>{
    if(data == null){
      alert("City should be on Earth :)");
    }
    else{
    console.log(data)
    setweatherData(data)
    }
  }

  // if(data!=null)
  // {
    const code = weatherData?.weather[0].id;
    var url;
    if(code < 300) url = 'src/assets/thunderstorn.png';
    else if(code < 500) url = 'src/assets/shower-rain.png';
    else if(code < 511) url = 'src/assets/rain.png';
    else if(code == 511) url = 'src/assets/snow.png';
    else if(code < 600) url = 'src/assets/shower-rain.png';
    else if(code < 700) url = 'src/assets/snow.png';
    else if(code < 800) url = 'src/assets/mist.png';
    else if(code == 800) url = 'src/assets/sun.png';
    else if(code == 801) url = 'src/assets/few-clouds.png';
    else if(code == 802) url = 'src/assets/scattercloud.png';
    else if(code == 803) url = 'src/assets/broken-cloud.png';
    else url ='src/assets/broken-cloud.png';
  // }

  const sunriseUnix = weatherData?.sys.sunrise;
  const sunsetUnix = weatherData?.sys.sunset;

  const sunrise = new Date(sunriseUnix * 1000).toLocaleTimeString();
  const sunset = new Date(sunsetUnix * 1000).toLocaleTimeString();

  return (
    <div id='box'>
      <div id='search' className='comp'>
        <form onSubmit={submitHandler}>
          <input 
            type="text" 
            placeholder='Enter City Name'
            value={cityInput}
            onChange={(e)=>setcityInput(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>
        <DataFetcher city={city} onData={handleData}></DataFetcher>
      </div>
      <div id='info' className='comp'>
        <div id='info1' className='infoc'>{weatherData?.name}</div>
        <div id='info2' className='infoc'>Lon: {weatherData?.coord.lon}</div>
        <div id='info3' className='infoc'>Lat: {weatherData?.coord.lat}</div>
        <div id='info4' className='infoc'>{weatherData?.weather[0].description}</div>
      </div>
      <div id='wlogo' className='comp'><img src={url} id='slogo'/></div>
      <div id='temp' className='comp'>
        <div id="temp1" className='tempc'>Temp:</div>
        <div id="temp3" className='tempc'>Feels like:</div>
        <div id="temp5" className='tempc'>Max Temp:</div>
        <div id="temp7" className='tempc'>Min Temp:</div>
        <div id='temp2' className='tempc'>{weatherData?.main.temp} C</div>
        <div id='temp4' className='tempc'>{weatherData?.main.feels_like} C</div>
        <div id='temp6' className='tempc'>{weatherData?.main.temp_max} C</div>
        <div id='temp8' className='tempc'>{weatherData?.main.temp_min} C</div>
      </div>
      <div id='pressure' className='comp'>
        <div id='pressure2' className='pc'>Pressure:   {weatherData?.main.pressure} hPa</div>
        <div id='pressure4' className='pc'>Humidity:   {weatherData?.main.humidity} %</div>
        <div id='pressure6' className='pc'>Visibility: {weatherData?.visibility} km</div>
      </div>
      <div id='rain' className='comp'>
        <div id='rain2' className='rainc'>Clouds: {weatherData?.clouds.all} %</div>
        <div id='rain4' className='rainc'>Wind Speed: {weatherData?.wind.speed} m/s</div>
        <div id='rain6' className='rainc'>Rain: {weatherData?.rain?.['1h']??0} mm/h</div>
      </div>
      <div id='sun' className='comp'>
        <div id='sun2' className='sunc'>Sunrise: {sunrise}</div>
        <div id='sun4' className='sunc'>Sunset: {sunset}</div>
      </div>
    </div>
  )
}

export default Weather