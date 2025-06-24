// src/socket.js
import { io } from 'socket.io-client';

// const socket = io('http://localhost:8081', {
const socket = io('https://ppc-server.onrender.com/', {
  transports: ['websocket'],
});

export default socket;
