// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SensorDataTable from './SensorDataTable';

const App = () => {
    const [sensorData, setSensorData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/sensor_data');
                setSensorData(response.data);
            } catch (error) {
                console.error('Error fetching sensor data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Sensor Monitoring System</h1>
            <SensorDataTable sensorData={sensorData} />
        </div>
    );
};

export default App;

