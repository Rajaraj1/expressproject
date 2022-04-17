const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).write("<h1>welcome to home page</h1>");
  res.status(200).write("<h1>welcome to home page</h1>");
  res.send();
});

app.get("/about", (req, res) => {
  res.send("welcome to about page");
});

app.get("/contact", (req, res) => {
  res.send("welcome to contact page");
});

// app.get("/temp", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       position: "Head",
//     },
//     {
//       id: 2,
//       position: "HR",
//     },
//     {
//       id: 3,
//       position: "Project Head",
//     },
//   ]);
// });

app.get("/temp", (req, res) => {
  res.json([
    {
      id: null,
      position: "Head",
    },
    {
      id: 2,
      position: "HR",
    },
    {
      id: 3,
      position: "Project Head",
    },
  ]);
});

// json.stringify --> to convert javascript object to json
// json.parse --> to convert json to javascript
// [] --> This is the symbol of array in javascript

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
