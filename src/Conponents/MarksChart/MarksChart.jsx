import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataResponse = use(marksPromise);
    const marksData = marksDataResponse.data;

    console.log(marksData);


    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math

        }
        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;
        return student;
    })
    

    console.log(marksChartData);
    

    return (
        <div className='overflow-auto my-10 p-5'>
            <BarChart width={1000} height={600} data={marksChartData}>
                <XAxis dataKey={'name'} stroke='gray'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={'avg'} stroke='aqua'></Bar>
                <Bar dataKey={'physics'} stroke='red' fill='red'></Bar>
                <Bar dataKey={'chemistry'} stroke='yellow' fill='yellow'></Bar>
                <Bar dataKey={'math'} stroke='green' fill='lightgreen'></Bar>

            </BarChart>
        </div>
    );
};

export default MarksChart;