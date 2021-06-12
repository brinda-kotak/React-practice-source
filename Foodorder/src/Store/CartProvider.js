import {useReducer} from 'react';
import { act } from 'react-dom/test-utils';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount:0
};
const cartReducer = (state,action) => {

    if(action.type === 'ADD'){
        
        const existingItems = [...state.items];
        const existingItemIndex = existingItems.findIndex(item => item.id === action.item.id)
        const existingItem = existingItems[existingItemIndex]
        let updatedItems
        if (existingItem){
            updatedItems = [...existingItems]
            const updatedItem = {...existingItem,amount:existingItem.amount + action.item.amount}
            updatedItems[existingItemIndex] = updatedItem
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
        
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        console.log(updatedItems);

        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
            
        };
    }

    if(action.type === 'REMOVE'){
        const existingItems = [...state.items];
        const existingItemIndex = existingItems.findIndex(item => item.id === action.id)
        const existingItem = existingItems[existingItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems
       
        if(existingItem.amount === 1){

            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else{
            const updatedItem = {...existingItem, amount:existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
        // console.log(updatedItems);

        return{

            items:updatedItems,
            totalAmount:updatedTotalAmount
           
        };
    }
    
    return defaultCartState;
};


const CartProvider = (props) =>{
    const [cartState,dispatchCartState] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = (item) =>{
        dispatchCartState({type:'ADD',item:item});


    };

    const remveItemFromCartHandler = (id) => {
        dispatchCartState({type:'REMOVE', id:id});
    };
    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:remveItemFromCartHandler
    };
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );

};

export default CartProvider;