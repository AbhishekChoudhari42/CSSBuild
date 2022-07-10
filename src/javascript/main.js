$ = (element) =>{
    return document.querySelector(element);
}

if($('#cancel-button')){
$('#cancel-button').onclick = function(){
    $('.popup').classList.remove('show') 
}
}

if($('.code')){
$('.code').onclick = function(){
    
    $('.popup').classList.add('show')
}}