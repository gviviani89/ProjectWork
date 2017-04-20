$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
        });
});
