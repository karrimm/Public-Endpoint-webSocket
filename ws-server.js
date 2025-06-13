// ws-server.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const PORT = process.env.PORT || 10000;
const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
  console.log('🔌 Client connected');

  ws.on('message', function incoming(message) {
    console.log('🎧 Received audio chunk:', message.length);
    // TODO: buffer and send to STT
  });

  ws.on('close', () => {
    console.log('❌ Client disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('WebSocket server is running.');
});

server.listen(PORT, () => {
  console.log(`🚀 Listening on port ${PORT}`);
});
