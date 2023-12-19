const fs = require("fs");

module.exports = (req, res) => {
  if (req.url == "/getdata") {
    try {
      const data = fs.readFileSync("./dummyFile.txt", "utf-8");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          data: data,
        })
      );
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          success: false,
          message: "Internal Server Error",
        })
      );
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        message: "Not Found",
      })
    );
  }
};
