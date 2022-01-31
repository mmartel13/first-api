
const express = require('express'); //brings in entire express library

const app = express(); //creates your API 

//useless unless you do two things. 1. set it up to listen to requests 2. and have it respond to the requests

app.get('/', (request, response) => {
    response.send('My first Express API...works!')
});//accepts a request at the specific address. want to make sure you're sending the response back to the right request so packaged these together. 


app.listen(3000, () => console.log('Listening on port 3000...')); //3000 refers to the port were using. listen function also takes an optional callback function, once i start listening what do you want me to do (this is the console.log portion)

//will only show in browser if when you console log it says listening on port 3000