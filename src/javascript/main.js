$ = (element) =>{
    return document.querySelector(element);
}


$('#cancel-button').onclick = function(){
    $('.popup').classList.remove('show') 
}

$('.code').onclick = function(){
    
    $('.popup').classList.add('show')
}