import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart(props) {
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => 
                <ChartBar value={dataPoint.value} maxValue={null} label={dataPoint.label} key={dataPoint.label}/>)}
        </div>
    )
}
