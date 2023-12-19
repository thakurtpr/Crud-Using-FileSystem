const http = require("http");
const get = require("./get");
const post = require("./post");
const put = require("./put");
const Delete = require("./delete");

const PORT = 4000;
const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    get(req, res);
  } else if (req.method == "POST") {
    post(req, res);
  } else if (req.method == "PUT") {
    put(req, res);
  } else if (req.method == "DELETE") {
    Delete(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        message: "Not Found",
      })
    );
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
