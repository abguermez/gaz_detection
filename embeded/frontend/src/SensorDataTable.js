// SensorDataTable.js
import React from 'react';

const SensorDataTable = ({ sensorData }) => {
    return (
        <div>
            <h2>Sensor Data</h2>
            <table>
                <thead>
                <tr>
                    <th>Temperature (°C)</th>
                    <th>Humidity (%)</th>
                    <th>Load Cell Reading</th>
                </tr>
                </thead>
                <tbody>
                {sensorData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.temperature}</td>
                        <td>{data.humidity}</td>
                        <td>{data.loadCellReading}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SensorDataTable;
