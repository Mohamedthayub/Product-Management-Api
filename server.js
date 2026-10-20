const express = require('express');
const  app = express();

app.get('/',(req,res) => {
    res.send("This is for Test");
});


app.post('/',(req,res) => {
    res.send("This is Post Request")
})


app.listen(4000, () => {
    console.log('http://localhost:4000');
});
