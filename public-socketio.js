// CDN proxy for Socket.IO client
// Use this in your HTML: <script src="public-socketio.js"></script>
// It loads the official Socket.IO client from CDN

const script = document.createElement('script');
script.src = 'https://cdn.socket.io/4.7.5/socket.io.min.js';
document.head.appendChild(script);
