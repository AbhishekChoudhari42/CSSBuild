$ = (element) => {

    var generated = document.querySelector(element);
    return generated

}

// state

state = {

    colorArray : ['#00ffff','#ff00ff','#fb6309'],
    smooth : 1,
    angle : 90

}

// state update

function render(){

    let gradient = ''

//  linear-gradient(54deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 100%);
    state.colorArray.forEach(element => {
        gradient += ','
        gradient += element
         
    });
    $('.gradient').style.background = 'black'
    let gradientColor = `linear-gradient(to left${gradient})`;
    $('.gradient').style.background = gradientColor
    $('.gd-background').style.background = gradientColor

    console.log(gradientColor)

    // adding buttons to color palette

    let colorHtml = ''
    state.colorArray.forEach(element =>{
        colorHtml += `<div class="color" id='cdasd${Math.round(Math.random()*10)}' style = 'background-color : ${element}'  ></div>`
    })
console.log(colorHtml)
    $('.color-palette').innerHTML = colorHtml


     

}
render();

$('#color-add').onclick = function(){
    console.log('colornew')
    $('.color-controls').classList.toggle('display-color-controls');  
    $('#color-add span').classList.toggle('cross-show');
}

$('#add-new-color').onclick = function(){
    console.log('colornewadded')
    $('.color-controls').classList.remove('display-color-controls');  
}



$('.color').onclick = function(e){
    console.log(e.target.id)
}