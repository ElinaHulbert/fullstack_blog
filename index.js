import express from "express";

const app = express();

//allows to read json in requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hiii");
});

//when the post request comes return the response in json format
app.post("/auth/login", (req, res) => {
  console.log("body", req.body);
  res.json({
    success: true,
  });
});

app.listen(5000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server ok");
});
