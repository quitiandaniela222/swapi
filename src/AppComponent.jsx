import React, { useState, useEffect } from 'react';
import { fetchPersonData } from './swapiHelper';

const AppComponent = () => {
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const jsonData = await fetchPersonData();
            setData(jsonData);
            setLoaded(true);
        };
        fetchData();}, []);
    return (
        <div>
            {loaded ? (
                <>
                    <h1>{data.name}</h1>
                    <p>Height: {data.height}</p>
                    <p>Mass: {data.mass}</p>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default AppComponent;
