$(document).ready(function(){
    updateName();
});

$('.button').click(function(){
    updateName();
});

var updateName = function(){
    $('.name').text(createName(true));
};