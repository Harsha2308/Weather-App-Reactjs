import axios from "axios";


const API_KEY ="3086858a782db419eab54d18b04470d2";
const URL ="https://api.openweathermap.org/data/2.5/weather";


export const fetchWeather = async(query)=>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:"metric",
            APPID:API_KEY
        }
    })
    return data;

}