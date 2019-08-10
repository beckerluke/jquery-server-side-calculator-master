const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
let inputNumbersObject = null;
const calculatedOutput = null; // variable to hold number after math has been calculated
// {
//     firstNumber: parseInt(req.body.firstNumber),
//     secondNumber: parseInt(req.body.secondNumber),
// }];
console.log(inputNumbersObject);


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/calculate', (req,res) => {
    res.send(calculatedOutput); // sending back what was calculated
});

app.post('/calculate', (req,res) => {
    const newInputNumbersToCalculate = {
        firstNumber: parseInt(req.body.firstNumber), // first number entered
        secondNumber: parseInt(req.body.secondNumber), // second number entered
        symbol: req.body.symbol, // math symbol selected before hitting submit
    }; // object to convert and store strings into numbers from post request before being pushed into inputNumbersArray

    // inputNumbersArray.push(newInputNumbersToCalculate); 
    inputNumbersObject = newInputNumbersToCalculate;
    calculateMath(inputNumbersObject);

    console.log('GET ROUTE');
    console.log(inputNumbersObject);
    res.send('GOT IT');
}); // end of post

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});


// console.log(inputNumbersArray[0].symbol);

function calculateMath(inputNumbersObject) {
    console.log(inputNumbersObject.symbol);
//     console.log(inputNumbersArray);
//     if (inputNumbersArray[2] == )
// }
}