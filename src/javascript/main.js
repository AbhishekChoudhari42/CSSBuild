$ = (element) =>{
    return document.querySelector(element);
}


$('#cancel-button').onclick = function(){
    $('.popup').classList.remove('show') 
}

$('.display .copy').onclick = function(){
    console.log('copy')
    $('.popup').classList.add('show')
}