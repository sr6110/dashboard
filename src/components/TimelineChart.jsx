import React from 'react';
import { Chart } from 'react-google-charts'

const data = [
    [
        { type: "string", id: "Term" },
        { type: "string", id: "Name" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" },
    ],
    ["1", "Utkarsh FD 1", new Date(2024, 1, 1), new Date(2024, 8, 8)],
    ["2", "Shriram FD Plan 2", new Date(2024, 1, 5), new Date(2025, 4, 24)],
    ["3", "Bajaj Finserv FD 1", new Date(2024, 5, 2), new Date(2025, 4, 9)],
    ["3", "Mahindra FD Plan 2", new Date(2024, 6, 2), new Date(2025, 7, 4)],
];

const options = {
    timeline: {
        showRowLabels: false,
    },
    hAxis: {
        format: 'MMM yy',
        showTextEvery: 1,
        slantedText: true,
        maxAlternation: 1,
        minSpacing: 4,
    },
}


const TimelineChart = () => {
    return (
        <Chart chartType='Timeline' options={options} data={data} width="100%" height="auto" />
    )
}

export default TimelineChart