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
        const res = await axios.get(API_BASE_URL + '/api/me/getmessage');
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
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black p-6">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        📩 Admin Dashboard
      </h1>

      {loading ? (
        <p className="text-gray-300 text-center">Loading messages...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/20 text-white hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex items-center mb-2">
                <User className="w-5 h-5 text-blue-400 mr-2" />
                <span className="font-semibold">{msg.name}</span>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-pink-400 mr-2" />
                <span className="text-sm text-gray-300">{msg.email}</span>
              </div>
              <div className="flex items-start">
                <MessageSquare className="w-5 h-5 text-green-400 mr-2 mt-1" />
                <p className="text-gray-200">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
