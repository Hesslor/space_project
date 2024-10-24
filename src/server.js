const http = require("http");

const app = require("./app.js");

const Port = process.env.Port || 8000;

const server = http.createServer(app);

server.listen(Port, () => {
  console.log(`Listening on port ${Port}`);
});
