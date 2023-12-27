import React, { useState } from 'react'
import Main from './Component/Main'
import Navbar from './Component/Navbar'
import Cart from './Component/Cart'
import './App.css'

const App = () => {
  const [cart,setCart] = useState([])
  const [show ,setShow] = useState(true);
  const [warning,setWarning]  = useState(false);
 

  const handleClick = (item)=>{
let ispresent = false;
cart.forEach((product)=>{
  if(item.id === product.id)
  ispresent=true;
})

if(ispresent){
setWarning(true);
setTimeout(()=>{
  setWarning(false)
},2000);
return;

}
setCart([...cart,item])
console.log(warning)
  }

  const handleChange = (item,d)=>{
   let  ind = -1;
   cart.forEach((data,index)=>{
    if(data.id === item.id)
    ind = index
   });

   const temparr = cart;
   temparr[ind].amount += d;
   if(temparr[ind].amount===0)
   temparr[ind].amount = 1;
  setCart([...temparr])

  }




  return (
   <React.Fragment>

   <Navbar size = {cart.length} setShow={setShow}/>
   {
    show ? <Main handleClick = {handleClick}  /> : <Cart cart = {cart} setCart={setCart} handleChange = {handleChange}/>
   }
   
   
   {
    warning && <div className='warning'>Item is already Exits</div>
   }

   </React.Fragment>
  )
}

export default App