import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from '../Expenses/ExpenseDate';
import classes from './ExpenseItem.module.css';

const ExpenseItem = (props) => {
    
    return (
        <Card className={classes.expense_item }>
            <ExpenseDate date={props.date}/>
            <div className={classes.expense_item__description}> 
                <h2>{props.title}</h2>
                <div className={classes.expense_item__price}>${props.amount}</div>
            </div>
           
        </Card>
    );
}

export default ExpenseItem;