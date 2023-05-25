import React, { useState } from 'react';
import { datesPeople } from './swapiHelper';
import './DataStarwars.css';

const DataStarwars = () => {
    const [data, setData] = useState([]);

    const fetchSwapi = async () => {
        try {
            const jsonData = await datesPeople();
            setData(jsonData);
        } catch (error) {
            console.error(error);
        }
    };

    if (data.length === 0) {
        fetchSwapi();
        return null;
    }

    const randomPerson = () => {
        if (data.length > 0) {
            const random = Math.floor(Math.random() * data.length);
            return data[random]
        }
        return null
    }

    const randomResult = randomPerson();

    return (
        <div>
            <div className="body">
                {randomResult && (
                    <div className="data-container">
                        <h1>{randomResult.name}</h1>
                        <p className="label">HEIGTH:</p>
                        <p className="value">{randomResult.height}</p>
                        <p className="label">MASS:</p>
                        <p className="value">{randomResult.mass}</p>
                        <p className="label">EYE COLOR:</p>
                        <p className="value">{randomResult.eye_color}</p>
                        <p className="label">HAIR COLOR:</p>
                        <p className="value">{randomResult.hair_color}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DataStarwars;
