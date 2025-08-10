import React, { useContext, useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Linkedin } from 'lucide-react';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const GetInTouch = () => {


 const {backendUrl} = useContext(AppContext) ;


  const[name,setName] = useState('') ;
  
  const[email,setEmail] = useState('') ;

  const[text,setText] = useState('') ;



  const onSubmitHandler = async (e) => {
     
    try {

       e.preventDefault();

       axios.defaults.withCredentials = true;
        
      const {data} =   await axios.post(backendUrl + '/api/me/message' , {name,email,text}) ;
      
        if(data.success)
          {
            toast.success('Message sent successfully!');
            setName("");
            setEmail("");
            setText("");
          } else{
             toast.error(data.message);
          }

    } catch (error) {
      const msg = error.response?.data?.message || error.message || 'An error occurred';
       toast.error(msg);
    }

  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Get in Touch</h1>
          <p className="text-gray-300 text-center text-sm md:text-base">
            Let's connect and discuss opportunities
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-300 text-sm mb-6">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-indigo-900 to-pink-900 rounded-lg">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                  <p className="text-sm">Aneeshchauhan0609@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-indigo-900 to-pink-900  rounded-lg">
                <Linkedin className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div className=''>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Linkedin</p>
                  <a 
                    href="https://www.linkedin.com/in/aneesh-chauhan06" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-blue-500 hover:underline"
                  >
                    www.linkedin.com/in/aneesh-chauhan06
                  </a>

                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-indigo-900 to-pink-900  rounded-lg">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                  <p className="text-sm">New Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Skills highlight */}
  
          </div>

          {/* Contact Form */}
          <form onSubmit={onSubmitHandler} >

 <div className="bg-gradient-to-r from-gray-900 via-black to-indigo-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
              Send Me a Message
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="block text-sm font-medium mb-1">
                  Name
                </div>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                     value={name}
                     onChange={e => setName(e.target.value)}
                     required
                    className="w-full pl-10 pr-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <div className="block text-sm font-medium mb-1">
                  Email
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                     value={email}
              onChange={e => setEmail(e.target.value)}
                required
                    className="w-full pl-10 pr-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

           

              <div>
                <div className="block text-sm font-medium mb-1">
                  Message
                </div>
                <textarea
                  name="message"
                  rows="4"
                  value={text}
              onChange={e => setText(e.target.value)}
                required
                  className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder=""
                ></textarea>
              </div>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 flex items-center justify-center text-sm"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </div>
          </div>


          </form>
         
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Aneesh Chauhan. Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;