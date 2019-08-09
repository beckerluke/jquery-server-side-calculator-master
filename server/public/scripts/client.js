$(document).ready(init); 

function init () {
    console.log('What up');

    $('#js-btn-submit').on('click', postInputNumbers);
    
    postInputNumbers();
}

function postInputNumbers() {
    $('#js-btn-submit').on('click', postInputNumbers);
    const dataForServer = {
        firstNumber: $('#first-number-input').val(),
        secondNumber: $('#second-number-input').val(), 
    }; 

    console.log(dataForServer);
    
    $.ajax({
        type: 'POST',
        url: '/input-numbers',
        data: dataForServer,
    }).then((response) => {
        console.log(response);
        // getCalculation();
    });
}

// function getInputNumbers() {
//     $.ajax({
//         type: 'GET',
//         url: '/input-numbers',
//     }).then(function(response) {
//         console.log();
        
//        render(response);
//     });
// }