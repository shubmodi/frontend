'use client';
import React from 'react'

const eventhandling = () => {

const previewImage = (e) => {
    
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload= (data) => {
       const img = document.createElement('img');
       img.src = data.target.result;
       document.body.appendChild(img);
      };

    reader.readAsDataURL(file);

}

  return (
    <div className='border border-black max-w-3xl mx-auto my-10'

    onMouseMove={ e => {
        document.getElementById('circle').style.left = e.clientX -20 +'px';
        document.getElementById('circle').style.top = e.clientY -20 +'px';
    }}>

        <div id='circle'
        onMouseMove={ (e) => {e.target.style.height ='30px'; e.target.style.width ='30px'}}
        onMouseUp={ (e) => {e.target.style.height ='46px'; e.target.style.width ='46px'}}
        className='absolute duration-00 rounded-full size-12 border border-black' ></div>

        <button 
        onClick={() => {alert('Button was Clicked')} } 
        className='border rounded bg-gray-300 hover:bg-white px-3 py-1'>Click Me</button>

        <input 
        onChange={(e)=> {console.log(e.target.value);}}
        className='mt-5 border border-black px-3 py-1 rounded w-full' type="text" />

        <input 
        onChange={(e)=> { document.body.style.backgroundColor=e.target.value;}}
        type="color" className='mt-5 block' />

        <input 
        onChange={(e) => {console.log(e.target.files);}}
        type="file" className='mt-5' multiple />


        <label className='mt-5 block'>Upload Image</label>   
        <input type="file" accept='image/*' onChange={previewImage} />

        <input type="text" className='border border-black w-full mt-5' 
        onKeyDown={() => {console.log(e.code);}} />
        
        
    </div>
  )
}

export default eventhandling;