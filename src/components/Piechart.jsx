import React from 'react'
import Chart from 'react-google-charts'


const data = [
    ["Task", "Hours per Day"],
    ["Utkarsh Small Finance Bank", 40000],
    ["Shriram Finance", 20000],
    ["Mahindra Finance", 15000],
    ["Bajaj Finserv", 25000],
];

function getText(row) {
    console.log('row', row);
    return `${row[0]}: ${row[1]}%`; // Combine label and percentage
}
const options = {
    // pieSliceText: getText,
};


const Piechart = () => {
    return (
        <Chart options={options} chartType='PieChart' data={data} width={"100%"} height={"200px"} />
    )
}

export default Piechart