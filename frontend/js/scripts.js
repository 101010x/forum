$(document).ready(function () {
    if($('#exampleRadios1').is(':checked')) {
        console.log('hello')
        $('.reasons').find('input[type=checkbox]:checked').removeAttr('checked');
    }
});