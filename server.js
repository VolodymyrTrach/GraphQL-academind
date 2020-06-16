const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.listen(5000, () => {
    console.log('App listening on port 5000!');
});
app.get('/', (req, res, next)=>{
    res.send('Hello World!')
})