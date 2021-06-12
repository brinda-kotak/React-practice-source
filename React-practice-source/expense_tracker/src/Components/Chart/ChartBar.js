import classes from './ChartBar.module.css';
import React from 'react';

const ChartBar = (props)=> {
    let barFillHeight = '0%';
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className={classes.chart_bar }>
            <div className={classes.chart_bar__inner}>
                <div className={classes.chart_bar__fill} 
                style={{height: barFillHeight}}></div>
            </div>
            <div className={classes.chart_bar__label }>{props.label}</div>
        </div>
    )
};

export default ChartBar;