import './App.css';
import '../src/assets/resetcss.css'
import Header from './components/Header.js'
import React from 'react'
import MainData from './components/MainData.js'
import Loader from './components/UI/loader'
// import data from './assets/db.json'
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentCity:'Mumbai',
      weatherData:{},
      description:""
    }
  }
  
 

  componentDidMount(){
  // const fetchUrl = 'db.json';
  const fetchUrlActual = "http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=1a424f910f39113093829778b57db658";
  fetch(fetchUrlActual)
    .then(response=> {
      if(!response.ok){
        const err = new Error(response.message || "Something went wrong");
        alert(err);
        return;
      }
   return response.json();
    })
    .then(data=>{
      this.setState({
        currentCity:'Mumbai',
        weatherData:data.main,
        description:data.weather[0].description
      });
    })
    .catch(err=>{
      alert(err);
    })
  }

   fetchCityWeather=(city)=>{
     const self = this;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a424f910f39113093829778b57db658`)
    .then(response=>{
      if(!response.ok){
        const err = new Error(response.message || "Something went wrong");
        alert(err);
      }
      return response.json();
    
    })
    .then(data=>{
      self.setState({
        currentCity:city,
        weatherData:data.main,
        description:data.weather[0].description
      })
    })

  }
  

  render(){
    const weather_data = this.state.weatherData;
    return (
      <div className="App">
        <Header/>
        <div className="city_switcher">
          <button className={this.state.currentCity==='Mumbai'?'active' :''} onClick={()=>this.fetchCityWeather('Mumbai')}>Mumbai</button>
          <button className={this.state.currentCity==='London'?'active' :''} onClick={()=>this.fetchCityWeather('London')}>London</button>
          <button className={this.state.currentCity==='Delhi'?'active' :''} onClick={()=>this.fetchCityWeather('Delhi')}>Delhi</button>
        </div>

        {weather_data.temp!==undefined &&
            <MainData data={weather_data} desc={this.state.description} city={this.state.currentCity} />
        }

        {weather_data.temp===undefined &&
          <Loader/>
        }
        
      </div>
    );
  }
  
}

export default App;
