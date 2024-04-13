import express from "express";
import jsonwebtoken from "jsonwebtoken";

const app = express();

//allows to read json in requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hiii");
});

//when the post request comes return the response in json format
app.post("/auth/login", (req, res) => {
  console.log("body", req.body);
  //when the request comes, generate a token /encrypting this object/
  const token = jsonwebtoken.sign(
    {
      email: req.body.email,
      fullName: "Name Surname",
    },
    "encryptcode"
  );
  //returning the json file with the token to the user
  res.json({
    success: true,
    token,
  });
});

app.listen(5000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server ok");
});
