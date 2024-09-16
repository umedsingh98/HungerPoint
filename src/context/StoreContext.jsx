import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (prop) => {

const [cartItems, setCartItems] = useState({});

const addToCart = (itemId) => {
  if(!cartItems[itemId]){
    setCartItems((prev) => ({...prev, [itemId]:1}))
  }
  else{
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
  }
}

const removeFromCart = (itemId) => {
  setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}));
}

useEffect(() => {
  console.log(cartItems);
}, [cartItems])

 const contextValue = {
  //The data in contextValue Object can be used anywhere in project just by using useContext() state. 
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
 }  
 
 return (
     <StoreContext.Provider value={contextValue}>
       {prop.children}
     </StoreContext.Provider>
 )
}

export default StoreContextProvider;