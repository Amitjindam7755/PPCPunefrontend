//****WORKING PERFECTLY */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8081'); // 🔗 Connect to backend

const NewsItems = () => {
  const [latestNotification, setLatestNotification] = useState('');

  // Fetch latest notification
  const fetchNotification = async () => {
    try {
     const res = await axios.get('http://localhost:8081/notifications');
      setLatestNotification(res.data[0]?.message || '');
    } catch (err) {
      console.error('Error fetching notification:', err);
    }
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('✅ Connected to socket');
    });

    // Initial fetch
    fetchNotification();

    // Listen to real-time event
    socket.on('notification_updated', () => {
      console.log('🔔 Notification updated event received');
      fetchNotification();
    });

    return () => {
      // Cleanup on unmount
      socket.off('notification_updated');
    };
  }, []);

  return (
    <div className="w-full bg-red-800 text-white flex items-center px-3 py-2">
      <span className="news-label text-yellow-400 font-semibold whitespace-nowrap pr-3">
        Updates & Notification &gt;&gt;&nbsp;
      </span>
      <marquee behavior="scroll" direction="left" className="text-sm md:text-base">
        {latestNotification || 'No notifications available.'}
      </marquee>
    </div>
  );
};

export default NewsItems;




