import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const resultData = [
    {
        "id": 1,
        "name": "Rahim",
        "physics": 82,
        "chemistry": 78,
        "math": 88
    },
    {
        "id": 2,
        "name": "Karim",
        "physics": 75,
        "chemistry": 80,
        "math": 72
    },
    {
        "id": 3,
        "name": "Sabbir",
        "physics": 91,
        "chemistry": 85,
        "math": 94
    },
    {
        "id": 4,
        "name": "Nusrat",
        "physics": 88,
        "chemistry": 90,
        "math": 86
    },
    {
        "id": 5,
        "name": "Tanvir",
        "physics": 70,
        "chemistry": 68,
        "math": 74
    },
    {
        "id": 6,
        "name": "Mim",
        "physics": 84,
        "chemistry": 79,
        "math": 81
    },
    {
        "id": 7,
        "name": "Arif",
        "physics": 65,
        "chemistry": 72,
        "math": 69
    },
    {
        "id": 8,
        "name": "Jannat",
        "physics": 95,
        "chemistry": 92,
        "math": 97
    },
    {
        "id": 9,
        "name": "Fahim",
        "physics": 78,
        "chemistry": 75,
        "math": 80
    },
    {
        "id": 10,
        "name": "Tania",
        "physics": 86,
        "chemistry": 83,
        "math": 89
    }
]

const ResultsChart = () => {
    return (
        <div className='bg-green-900 overflow-auto my-20 p-10'>
            <LineChart width={1200} height={600} data={resultData}>
                <XAxis dataKey={'name'} ></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='black'></Line>
                <Line dataKey={'chemistry'} stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;