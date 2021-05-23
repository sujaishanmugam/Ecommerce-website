const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  return res.send("homepage");
});

const admin = (req, res) => {
  return res.send("this is admin dash");
};

const isAdmin = (req, res, next) =>{
    console.log("isAdmin is running");
    next()
}

const isLoggedIn = (req, res, next) => {
   const isLoggedIn = true;
  if(isLoggedIn === true) {
    next()
  }else{
      console.log("Log in")
  }
   
}

app.get("/admin", isLoggedIn, isAdmin, admin);

app.get("/login", (req, res) => {
  return res.send("you are visiting login route");
});
app.get("/signin", (req, res) => {
  return res.send("you are signed in");
});
app.get("/signout", (req, res) => {
  return res.send("you are signed out :)");
});
app.get("/hitesh", (req, res) => {
  return res.send("insta dude");
});

app.listen(port, () => {
  console.log("server is up and running");
});
