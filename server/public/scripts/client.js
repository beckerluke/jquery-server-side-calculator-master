const userInputToCalculate = {
    firstNumber: null,
    secondNumber: null, 
    symbol: null,
}; 

$(document).ready(init); 

function init () {
    $('.js-btn-math-symbol').on('click', assignSymbol); // event listener when you click on one of the math symbol buttons
    $('#js-btn-submit').on('click', submitNumbers); // event listener when you click submit button 
    $('#js-btn-clear').on('click', clearInputs);

    getCalculation();
}

function assignSymbol(event) {
    const mathSymbolClicked = $(this).data('symbol');
    $(this).toggleClass('turn-red');
    console.log(mathSymbolClicked);
    
    userInputToCalculate.symbol = mathSymbolClicked; // symbol user clicks on
}

function clearInputs(event) {
    $('#js-first-input-number').val('');
    $('#js-second-input-number').val('');
    console.log($('#js-first-input-number').val(''));
}

function getCalculation() {
    $.ajax({
        type: 'GET',
        url: '/calculate',
    }).then(function(response) {
        console.log(response); // received array of objects with calculations
        render(response); // append to DOM
    });
}

function render(calculatedOutputArray) {
    $('#js-container').empty();
    
    $('#js-container').append(`
        <h2>${calculatedOutputArray[calculatedOutputArray.length - 1].answer}</h2>`); 
    
    for(let i = 0; i < calculatedOutputArray.length; i++) {
        $('#js-container').append(`
                <ul>
                    <li>
                        ${calculatedOutputArray[i].firstNumber + ' ' + calculatedOutputArray[i].symbol + ' '
                            + calculatedOutputArray[i].secondNumber + ' = ' + calculatedOutputArray[i].answer}
                    </li> 
                </ul>`);
    }
}

function postInputNumbers() {
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: userInputToCalculate, // send userInputToCalculate object to server
    }).then((response) => {
        console.log(response);
        getCalculation();
    });
}

function submitNumbers(event) {
    if ( $('#js-first-input-number').val() && $('#js-second-input-number').val() != '') {
        userInputToCalculate.firstNumber = $('#js-first-input-number').val(); 
        userInputToCalculate.secondNumber = $('#js-second-input-number').val();
        console.log(userInputToCalculate);
        postInputNumbers();
    } else {
        alert('Enter Both Numbers');
    }
}
