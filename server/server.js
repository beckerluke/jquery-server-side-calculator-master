const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const calculatedOutputArray = []; // variable holding an array of objects of calculations to send back to client

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/calculate', (req,res) => {
    res.send(calculatedOutputArray); // sending back what was calculated
});

app.post('/calculate', (req,res) => {
    const newInputNumbersToCalculate = {
        firstNumber: parseInt(req.body.firstNumber), // first number entered
        secondNumber: parseInt(req.body.secondNumber), // second number entered
        symbol: req.body.symbol, // math symbol selected before hitting submit
    }; // object to convert and store strings into numbers from post request before being used in calculateMath function

    calculateMath(newInputNumbersToCalculate);

    console.log('GET ROUTE');
    console.log(newInputNumbersToCalculate);
    res.send('GOT IT');
}); // end of post

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

function calculateMath(newInputNumbersToCalculate) {
    console.log(newInputNumbersToCalculate.symbol);
    switch (newInputNumbersToCalculate.symbol) {
        case '+':
            newInputNumbersToCalculate.answer = newInputNumbersToCalculate.firstNumber + newInputNumbersToCalculate.secondNumber;
            console.log(newInputNumbersToCalculate);
            break;
        case '-':
            newInputNumbersToCalculate.answer = newInputNumbersToCalculate.firstNumber - newInputNumbersToCalculate.secondNumber;
            console.log(newInputNumbersToCalculate);
            break;
        case '*':
            newInputNumbersToCalculate.answer = newInputNumbersToCalculate.firstNumber * newInputNumbersToCalculate.secondNumber;
            console.log(newInputNumbersToCalculate);
            break;
        case '/':
            newInputNumbersToCalculate.answer = newInputNumbersToCalculate.firstNumber / newInputNumbersToCalculate.secondNumber;
            console.log(newInputNumbersToCalculate);
            break;
        default: 
        newInputNumbersToCalculate.answer = 'ERROR'
    }
    calculatedOutputArray.push(newInputNumbersToCalculate);
    console.log(calculatedOutputArray);
} // end of calculateMath function