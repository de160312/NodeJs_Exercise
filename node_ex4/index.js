const express = require("express"),
  http = require("http");
const morgan = require("morgan");


const hostname = "localhost";
const port = 3000;
const app = express();

app.use((req, res, next) => {
  // console.log(req.headers); // dòng 3
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});