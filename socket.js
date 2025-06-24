// src/socket.js
import { io } from 'socket.io-client';

// const socket = io('http://localhost:8081', {
const socket = io(`${import.meta.env.VITE_API_URL}`, {
  transports: ['websocket'],
});

export default socket;
