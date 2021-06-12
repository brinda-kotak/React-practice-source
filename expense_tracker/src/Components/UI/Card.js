import React from 'react';
import classes from './Card.module.css';

function Card(props){
       const abc= 'classes.card ' +  props.className;
    return(
        // <div className={classes.card,props.className}>{props.children}</div>// this is also working
         <div className={abc}>{props.children}</div>
    );

}
export default Card;