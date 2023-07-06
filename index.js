//Requiring Express makes the code available for us to use
let express = require('express')    

//however, we still need to initialize an application object that is just ours.
let app = express()

//create a homepage route
app.get('/',function(req,res){
    //this gets sent to client
    res.send('Hello from Wendys First Page!!!')
})

//creating a second route page
app.get('/second',function(req,res){
    //this gets sent to client
    res.send('Hello from Wendys Second Page!!!')
})

app.listen(3000)