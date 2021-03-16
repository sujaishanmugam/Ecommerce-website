const express = require('express');

const app = express();
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

app.get('/',(req,res) => {
    return res.send("homepage")
});

const port = 8000;
app.get('/login',(req,res) => {
    return res.send("you are visiting login route")
});
app.get('/signin',(req,res) => {
    return res.send("you are signed in")
});
app.get('/signout',(req,res) => {
    return res.send("you are signed out :)")
});
app.get('/hitesh',(req,res) => {
    return res.send("insta dude")
});


app.listen(port, () => {
    console.log("server is up and running");
});