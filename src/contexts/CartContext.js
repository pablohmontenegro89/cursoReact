import { useState, createContext } from "react";

export const CartContext = createContext();

const {Provider} = CartContext

export const CartProvider=({defaultValue=[],children})=> {

    const [cart, setCart] = useState(defaultValue)
    const [buy, setBuy] = useState(false)
    const [total,setTotal] = useState(null)

    const clearCart = () => {
        setCart([])
    }

    const deleteElement = key => setCart(cart.filter(item=>item.key !== key))

    const addToCart = (item, quantity,id, price) => {
      let cont = 0

      for (const el of cart){
        if (el.item===item) {
        cont +=1 
        break
      }}
      
      if (cont<1){
        setCart(
            [
                ...cart,
                {
                    key: id,
                    item: item,
                    quantity: quantity,
                    price: price,
                }
            ]
        )}
    }

    const totalAPagar = () => {
        if (cart.length>0){
            setTotal(cart.reduce((acum,el)=> {return (acum + el.quantity * el.price)},0))
        return total
        }
    }

    const mostrarCarrito = () => {
        setBuy(true) 
        return buy}
    const finalizarCompra = () => {
        setBuy(false)
        return buy}

    const context = {
        cart,
        clearCart,
        addToCart,
        deleteElement,
        totalAPagar,
        mostrarCarrito,
        finalizarCompra
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
}