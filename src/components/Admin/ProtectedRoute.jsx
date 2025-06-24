// WORKING
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        const token = localStorage.getItem('token');
        // const res = await axios.get('http://localhost:8081/api/admin/verify',  {
         const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/admin/verify`,  {
          headers: { Authorization: `Bearer ${token}` }
        });
        setIsAuth(res.data.valid);
      } catch {
        setIsAuth(false);
      }
    };
    verify();
  }, []);

  if (isAuth === null) return <p>Loading...</p>;
  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;


