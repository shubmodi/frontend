import React from 'react'
import image from './next.svg';

const Home = () => {

  const cartItem = 10;

  const displayMessage =(msg) =>{
    return(
      <div className='border border-red-500 bg-red-300 p-3 rounded-md w-1/2 mx-auto my-3'>
        <span className='text-red-500 font-bold'>{msg}</span>
      </div>
    )
  }

  return (
  <>
    

    <div>
      {displayMessage('oops!Your detail are not correct')}
      <h1 style={{color:'blue',textAlign:'center',fontSize:50}}>my home page</h1>

      <br />

      <input type="text" name="" id="" />

      <img src="" alt="" />

      <h2 className='text-2xl text-center'>Cart Item:{cartItem+5}</h2>
      
    </div>
    <div>
      <button className='btn'>My Button</button>
      <img src="/next.svg" alt="" />
      <img src={image.src} alt="" />

    </div>

  </>
    
  )
}
export default Home




