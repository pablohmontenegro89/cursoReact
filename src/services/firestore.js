import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAAQpwzonpulhYBqKA0XQZmgIJCgEHs6s",
  authDomain: "react-coderhouse-be75c.firebaseapp.com",
  projectId: "react-coderhouse-be75c",
  storageBucket: "react-coderhouse-be75c.appspot.com",
  messagingSenderId: "382124108519",
  appId: "1:382124108519:web:3a49f26d22e03443ad9042"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function getAllProducts(){
  const productsCollectionRef = collection(db, "productos")
  const docSnapshot = await getDocs(productsCollectionRef)
  const dataProducts = docSnapshot.docs.map( item => item.data())
  return dataProducts
}

export function saveOrder(orden){
  const ordersCollectionRef = collection(db, "orders")
  return addDoc(ordersCollectionRef, orden)
}

export default db