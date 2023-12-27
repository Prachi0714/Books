import React ,{useEffect, useState} from 'react'
import '../Style/Cart.css'
import StripeCheckout from 'react-stripe-checkout'



const Cart = ({cart ,setCart,handleChange}) => {
    const [price ,setPrice] = useState(0)
       
    const handlePrice = () =>{
      let ans = 0;
      cart.map((item)=>(
        ans+=item.amount*item.price
      ))
      setPrice(ans);
    }

    const handleRemove = (id) =>{
      const arr = cart.filter((item)=>item.id !== id);
      setCart(arr);
      
    }


    useEffect(()=>{
      handlePrice()
    })

    const token = (token) => {
        console.log(token)
    }
  return (
   <article>
    {
      cart.map((item)=>(
        <div className='cart_box' key={item.id}>
          <div className='cart_img'>
            <img src = {item.image}/>
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={()=>handleChange(item , +1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={()=>handleChange(item , -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={()=> handleRemove(item.id)}>Remove</button>
          </div>

        </div>
      ))
    }
    <div className='total'>
    <span>Total Price of Your Cart</span>
    <span>Rs - {price}</span></div>
    
<StripeCheckout
                token = {token}
                stripeKey = 'pk_test_51NqsGdSEnDx41uiAy91YixIr2Oa4csspmLIFWFuYRsQmQDnUQfqUi78bCNTmIm8gmdAePgxV4LvW4a4BR3aASFfu00kVsnIvNN'
                amount={price*100}
                name='shopping cart'
                currency='INR'
                >
                    <button className='checkout'>Checkout</button>
                </StripeCheckout>
    



   </article>
  )
}

export default Cart