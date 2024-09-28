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

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for(const item in cartItems){
    if(cartItems[item] > 0){
      let itemInfo = food_list.find((product) => product._id === item);
      totalAmount += itemInfo.price * cartItems[item];
    }
      }
      return totalAmount;
}

 const contextValue = {
  //The data in contextValue Object can be used anywhere in project just by using useContext() state. 
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
 }  
 
 return (
     <StoreContext.Provider value={contextValue}>
       {prop.children}
     </StoreContext.Provider>
 )
}

export default StoreContextProvider;