const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const inputNumbers = [];
// {
//     firstNumber: parseInt(req.body.firstNumber),
//     secondNumber: parseInt(req.body.secondNumber),
// }];
console.log(inputNumbers);


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.post('/input-numbers', (req,res) => {
    const newInputNumbers = req.body;
    inputNumbers.push(newInputNumbers); 
    
    console.log('GET ROUTE');
    console.log(inputNumbers);
    res.send('GOT IT');
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});