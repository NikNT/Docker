import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hey World!");
});

app.listen(4000, () => {
  console.log("Listening on Port 4000");
});
