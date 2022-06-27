$ = (element) => {

    var generated = document.querySelector(element);
    return generated

}

// state

state = {

    colorArray : ['#00ffff','#ff00ff'],
    smooth : 1,
    angle : 90,
    type : 'linear'

}

// state update

function render(){

    let gradient = ''

//  linear-gradient(54deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 100%);
    state.colorArray.forEach(element => {

        gradient += ','
        gradient += element
         
    });
    let gradientColor 
    $('.gradient').style.background = 'black'
    if(state.type == 'linear'){
         gradientColor = `linear-gradient(${state.angle}deg ${gradient})`;

    }
    if(state.type == 'radial'){
         gradientColor = `radial-gradient(closest-side${gradient})`;

    }
    if(state.type == 'conical'){
        gradient.slice(0,1)
        gradientColor = `conical-gradient(${gradient})`;

   }
    
    
    
    
    $('.gradient').style.background = gradientColor
    $('.gd-background').style.background = gradientColor

    // console.log(gradientColor)

    // adding buttons to color palette

    let colorHtml = ''
    let counter = 0
    state.colorArray.forEach(element =>{
        colorHtml += `<div class="color" id='${counter}' style = 'background-color : ${element}'  ></div>`
        counter++
    })
// console.log(colorHtml)
    $('.color-palette').innerHTML = colorHtml



    $('#angleOutput').innerHTML =  state.angle + 'deg'
    select();



    document.querySelectorAll('.type button').forEach(element=>{
        if(element.id == state.type){
            $(`#${element.id}`).classList.add('active')

        }else{
            $(`#${element.id}`).classList.remove('active')

        }
    })
     

}
render();




// add new color

$('#color-add').onclick = function(){
    console.log('colornew')
    $('.color-controls').classList.toggle('display-color-controls');  
    $('#color-add span').classList.toggle('cross-show');
    $('.color-change').classList.remove('display-color-change')

}

$('#add-new-color').onclick = function(){
    console.log('colornewadded')
    $('.color-controls').classList.remove('display-color-controls');  
    $('#color-add span').classList.toggle('cross-show');
    let newColor = $('#newColor').value
    console.log(newColor)

    state.colorArray.push(`${newColor}`)
    render();
}
    
   


// angle

$('#angle').oninput = function(){
    state.angle =  $('#angle').value
    // state.copy = 'copy';
    render();
}


// change or delete existing color
let colorID = ''
function select(){
document.querySelectorAll('.color').forEach(element=>{
    element.onclick = function(e){
        colorID=  e.target.id
        console.log(colorID)
       
        $('.color-controls').classList.remove('display-color-controls');  
        $('#color-add span').classList.remove('cross-show');

        $('.color-change').classList.toggle('display-color-change')
        
        $('#change-color').onclick = function(){
            let color = $('#changed-color').value
            state.colorArray[colorID] = `${color}`
        $('.color-change').classList.remove('display-color-change')

            render()
        } 
        $('#remove').onclick = function(){
            if(state.colorArray.length > 2){
            state.colorArray.splice(colorID, 1);
            $('.color-change').classList.remove('display-color-change')

            render()
            }
            else{
                $('#remove').classList.add('wobble')
            }
            setTimeout(() => {
                $('#remove').classList.remove('wobble')
            }, 2000);
        } 
        

}})}

$('.up').onclick = function(){
    $('.color-change').classList.toggle('display-color-change')

}


document.querySelectorAll('.type button').forEach(element=>{
   element.onclick = function(){
    state.type = element.id
    console.log(element.id)
    render()
   }
})
