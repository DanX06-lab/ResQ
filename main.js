// main.js
// Logic for "Ring for Police" demo

document.addEventListener('DOMContentLoaded', function () {
    const ringPoliceBtn = document.getElementById('ringPoliceBtn');
    // Connect to Socket.IO backend
    const socket = io('https://resq-yc11.onrender.com');

    if (ringPoliceBtn) {
        ringPoliceBtn.addEventListener('click', function () {
            socket.emit('ringPolice'); // Notify server
            alert('Police have been alerted!');
        });
    }

    // Listen for police-alert event from server


    // Listen for assistance-accepted event from server
    socket.on('assistance-accepted', function () {
        alert('A police officer has accepted the request. Assistance is on the way!');
        // Optionally, update the UI here instead of using alert
    });
});
