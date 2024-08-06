'use client'

import { IconCircle, IconCircleCheck, IconLoader } from '@tabler/icons-react';
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password : Yup.string().required('password is required')
    .matches(/[a-z]/,'lowercase required')
    .matches(/[A-Z]/,'uppercase required')
    .matches(/[0-9]/,'number required')
    .matches(/\W/,'special character is required'),
    confirmPassword:Yup.string().required('confirm password is required')
     .oneOf([Yup.ref('password'),null],'password must match')
 
});

const page = () => {

  const signupForm = useFormik({
    initialValues: {
      name : '',
      email : '',
      password : '',
      confirmPassword : '',
    },
    onSubmit: (values , {resetForm,setSubmitting}) => {

      setTimeout(() => {
        console.log(values);
        setSubmitting(false)
      }, 3000);

      console.log(values);
      
    },
    validationSchema: SignupSchema
  });


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-md mx-auto'>
      <div className='rounded-lg border-2 shadow p-8'>
       <h1 className='uppercase font-bold my-6 text-3xl text-center text-gray'>Signup Form</h1>

       <form onSubmit={signupForm.handleSubmit}> 
       <label htmlFor="name">FullName</label>
       <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.name && signupForm.errors.name}</span>
       <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text" 
       className={'border rounded w-full px-3 py-2 mb-4 '+
        ((signupForm.touched.name && signupForm.errors.name)? 'border-red-500':'')
       }
       />  
       <label htmlFor="email">Email</label>
       <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.email && signupForm.errors.email}</span>
       <input id='email' onChange={signupForm.handleChange} value={signupForm.values.email} type="email" 
       className={'border rounded w-full px-3 py-2 mb-4 '+
       ((signupForm.touched.email && signupForm.errors.email)? 'border-red-500':'')
       }
       />  
       <label htmlFor="password">Password</label>
       <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.password && signupForm.errors.password}</span>
       <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} type="password" 
       className={'border rounded w-full px-3 py-2 mb-4 '+
        ((signupForm.touched.password && signupForm.errors.password)? 'border-red-500':'')
       }
       />  
       <label htmlFor="confirmpassword">Confirm Password</label>
       <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.confirmPassword && signupForm.errors.confirmPassword}</span>
       <input id='confirmPassword' onChange={signupForm.handleChange} value={signupForm.values.confirmPassword} type="password" 
       className={'border rounded w-full px-3 py-2 mb-4 '+
        ((signupForm.touched.confirmPassword && signupForm.errors.confirmPassword)? 'border-red-500':'')
       }
       /> 

       <button type='submit' disabled={signupForm.isSubmitting}
       className='bg-blue-500 flex justify-center items-center text-white px-3 py-2 mt-8 rounded w-full disabled:opacity-50'>
        {signupForm.isSubmitting?<IconLoader className='animate-spin' size={20} />:<IconCircleCheck size={20}/>}
        <span>{signupForm.isSubmitting?'please wait':'submit'}</span>
        </button> 
       
       </form>
      </div>
      </div>
    </div>
  )
}

export default page