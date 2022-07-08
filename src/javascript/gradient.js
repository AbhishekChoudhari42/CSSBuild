$ = (element) => {

    var generated = document.querySelector(element);
    return generated

}

// state

state = {

    colorArray : ['#00ffff','#ff00ff'],
    smooth : 1,
    angle : 90,
    type : 'linear',
    interpolation: '1',
    code:''

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

    }else
    if(state.type == 'radial'){
        
         gradientColor = `radial-gradient(closest-side${gradient})`;

    }else
    if(state.type == 'conical'){
        gradient = ''
        let count = 0
        let sub = 100/((state.colorArray.length)-1)
        state.colorArray.forEach(element => {

            // gradient += ','
            gradient +=`,${element} ${Math.round(count*sub)}%`
            count++
             
        });

        result = gradient.slice(1)
        console.log('colou')
        console.log(result)
        gradientColor = `conic-gradient(${result})`;

   }
    
   state.code = gradientColor
   $('.css-code').innerHTML = 'background : '+gradientColor+';'
    
  
    
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

    $('#smoothOutput').innerHTML = state.interpolation-1



    document.querySelectorAll('.type button').forEach(element=>{
        if(element.id == state.type){
            $(`#${element.id}`).classList.add('active')

        }else{
            $(`#${element.id}`).classList.remove('active')

        }

        
    })
     
    if(state.type != 'linear'){
        $('#angleShow').classList.add('remove');
    }else{
        $('#angleShow').classList.remove('remove');

    }
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





function HEXtoHSL(hex) {
    hex = hex.replace(/#/g, '');
    if (hex.length === 3) {
        hex = hex.split('').map(function (hex) {
            return hex + hex;
        }).join('');
    }
    var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex);
    if (!result) {
        return null;
    }
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
        case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
        case g:
            h = (b - r) / d + 2;
            break;
        case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
    }
    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    return {
        h: h,
        s: s,
        l: l
    };
}

// console.log(HEXtoHSL('#ff00ff'))

function h_s_lToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    var r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = function(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = function(x) {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return '#'+toHex(r)+toHex(g)+toHex(b);
  }



  //smoothening function 

  $('#smooth').oninput = function(){

    let n = $('#smooth').value

    let sizeOfArray = state.colorArray.length

    let newArray = []

    let color1 = state.colorArray[0]
    let color2 = state.colorArray[sizeOfArray-1]

    let color1Hue = HEXtoHSL(color1).h
    let color2Hue = HEXtoHSL(color2).h

    let color1Sat = HEXtoHSL(color1).s
    let color2Sat = HEXtoHSL(color2).s

    let color1L = HEXtoHSL(color1).l
    let color2L = HEXtoHSL(color2).l

    
  


    for(let i = 0;i <= n ;i++){
        
        let colorHue = interpolation(color1Hue,color2Hue,(i/(n)),-1) 
        let colorSat = interpolation(color1Sat,color2Sat,(i/(n)),1) 
        let colorL = interpolation(color1L,color2L,(i/(n)),1) 

        let color = h_s_lToHex(colorHue, color1Sat,color1L)

        newArray.push(color);


    }

    console.log(newArray)
    state.colorArray = newArray
    newArray = []

    state.interpolation = n
    render()



  }

  function minimax(a,b){
    let max = Math.max(a,b)
    let min = Math.min(a,b)

    let signOfOperation

    let normalDistance = max - min;
    let radialDistance = (360 + min) - max

    if(normalDistance<=radialDistance){
        minimumValue = min
        maximumValue = max
        signOfOperation = 1
    }else{
        minimumValue = max
        maximumValue = min
        signOfOperation = -1


        
    }




    return {min:minimumValue , max:maximumValue,sign:signOfOperation }
  

}


  function interpolation(c1,c2,index,flag){

    let color = minimax(c1,c2)
    let value 

    if(flag){
        value = color.min + (color.max - color.min)*index
    }else{
    if(color.signOfOperation){
        value = color.min + (color.max - color.min)*index
    }else{
        value = (color.min + ((((color.max+360)-color.min)%360)*index))
    }
    }
    return value 

  }


let flag = 1
$('.code').onclick = () =>{
    
     // var clipboard = new ClipboardJS('.btn');
     




    if(flag){

        $('.code').innerHTML = 'cancel'
        flag = 0
        $('.code-display').classList.add('active')


        
        
    }
    else{
        
        $('.code').innerHTML = 'copy'
        flag = 1
        $('.code-display').classList.remove('active')
        
    }


}



$('.copy-code').onclick = () =>{
   
    navigator.clipboard.writeText('background :'+state.code+';');
    
    $('.copy-code').innerHTML = 'copied'

    setTimeout(() => {
        $('.copy-code').innerHTML = 'copy'
    }, 1000);

}





