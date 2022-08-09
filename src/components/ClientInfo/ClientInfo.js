import React, { useState, useContext} from 'react';
import {CartContext} from '../../contexts/CartContext'
import { saveOrder } from "../../services/firestore";

const ClientInfo = () => {

  const [enteredName, setEnteredName] = useState('');    
  const [enteredPhone, setEnteredPhone] = useState();
  const [enteredEmail, setEnteredEmail] = useState('');

  const cart = useContext(CartContext)
  console.log(cart)

  const nameChangeHandler = e => {
    setEnteredName(e.target.value)
  }

  const enteredPhoneHandler = e => {
    setEnteredPhone(e.target.value)
  }

  const enteredEmailHandler = e => {
    setEnteredEmail(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault();
    let compra = {'buyer': {enteredName, enteredPhone, enteredEmail}, 'items': cart.cart, 'date':new Date() ,'total': cart.totalAPagar() }
    saveOrder(compra).then(({id}) => cart.cargarIdCompra(id))    
    cart.clearCart()
  };


  return (
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Name</label>
          <input
            type="name"
            id="name"
            onChange={nameChangeHandler}
            value={enteredName}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            onChange={enteredPhoneHandler}
            value={enteredPhone}
          />
        </div>
        <div>
          <label htmlFor="phone">Email</label>
          <input
            type="email"
            id="email"
            onChange={enteredEmailHandler}
            value={enteredEmail}
          />
        </div>
        <button
            type="submit"
        >Finalizar Compra</button>
      </form>
  );
};

export default ClientInfo;