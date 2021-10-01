const app = require("./app"); //Express application
const http = require("http");
require("dotenv").config();
const config = require("../utils/config");

const server = http.createServer(app);
const port = config.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is runnning on port ${port}`);
});
