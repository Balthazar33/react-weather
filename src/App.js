import './App.css';
import '../src/assets/resetcss.css'
import Header from './components/Header.js'
import React from 'react'
import MainData from './components/MainData.js'
import data from './assets/db.json'
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentCity:'Mumbai',
      weatherData:data['Mumbai'],
    }
  }
  
 

  // componentDidMount(){
  // const fetchUrl = 'db.json';
  // // const fetchUrlActual = "http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=1a424f910f39113093829778b57db658";
  // fetch(fetchUrl)
  //   .then(response=> {
  //     if(!response.ok){
  //       alert("error");
  //     }
  //     response = response.json();
  //   })
  //   .then(data=>{
  //     this.setState({
  //       currentCity:'Mumbai',
  //       weatherData:data
  //     });
  //     console.log("state",data)
  //   });
  // }

   fetchCityWeather=(city)=>{
    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a424f910f39113093829778b57db658`)
    // .then(response=>response.json())
    // .then(data=>{
    //   this.setState({
    //     currentCity:city,
    //     weatherData:data.main
    //   })
    //   // this.forceUpdate();
    // })

    this.setState({
      currentCity:city,
      weatherData:data[city]
    })
  }
  

  render(){
    return (
      <div className="App">
        <Header/>
        <div className="city_switcher">
          <button className={this.state.currentCity==='Mumbai'?'active' :''} onClick={()=>this.fetchCityWeather('Mumbai')}>Mumbai</button>
          <button className={this.state.currentCity==='London'?'active' :''} onClick={()=>this.fetchCityWeather('London')}>London</button>
          <button className={this.state.currentCity==='Delhi'?'active' :''} onClick={()=>this.fetchCityWeather('Delhi')}>Delhi</button>
        </div>

     
        <MainData data={this.state.weatherData} city={this.state.currentCity} /> 
             
               
      </div>
    );
  }
  
}

export default App;
