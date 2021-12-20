import React from 'react';
import './ChartBar.css';

export default function ChartBar(props) {
    let barFillHeight = "0%";
    if (props.maxValue > 0) {
        let barFillNumber = Math.round((props.value / props.maxValue) * 100);
        barFillHeight = barFillNumber + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner' style={{
                    borderColor: (parseFloat(props.value.substring(1)) > 15000) ? '#E41F7B80' : '#0EF6BE',
                }}>
                <div className='chart-bar__fill' style={{
                    height: barFillHeight, 
                    backgroundColor: (parseFloat(props.value.substring(1)) > 15000) ? '#E41F7B' : '#0EF6BE',
                }}></div>
            </div>
            <div className='chart-bar__label'>{ props.label }</div>
        </div>
    )
}
