import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { host as HOST } from '../config/config';
import FightingGif from '../medias/fighting.gif';
import Trophy from '../medias/trophy.png';

import {
    BrowserRouter as Router,
    useParams,
} from "react-router-dom";


const Fighting = () => {
    //TODO: Chapter 4: Fighting
    //TODO: Add a delay the fight is happening too fast, tip: function setTimeout
    //TODO: Have fun change someting else, add a loader, change the design, etc...
    //TODO (EXTRA): Add a button to go back fights list

    const { defenser_id } = useParams();
    console.log(defenser_id);

    const [fighting, setFighting] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const fight = async () => {
        try {
            const response = await axios.post(HOST + '/fights/', {
                defenser_id: defenser_id
            }, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setResult(response.data);
            setFighting(false);
        } catch (error) {
            setError(error.response.data.message);
            setFighting(false);
            console.log(error);
        }
    }

    useEffect(() => {
        fight();
    }, []);

    return (
        <div>
            {fighting && !error && <h1>Fighting</h1>}
            {fighting && !error && <img src={FightingGif} alt="Fighting" />}
            {!fighting && !error && <h1>{result.winner},<br /> won the fight</h1>}
            {!fighting && !error && <img src={Trophy} alt="Trophy" />}
            {!fighting && !error && <h2>Score: {result.score}</h2>}
            {!fighting && error && <h1>{error}</h1>}
        </div>
    )
}

export default Fighting;