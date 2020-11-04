import React from 'react'
// import tempColdImage from '../assets/temp-cold.jpg'
// import tempHotImage from '../assets/temp-hot.jpg'

class MainData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weather_data:props.data
        }
    }

    toCapitalCase = (input)=>{
        return input.slice(0,1).toUpperCase() + input.slice(1,) 
    }

    render(){
        const temperatures = {
            temp_min:this.props.data.main.temp_min-273.15,
            temp_max:this.props.data.main.temp_max-273.15,
            feels_like:this.props.data.main.feels_like-273.15
        }
        const weatherDesc = this.props.data.weather[0].description;
        return(
            <div className={temperatures.temp_min<=15 ? 'app_content bg-cold':'app_content bg-hot'}>
                <h2>{this.props.city}</h2>
                <h3 className="current_temp">{temperatures.temp_min.toFixed()}<sup>o</sup>C</h3>
                <div>
                   <p> Feels like: {temperatures.feels_like.toFixed()}<sup>o</sup>C</p>
                   <p>{this.toCapitalCase(weatherDesc)} </p>
                </div>
            </div>
        )
    }
}


// function MainData(props){
//     const [weather_data,setWeatherData] = useState(props.data);
    
    
//         // console.log("data in main",WEATHER_DATA)
        
//     const bgImages = [tempColdImage,tempHotImage]
//         return(
//             <div>
//                 <h1>{temperatures.temp_min}<sup>o</sup>C</h1>
//                 <div>
//                     Feels like: {temperatures.feels_like.toFixed()}<sup>o</sup>C
//                     <img src={tempColdImage} alt="temp-cold"></img>
//                 </div>
//             </div>
//         )
    
    
    
// }

export default MainData