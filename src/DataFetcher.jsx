import axios from 'axios'
import React, { useEffect } from 'react'

const DataFetcher = ({city, onData}) => {

  useEffect(()=> {
  if(!city) return;

  const fetchData = async() => {
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4335d4bbbc2e7e31dc88d10fcc7430b1&units=metric`
      const response = await axios.get(url);
      onData(response.data);
      
    }
    catch(err){
      console.error('Error Fetching Data', err);
      onData(null);
    }
  }

  fetchData();
  },[city]);
  return null;

}

export default DataFetcher