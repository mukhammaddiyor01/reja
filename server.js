http = require("http"); // bu bizning core modelimiz ekan
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://mukhammaddiyor:fxbu8z9yTBR4I0pQ@cluster0.hk5owyz.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
