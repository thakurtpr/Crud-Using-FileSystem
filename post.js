const fs = require("fs");

module.exports = (req, res) => {
  if (req.url == "/postdata") {
    try {
      let Data = "";
      req.on("data", (incomingData) => {
        Data += incomingData.toString();
      });

      req.on("end", () => {
        parsedData = JSON.parse(Data);

        fs.writeFileSync("./dummyFile.txt", parsedData.data);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: true,
            Message: "Data appended Successfully",
          })
        );
      });
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end("Internal Server Error");
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
