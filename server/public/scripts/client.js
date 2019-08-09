$(document).ready(init); 

function init () {
    console.log('What up');
    
    getDemo();
}

function getDemo() {
    $.ajax({
        type: 'GET',
        url: '/demo',
    }).then((response) => {
        console.log(response);
    });
}