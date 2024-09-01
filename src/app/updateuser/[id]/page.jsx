'use client'
import axios from 'axios';
import { useparams } from 'next/navigation';
import React from 'react'

const UpdateUser = () => {
    const {id} = useparams();
    const [user, setUserData] = React.useState(null);
    const getUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getbyid/' + id)
    }

    useEffect(() =>{
        getUserData();
    },[]);
  return (
    <div>
        <div className='max-w-xl mx-auto p-5 border mt-5 shadow'>
        <h1 className='text-2xl text-ceneter font-bold'>Update User Detail</h1>
        {
            userData !== null ?(
                <form>

            <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' 
            placeholder='Enter your name'

            type="name"
             />
            <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' 
            placeholder='Enter your Email'
            type="email"
             />
            <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' 
            placeholder='Enter your Password'
            type="password"
             />
            <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' 
            placeholder='Enter your City'
            type="city"
             />
               </form>

            ): <p className='text-3xl text-gray-100 text-center font-bold mt-5'>Loading...</p>
        }

        
             

        </div>
    </div>
  )
}
        
export default UpdateUser
             

        
