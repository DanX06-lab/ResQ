// server.js
// Node.js + Socket.IO backend for police alert system
// Serves static files for local testing and handles real-time alerts

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);

// Socket.IO server (CORS enabled for local dev)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Serve static files (for local HTML/JS testing)
app.use(express.static(__dirname));

io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);

    // Listen for ringPolice event from user clients
    socket.on('ringPolice', () => {
        console.log('Received ringPolice event! Broadcasting to police clients...');
        io.emit('police-alert'); // Broadcast to all connected clients
    });

    // Listen for assistance-accepted event from police clients
    socket.on('assistance-accepted', () => {
        console.log('Assistance accepted by a police officer!');
        io.emit('assistance-accepted'); // Broadcast to all clients
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
