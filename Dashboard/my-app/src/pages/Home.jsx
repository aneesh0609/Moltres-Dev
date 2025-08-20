import React, { useEffect, useState } from "react";
import axios from "axios";
import { Mail, User, MessageSquare } from "lucide-react";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/me/getmessage`);
        setMessages(res.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black p-6 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
        📩 Portfolio Dashboard 
      </h1>

      {loading ? (
        <p className="text-gray-300 text-center">Loading messages...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border border-white/20 text-white 
                         hover:scale-105 transform transition-all duration-300
                         flex flex-col min-h-[150px]"
            >
              {/* Name */}
              <div className="flex items-center mb-2">
                <User className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                <span className="font-semibold break-words">{msg.name}</span>
              </div>

              {/* Email */}
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-pink-400 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-300 break-words">{msg.email}</span>
              </div>

              {/* Message */}
              <div className="flex items-start overflow-auto max-h-40 pr-1">
                <MessageSquare className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-200 whitespace-pre-wrap break-words">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
