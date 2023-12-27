import React from 'react'
import '../Style/Cards.css'


const Cards = ({item,handleClick}) => {
    const {title,image,author,price} = item
  return (
    <>
    <div className='books-main'>
        <div className='books_image'>
            <img src={image} alt='Image' width="100%" height="100%"/>
        </div>
        <div className='details'>
            <p className='title'>{title}</p>
            <p className='author'>{author}</p>
            <p className='price'>Price - {price}Rs</p>
            <button onClick ={()=>handleClick(item)} className='cart-btn'>Add to Cart</button>

        </div>
    </div>
    </>
  )
}

export default Cards