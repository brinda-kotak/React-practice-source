import React,{useState} from 'react';
import classes from './NewExpense.module.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = (props) => {

    const [isEditing,setIsEditing] = useState(false);

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };;
    
    return (
        <div className={classes.new_expense}>
            {!isEditing &&  <button onClick={startEditingHandler}>Add New Expense</button>}
           {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
};

export default NewExpense;