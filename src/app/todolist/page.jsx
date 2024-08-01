'use client'
import React, { useState } from 'react'

const Todolist = () => {

    const [ count,setcount ] = useState(0);
    const [ tasklist, setTaskList ] = useState([
        {text : 'ghar ki safai', 
        complete : false , 
        added :new Date()
    },

        {text : 'padhai'
        , complete : false , 
        added :new Date()
    },
        {text : 'sona',
        complete : false ,
        added : new Date()
    },
        {text : 'khana',
        complete : false ,
        added : new Date()
    },
    ]);

    const addTask = (e) => {
        if (e.code === 'Enter'){
            console.log(e.target.value);
            e.target.value = '';
        }
    }

  return (
    <div className='max-w-5xl mx-auto  mt-6'>
        <div className='border shadow rounded-3xl'>
            <div className='p-4 border-b-2'>
                <input
                 onKeyDown={ addTask}
                 placeholder='Add a New Task'
                 type="text" 
                 className='w-full p-3 border bg-gray-400 border-gray-300 rounded-xl outline-none'  />

            </div>
            <div className='p-6'>

                {/* <h1 className='text-3xl text-red-500'>{count}</h1>

                <button className='bg-gray-300 p-4'
                    onClick={()=>{setcount(count+1); console.log(count);}}>AddCount
                </button> */}
                {
                tasklist.map((task,index) => { return(
                    <div key={index} className='rounded-md border mb-5 bg-gray-200 shadow p-4'>
                        <p>{task.text}</p>
                        <div className='mt-2 flex justify-end gap-4'>
                            <button className='bg-blue-500 text-white px-2 py-1 rounded-full'>Complete</button>
                            <button className='bg-red-500 text-white px-2 py-1 rounded-full'>Delete</button>
                        </div>
                    </div>
                ) })
                }
                        
        

            </div>
            
        </div>
        
    </div>
  )
}
export default Todolist
    
