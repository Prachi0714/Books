import React from 'react'
import Cards from './Cards'
import list from './MenuApi'

const Main = ({item,handleClick}) => {
  return (
    <>
    <section className='section'>
    {
        list.map((item)=>{
            return(
                <Cards  item = {item} key = {item.id} handleClick ={handleClick}/>

            )
        })
    }
   </section>
    </>
  )
}

export default Main