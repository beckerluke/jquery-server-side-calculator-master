$(document).ready(init); 

function init () {
    console.log('What up');
    
    getDemo();
}

function getInputNumbers() {
    $.ajax({
        type: 'GET',
        url: '/input-numbers',
    }).then((response) => {
        console.log(response);
    });
}