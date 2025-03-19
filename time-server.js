const net = require('net');

const port = process.argv[2];  

const server = net.createServer((socket) => {
    const currentDate = new Date();

    const formattedTime = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ` +
                          `${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}\n`;

    socket.end(formattedTime);  
});
server.listen(Number(port));