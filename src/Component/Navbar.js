import React from 'react'
import '../Style/Navbar.css'

const Navbar = ({size ,setShow}) => {
  return (
    <>
    <nav>
    <div className='nav-main' >
      <div onClick={()=>setShow(true)}> <h1 onClick={()=>setShow(true)}>My Shopping</h1></div>
      <div onClick={()=>setShow(false)}>
      <i className='fas fa-cart-plus'></i>
        <span>{size}</span>
      </div>
       
        
    </div>
    </nav>
    </>
  )
}

export default Navbar


