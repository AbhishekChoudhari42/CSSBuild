function menu(){
    $('nav .nav-links').classList.toggle('active');
    $(' nav .menu').classList.toggle('cross');
    console.log('dssds')  
}
$('.menu').onclick = menu;