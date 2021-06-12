import React,{Fragment,useState} from 'react';
import Header from '../src/Components/Layout/Header';
import Meals from '../src/Meals/Meals';
import './App.css';
import Cart from './Cart/Cart';

import CartProvider from './Store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const shownCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={shownCartHandler}/>
      
      <main>
      
        <Meals/>
      </main>
      
    </CartProvider>
  );
}

export default App;
