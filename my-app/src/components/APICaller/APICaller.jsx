import "./style.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const APICaller = () => {
    const [arrDigimon, setDigimon] = useState([
        { name: "cargando digimons..." },
    ]);
    const [digimonsToShow, setDigimonToShow] = useState([]);

    const apiURL = 'https://digimon-api.vercel.app/api/digimon/';

    const handleInput = (event) => {
        const inputValue=event.target.value;
        const newArrToShow=arrDigimon.filter((digimon)=>
            digimon.name.toLowerCase().includes(inputValue.toLowerCase()));
        
        if(inputValue == "")setDigimonToShow(arrDigimon);
        else setDigimonToShow(newArrToShow);
    };

    useEffect(() => {
        const call = async () => {
            const digimonData = await axios.get(apiURL)
            console.log(digimonData);
            setDigimon(digimonData.data);
        };
        call();
    },[]);


    return (
        <>
            <div className="input-box">
                <input
                    type="text"
                    placeholder="digimon name"
                    onChange={handleInput}
                />
            </div>
            <div className="digimon-grid">
                {digimonsToShow.map(digimon => (
                    <div key={digimon.name}>
                        <h1>{digimon.name} </h1>
                        <img className="digimon-image"
                            src={digimon.img} alt="" />
                        <br></br>
                    </div>
                ))}
            </div>
        </>);
}
export default APICaller;