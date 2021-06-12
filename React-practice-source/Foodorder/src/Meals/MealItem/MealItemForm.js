import { useRef, useState, useContext } from 'react';
import CartContext from '../../Store/cart-context';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const cxt = useContext(CartContext)
    const[amountIsValid,setAmountIsValid] = useState(true);

    const amountItemRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        //console.log(amountItemRef);
        const enteredAmount = amountItemRef.current.value;
        //  console.log(enteredAmount);
        const enterdAmountNumber = +enteredAmount;
        const addedItem = {...props.item, amount:enterdAmountNumber}
        
        if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5){
            setAmountIsValid(false);
            return;
        }

        cxt.addItem(addedItem)
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label='Amount' 
               ref={amountItemRef}
            input={{
                id:'amount' + props.id,
                type:'number',
                min:'1',
                max:'50',
                step: '1',
                defaultValue:'1'
            }}/>
            
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter amount between(1-5)</p>}
        </form>
    );
};

export default MealItemForm;