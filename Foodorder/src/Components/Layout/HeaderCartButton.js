import {useContext,useEffect,useState} from 'react';
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../Store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButoon = (props) => {
    const [btnIsHightlighted,setBtnIsHighlighted] = useState(false);
    const crtCtx = useContext(CartContext);
    const {items} = crtCtx;
    const numberOfCartItem = items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0);

    const btnClasses = `${classes.button} ${btnIsHightlighted?classes.bump:''}`;
    useEffect(()=>{
        if(crtCtx.items.length ===0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer=setTimeout(()=>{
            setBtnIsHighlighted(false);
        },300);

        return () => {
            clearTimeout(timer);
        };
    },[items]); 
    return(


    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge }>
            {numberOfCartItem}
        </span>
    </button>
    )
};

export default HeaderCartButoon;