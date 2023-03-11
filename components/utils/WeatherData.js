import React ,{useState, useEffect, Component} from 'react';
import axios from 'axios';
import { useInterval } from 'react-use';
const apiKey="f146b3f8a635946326858ae6c141975d";

class WeatherData extends React.Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.state = {
            isLoading: true
        }
    }
    
  
    //날씨 데이터 호출
    getWeather = async(lat, long) => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
  
        this.setState({isLoading:false, condition:data.weather[0].main, temp:data.main.temp })
    }

    //지리 정보 호출
    getLocation = async() => {
        try{
            window.navigator.geolocation.watchPosition(
                position => {
                    this.setState(()=>{
                        return {
                            lat: position.coords.latitude,
                            long: position.coords.longitude
                        }
                    });
                
                    this.getWeather(position.coords.latitude, position.coords.longitude);
                }
            );
        }catch(error){
            alert("지역을 찾을 수가 없네요!","다시 시도해 주세요");
    }
}


    componentDidMount() {
        this.getLocation();
    }

   
    render() {
        const stateData = this.state;
   
        return (
            <ul className="flex-center"> 
               <li>{stateData.condition}</li>
               <li>{stateData.temp} ºC</li>
            </ul>
        );
    }
}


export default WeatherData;