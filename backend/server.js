const app = require("./app"); //Express application
const http = require("http");
require("dotenv").config();

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is runnning on port ${port}`);
});
