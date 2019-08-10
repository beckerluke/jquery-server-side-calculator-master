const userInputToCalculate = {
    firstNumber: null,
    secondNumber: null, 
    symbol: null,
}; 

$(document).ready(init); 

function init () {
    console.log('What up');

    $('.js-btn-math-symbol').on('click', assignSymbol); // event listener when you click on one of the math symbol buttons
    $('#js-btn-submit').on('click', submitNumbers); // event listener when you click submit button 
    $('#js-btn-clear').on('click', clearInputs);
}

function assignSymbol() {
    const mathSymbolClicked = $(this).data('symbol');
    $(this).toggleClass('turn-red');
    console.log(mathSymbolClicked);
    
    userInputToCalculate.symbol = mathSymbolClicked; // symbol user clicks on
}

function clearInputs() {
    $('#js-first-input-number').val('');
    $('#js-second-input-number').val('');
    console.log($('#js-first-input-number').val(''));
     
}

function getCalculation() {
    $.ajax({
        type: 'GET',
        url: '/calculate',
    }).then(function(response) {
        console.log(response);
        
    //    render(response);
    });
}

function postInputNumbers() {
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: userInputToCalculate, // send userInputToCalculate object to server
    }).then((response) => {
        console.log(response);
        getCalculation();
        // getCalculation();
    });
}

function submitNumbers() {
    if ( $('#js-first-input-number').val() && $('#js-second-input-number').val() != '') {
        userInputToCalculate.firstNumber = $('#js-first-input-number').val(); 
        userInputToCalculate.secondNumber = $('#js-second-input-number').val();
        console.log(userInputToCalculate);
        postInputNumbers();
    } else {
        alert('Enter Both Numbers');
    }
}
