import React, { useState } from "react"
import "./getweather.css"
import Display from "./showweather";

function Weather(){
    const APIKEY = {your api key};
    const [weather, setWeather] = useState([]);
    const [form,setForm] = useState({
        city: "",
    });
    async function weatherData(e) {
        e.preventDefault();
        if (form.city == "") {
            alert("Please Select a place to get weather");
          } else {
            const data = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
            )
              .then((res) => res.json())
              .then((data) => data);
      
            setWeather({ data: data });
          }
      }
    
    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city"){
            setForm({...form, city:value})
        }
    };

    return ( 
        <div className="row">
        <div className="weather column">
            <form>
                <ul className="list">
                    <li>
                        <input type="radio" 
                        id="mumbai" 
                        name="city" 
                        placeholder="city"
                        className="input-hidden" 
                        value ="Mumbai"
                        onClick={(e) => handleChange(e)} />
                        <label htmlFor="mumbai" >Mumbai, IN</label>
                    </li>
                    <li>
                        <input type="radio" 
                        id="kolkata" name="city" 
                        placeholder="city" 
                        value="kolkata" 
                        className="input-hidden" 
                        onClick={(e) => handleChange(e)} />
                        <label htmlFor="kolkata" >Kolkata, IN</label>
                    </li>
                    <li>
                        <input type="radio" 
                        id="newdel" 
                        name="city" 
                        placeholder="city"
                        value="new delhi" 
                        className="input-hidden" 
                        onClick={(e) => handleChange(e)} />
                        <label htmlFor="newdel" >New Delhi, IN</label>
                    </li>
                    <li>
                        <input type="radio" 
                        id="ajmer" 
                        name="city" 
                        placeholder="city" 
                        value="ajmer" 
                        className="input-hidden" 
                        onClick={(e) => handleChange(e)} />
                        <label htmlFor="ajmer" >Ajmer, IN</label>
                    </li>
                    <li>
                        <input type="radio" 
                        id="col" 
                        name="city" 
                        placeholder="city" 
                        value="city of london" 
                        className="input-hidden" 
                        onClick={(e) => handleChange(e)} />
                        <label htmlFor="col" >City of London, GB</label>
                    </li>
                    <li>
                        <input type="radio" 
                        id="hackney" 
                        name="city" 
                        placeholder="city" 
                        value="hackney" 
                        className="input-hidden" 
                        onClick={(e) => handleChange(e)} />
                        <label htmlFor="hackney" >Hackney, GB</label>
                    </li>
                    <li>
                        <input type="radio" 
                        id="sydney" 
                        name="city" 
                        placeholder="city" 
                        value="sydney" 
                        className="input-hidden" 
                        onClick={(e) => handleChange(e)} />
                        <label htmlFor="sydney" >Sydney, AU</label>
                    </li>
                    <li>
                        <input type="radio" 
                        id="geneva" 
                        name="city" 
                        placeholder="city" 
                        value="geneva" 
                        className="input-hidden" 
                        onClick={(e) => handleChange(e)} />
                        <label htmlFor="geneva" >Geneva, US</label>
                    </li>
                    <li>
                        <input type="radio" 
                        id="bern" name="city" 
                        placeholder="city" 
                        value="bern" 
                        className="input-hidden" 
                        onClick={(e) => handleChange(e)} />
                        <label htmlFor="bern" >Bern, CH</label>
                    </li>
                    <li>
                        <input type="radio" 
                        id="basel" 
                        name="city" 
                        placeholder="city" 
                        value="basel" 
                        className="input-hidden" 
                        onClick={(e) => handleChange(e)}/>
                        <label htmlFor="basel" >Basel, CH</label>
                    </li>
                </ul>
                <button type="submit" className="getweather" onClick={(e) => weatherData(e)}>Get Weather</button>
            </form>
        </div>
        {weather.data != undefined ? (
            <div className="column">
            <Display data={weather.data} />
            </div>
        ) : null}
        </div>
    );
}

export default Weather;
