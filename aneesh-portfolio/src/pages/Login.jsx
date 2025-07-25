import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate();

  const {backendUrl, setIsLoggedIn} = useContext(AppContext) ;

   const[state,setState] = useState('Sign Up');

  const[name,setName] = useState('') ;
  
  const[email,setEmail] = useState('') ;

  const[password,setPassword] = useState('') ;

  const onSubmitHandler = async (e) => 
  {
     
    try {
       e.preventDefault();

       if (state === 'Sign Up') {
        
      const {data} =   await axios.post(backendUrl + '/api/auth/register' , {name,email,password}) ;

       } else {
        
       }


    } catch (error) {
      
    }

  }


  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-white to-gray-500'>
      

      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
         <h2 className='text-3xl font-semibold text-white text-center mb-3'>{state === 'Sign Up' ? "Create Account" : "Login"}</h2>
         <p className=' text-sm text-center mb-6'>{state === 'Sign Up' ? "Create your account " : "Login to your account" }</p>

         <form onSubmit={onSubmitHandler} >

          {state === 'Sign Up' && (<div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
            <img src=''></img>
            <input type='text' 
               value={name}
              onChange={e => setName(e.target.value)}
            placeholder='Full Name' required  className='bg-transparent outline-none' />
          </div>)}
          

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] '>
            <img src=''></img>
            <input type='email' 
              value={email}
              onChange={e => setEmail(e.target.value)}
            placeholder='Email Id' required className='bg-transparent outline-none' />
          </div>

           <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] '>
            <img src=''></img>
            <input type='password' 
               value={password}
              onChange={e => setPassword(e.target.value)}
            placeholder='Password' required className='bg-transparent outline-none' />
          </div>

          <p  onClick={() => navigate('/reset-password')}    className='mb-4  text-indigo-500 cursor-pointer'>Forgot Password</p> 

          <button     className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-semibold cursor-pointer ' >{state}</button>

         </form>

         {state === 'Sign Up' ? (<p className='mt-4  text-white  text-center text-xs'>Already have an account? 
          <span onClick={() => setState('Login')} className='mt-4 ml-2  text-white cursor-pointer text-xs  hover:text-blue-400  ' >Login here</span>
         </p>) : (<p className='mt-4  text-white cursor-pointer text-center text-xs'>Don't have an account? 
          <span  onClick={() => setState('Sign Up')}  className='mt-4 ml-2  text-white cursor-pointer text-xs  hover:text-blue-400  ' >Sign Up</span>
         </p>
)}

          
      </div>

    </div>


  )
}

export default Login