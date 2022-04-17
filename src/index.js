// <------------Video 6 Started Template engine-------------->

const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 8000;

const templatePath = path.join(__dirname, "../templates");
// to set the view engine first come first serve
app.set("view engine", "hbs");
app.set("views", templatePath); // to change the name of views Directory

// route for view engine
app.get("", (req, res) => {
  res.render("index", {
    Name: "Raja raj",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    Name: "Raja raj",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/*<------------Video 5 Completed static website using node and express as a backend-------------->*/

// const express = require("express");
// const app = express();
// const path = require("path");

// // relative absolute
// // console.log(path.join(__dirname, "../public"));

// const staticPath = path.join(__dirname, "../public");

// // builtin middleware express.static to serve static website
// app.use(express.static(staticPath));

// // app.get(route, callback);
// // "/" --> means show Rajaraj.com

// // API
// // get - read the date from server
// // post - create
// // put - update
// // delete - delet

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello World From About Page");
// });

// // Request object represents the HTTP Request , Request Can be Done with Many Way
// // request query string, parameters, body, HTTP headers

// app.listen(8000, () => {
//   console.log("Listening On Port 8000");
// });
