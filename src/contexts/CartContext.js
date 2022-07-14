import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

const {Provider} = CartContext

export const CartProvider=({defaultValue=[],children})=> {

    const [cart, setCart] = useState(defaultValue)
    const [id, setId] = useState(0)

    const cleartCart = () => {
        setCart([])
    }

    const addToCart = (item, quantity) => {
      let cont = 0

      for (const el of cart){
        if (el.item==item) {
        cont +=1 
        break
      }}

      if (cont<1){
        setCart(
            [
                ...cart,
                {
                    id: id,
                    item: item,
                    quantity: quantity
                }
            ]
        )}
    }


    const context = {
        cart,
        cleartCart,
        addToCart
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
}