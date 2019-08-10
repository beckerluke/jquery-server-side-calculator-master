const userInputToCalculate = {
    firstNumber: null,
    secondNumber: null, 
    symbol: null,
}; 

$(document).ready(init); 

function init () {
    console.log('What up');

    $('.js-btn-math-symbol').on('click', assignSymbol); // event listener when you click on one of the math symbol buttons
    $('#js-btn-submit').on('click', postInputNumbers); // event listener when you click submit button 
    
}

function assignSymbol() {
    const mathSymbolClicked = $(this).data('symbol')
    console.log(mathSymbolClicked);
    
//     userInputToCalculate.symbol = $(this).data('symbol'); // symbol user clicks on
// }

// function getInputNumbers() {
//     $.ajax({
//         type: 'GET',
//         url: '/calculate',
//     }).then(function(response) {
//         console.log();
        
//        render(response);
//     });
// }

// function postInputNumbers() {
//     const dataForServer = {
//         firstNumber: $('#first-input-number').val(),
//         secondNumber: $('#second-input-number').val(), 
//     }; 

//     console.log(dataForServer);
    
//     $.ajax({
//         type: 'POST',
//         url: '/calculate',
//         data: userInputToCalculate,
//     }).then((response) => {
//         console.log(response);
//         // getCalculation();
//     });
// }

// function submitNumbers() {
//     if ( $('#first-input-number').val() && $('#second-input-number').val() != '') {
//         userInputToCalculate.firstNumber = $('#first-input-number').val(); 
//         userInputToCalculate.secondNumber = $('#second-input-number').val();
//         postInputNumbers();
//     } else {
//         alert('Enter Both Numbers');
//     }
} // put values from input fields into userInputToCalculate object and post. Alert if user submits without filling out fields  