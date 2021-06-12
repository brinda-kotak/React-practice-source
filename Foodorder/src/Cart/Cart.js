import { useContext } from 'react';
import CartContext from '../Store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    // const add = [1,2,3];
    // const doubleArray = add.map((n)=>n*2)
    // console.log(doubleArray)

    console.log(cartCtx.items);
    console.log(cartCtx.totalAmount);
    const cartItemRemoveHandler = (id) => { 
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount:1});
     };

    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map((item) => (
            // <li key={item.id}><span>{item.name} {item.price} x{item.amount} ={item.price*item.amount}</span></li>))}</ul>;
            <CartItem key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}
                onAdd={cartItemAddHandler.bind(null,item)}
            />
        ))}</ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>

                {hasItems && <button className={classes.button}>Order</button>}
            </div>

        </Modal>
    );

};

export default Cart;