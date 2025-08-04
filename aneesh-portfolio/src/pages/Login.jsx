import React, { useContext, useState ,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate();

  const {backendUrl, setIsLoggedIn} = useContext(AppContext) ;

   const[state,setState] = useState('Sign Up');

  const[name,setName] = useState('') ;
  
  const[email,setEmail] = useState('') ;

  const[password,setPassword] = useState('') ;
  const [isVisible, setIsVisible] = useState(false);
    const [particles, setParticles] = useState([]);
  

  const onSubmitHandler = async (e) => 
  {
     
    try {

       e.preventDefault();

       axios.defaults.withCredentials = true;

       if (state === 'Sign Up') {
        
      const {data} =   await axios.post(backendUrl + '/api/auth/register' , {name,email,password}) ;
      
        if(data.success)
          {
            setIsLoggedIn(true);
            toast.success('Registered successfully!');
            setTimeout(() => navigate('/'), 500);
          } else{
             toast.error(data.message);
          }

       } else {
        const {data} =   await axios.post(backendUrl + '/api/auth/login' , {email,password}) ;
      
        if(data.success)
          {
            setIsLoggedIn(true);
           toast.success('Logged in successfully!');
           setTimeout(() => navigate('/'), 500);
          } else{
             toast.error('login problem');
          }
       }


    } catch (error) {
      const msg = error.response?.data?.message || error.message || 'An error occurred';
       toast.error(msg);
    }

  }

 useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
      const createParticle = () => {
        const newParticle = {
          id: Date.now() + Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 3 + 3,
          duration: Math.random() * 2 + 3
        };
        setParticles((prev) => [...prev.slice(-8), newParticle]);
      };
  
      const interval = setInterval(createParticle, 800);
      return () => clearInterval(interval);
    }, []);
  


  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-tr from-gray-900 via-black to-gray-900 '>
      
       {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-0 bg-white/15 rounded-full"
          style={{
            left: `${particle.left}%`,
            bottom: '-10px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `floatUp ${particle.duration}s linear infinite`
          }}
        />
      ))}

      <div className='bg-gradient-to-tr from-indigo-900 via-black to-pink-900  p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm border '>
         <h2 className='text-3xl font-semibold text-white text-center mb-3'>{state === 'Sign Up' ? "Create Account" : "Login"}</h2>
         <p className=' text-sm text-center mb-6'>{state === 'Sign Up' ? "Create your account " : "Login to your account" }</p>

         <form onSubmit={onSubmitHandler} >

          {state === 'Sign Up' && (<div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
           
            <input type='name' 
               value={name}
              onChange={e => setName(e.target.value)}
            placeholder='Full Name' required  className='bg-transparent outline-none' />
          </div>)}
          

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] '>
           
            <input type='email' 
              value={email}
              onChange={e => setEmail(e.target.value)}
            placeholder='Email Id' required className='bg-transparent outline-none' />
          </div>

           <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] '>
           
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
       <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

    </div>


  )
}

export default Login