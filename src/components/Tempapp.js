import react, { useEffect, useState } from "react";
import App from "../App";
import './css/style.css';

const Tempapp = () => {

    const [city, setCity] = useState("null");
    const [search, setSearch] = useState("Kathmandu");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3f2bde93951a21b045f2405a3525700a`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main)

        }
        fetchApi();
    }, [search])
    return (
        <div className="container pt-4 pb-4 bg-info text-white">
            <div className="row">
                <div className="col-sm-12 pb-4">
                    <input type="search" className="form-control" placeholder="Enter City Name" onChange={
                        (event) => {

                            setSearch(event.target.value)

                        }



                    } />
                </div>
                {!city ? (
                    <div className="container">
                    <p>No Data Found</p>
                    </div>
                ) : (

                    <>
                        <div className="col-sm-4">
                            <h4>Location </h4>
                            <p><h1><i className="fas fa-location"></i> {search}</h1></p>
                           

                        </div>
                        <div className="col-sm-4">
                            <h4>Temperature </h4>
                            <p><i className="fa fa-thermometer-empty" aria-hidden="true"></i> Max-Temp: {city.temp}°C  </p>
                            <p><i className="fa fa-thermometer-empty" aria-hidden="true"></i> Min-Temp: {city.temp_min}°C  </p>
                        </div>

                        <div className="col-sm-4">
                           
                            <p> Pressure: {city.pressure}  </p>
                            
                            <p> Humidity: {city.humidity}  </p>
                         
                        </div>


                    </>


                )

                }

            </div>



        </div>


    )
}

export default Tempapp;