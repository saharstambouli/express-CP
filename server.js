// Import the Express framework
const express = require('express');

// Create an instance of an Express app
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'))
app.set("view engine", "ejs")

// Define the port number for the server
const Port = 5000;


//middleweare
const controleTime = (req,res,next) => {
    const d = new Date()
    const day = d.getDay()
    const hour = d.getHours()

    if (day>= 1 && day<= 5 && hour>=9 && hour<=16) {
        next()
    } else {
        res.send("is claaaaaaaaaaaaawsssed")
    }
}




app.get('/',controleTime, (req, res) => {
    res.render('home')
})

app.get('/services',controleTime,(req,res)=>{
    res.render('services')
})

app.get('/contact',controleTime,(req,res)=>{
    res.render('contact')
})



// Start the server and listen on the defined port
app.listen(Port, (err) => {
    err ? console.log('err', err) : console.log(`Server is running on port:${Port}`)
})

