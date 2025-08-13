import React, { useState, useEffect } from 'react';
import { MessageSquare, User, Mail, Clock, Search, Filter, Trash2, Eye } from 'lucide-react';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Mock data - in real implementation, this would fetch from MongoDB
  const mockMessages = [
    {
      _id: '507f1f77bcf86cd799439011',
      name: 'John Doe',
      email: 'john@example.com',
      text: 'Hello, I have a question about your services. Can you help me understand the pricing structure?',
      timestamp: new Date('2024-08-13T10:30:00'),
      status: 'unread'
    },
    {
      _id: '507f1f77bcf86cd799439012',
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      text: 'Great work on the recent update! The new features are amazing.',
      timestamp: new Date('2024-08-13T09:15:00'),
      status: 'read'
    },
    {
      _id: '507f1f77bcf86cd799439013',
      name: 'Mike Johnson',
      email: 'mike@company.com',
      text: 'I encountered an issue with the login process. It keeps showing an error message.',
      timestamp: new Date('2024-08-13T08:45:00'),
      status: 'unread'
    },
    {
      _id: '507f1f77bcf86cd799439014',
      name: 'Emily Davis',
      email: 'emily@startup.io',
      text: 'Would love to schedule a demo call. When would be a good time?',
      timestamp: new Date('2024-08-12T16:20:00'),
      status: 'replied'
    }
  ];

  // Simulate real-time updates
  useEffect(() => {
    setMessages(mockMessages);
    
    // Simulate new message every 10 seconds
    const interval = setInterval(() => {
      const newMessage = {
        _id: `507f1f77bcf86cd79943901${Math.floor(Math.random() * 100)}`,
        name: ['Alex Wilson', 'Lisa Brown', 'Tom Anderson', 'Kate Miller'][Math.floor(Math.random() * 4)],
        email: `user${Math.floor(Math.random() * 1000)}@example.com`,
        text: [
          'Just wanted to say thanks for the excellent support!',
          'Having trouble with the mobile app, can you help?',
          'Love the new dashboard design!',
          'Question about billing - can you clarify?'
        ][Math.floor(Math.random() * 4)],
        timestamp: new Date(),
        status: 'unread'
      };
      
      setMessages(prev => [newMessage, ...prev]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.text.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || message.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const markAsRead = (id) => {
    setMessages(prev => prev.map(msg => 
      msg._id === id ? { ...msg, status: 'read' } : msg
    ));
  };

  const deleteMessage = (id) => {
    setMessages(prev => prev.filter(msg => msg._id !== id));
  };

  const formatTime = (timestamp) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(timestamp);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'unread': return 'bg-red-500';
      case 'read': return 'bg-blue-500';
      case 'replied': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const unreadCount = messages.filter(msg => msg.status === 'unread').length;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm">
                {messages.length} total messages • {unreadCount} unread
              </p>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
            </select>
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="p-4 sm:p-6">
        <div className="space-y-4">
          {filteredMessages.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No messages found</p>
            </div>
          ) : (
            filteredMessages.map((message) => (
              <div
                key={message._id}
                className={`bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 hover:border-gray-600 transition-colors ${
                  message.status === 'unread' ? 'ring-1 ring-blue-500/30' : ''
                }`}
              >
                {/* Message Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-white truncate">
                          {message.name}
                        </h3>
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(message.status)}`} />
                        <span className="text-xs text-gray-400 capitalize">
                          {message.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{message.email}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="text-right text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formatTime(message.timestamp)}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        ID: {message._id.slice(-8)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Text */}
                <div className="mb-4">
                  <p className="text-gray-300 leading-relaxed break-words">
                    {message.text}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {message.status === 'unread' && (
                    <button
                      onClick={() => markAsRead(message._id)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Mark as Read
                    </button>
                  )}
                  
                  <button
                    onClick={() => setSelectedMessage(message)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm font-medium transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Reply
                  </button>
                  
                  <button
                    onClick={() => deleteMessage(message._id)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm font-medium transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Reply Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Reply to {selectedMessage.name}</h3>
              <div className="bg-gray-700 rounded-lg p-4 mb-4">
                <p className="text-gray-300">{selectedMessage.text}</p>
              </div>
              <textarea
                placeholder="Type your reply..."
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="4"
              />
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors">
                  Send Reply
                </button>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;