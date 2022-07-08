
    $ = (element) => {

        var generated = document.querySelector(element);
        return generated

    }

    var state = {
        blur:'10',
        color:'#f1f1f1',
        light: 'l1',
        size : '150' ,
        radius : '10',
        distance:'5',
        intensity:5
    }

    function opacityConvert(op)
    {
        let percentage = op/100;
        let number = Math.round(percentage*255) ;
        return number.toString(16) || 11;
    }

function min(a,b){
    return a>=b?b:a
}

let size = 100;

function maxSizeUpdate(){
    let maxSize = min($('.display').clientHeight,$('.display').clientWidth)
    $('#size').setAttribute('max',maxSize+"")
   
}

document.onload = maxSizeUpdate
document.onresize = maxSizeUpdate

let code = ''
let shadow

function render(state){

        // background blur
        $('.glass').style.backdropFilter = `blur(${state.blur}px)`;
        $('#blur')
        
        // border radius
        $('.glass').style.borderRadius = `${state.radius}px`
        
       // background colour
        var bgColor = state.color + `ff`;

        $('.glass').style.background = bgColor;
        $('#bg').style.background = bgColor;
        $('#colorOutput').innerHTML = bgColor 

        // size
       
        size = state.size || size
        $('.glass').style.height = size + "px";
        $('.glass').style.width = size + "px";
        $('.css').innerHTML = ` background : ${ bgColor}; <br> backdrop-filter : ${state.blur}; <br> border: 1px solid rgba(255, 255, 255, 0.125);`


        // box shadow 
        document.querySelectorAll('.light').forEach(element =>{
           if(element.id == state.light){
            element.classList.add('add-light')
           }else{
            element.classList.remove('add-light')

           }
        })        



let distance = [4]

let intensity = state.intensity.toString(16)
        

        
if(state.light == 'l1'){
    distance[0] = -1*state.distance
    distance[1] = -1*state.distance

    distance[2] = state.distance
    distance[3] = state.distance
}else if(state.light == 'l2'){
    distance[0] = state.distance
    distance[1] = -1*state.distance

    distance[2] = -1*state.distance
    distance[3] = state.distance
}
else if(state.light == 'l4'){
    distance[0] = state.distance
    distance[1] = state.distance

    distance[2] = -1*state.distance
    distance[3] = -1*state.distance
}else{
    distance[0] = -1*state.distance
    distance[1] = state.distance

    distance[2] = state.distance
    distance[3] = -1*state.distance
}

       
        let inset = ""

        $('.glass').style.boxShadow = `${inset} ${distance[0]}px  ${distance[1]}px ${state.blur}px #fff${intensity},
        ${inset} ${distance[2]}px  ${distance[3]}px ${state.blur}px #000${intensity} `


        // values

        $('#intensity').value = state.intensity
        $('#distance').value = state.distance
        $('#color').value = state.color
        $('#size').value = state.size
        $('#radius').value = state.radius
        $('#blur').value = state.blur


        $('#radiusOutput').innerHTML = state.radius+'px'
        $('#distanceOutput').innerHTML = state.distance + "px"
        $('#intensityOutput').innerHTML = state.intensity
        $('#sizeOutput').innerHTML = size + "px"
        $('#blurOutput').innerHTML = state.blur + "px"

        shadow = `${inset} ${distance[0]}px  ${distance[1]}px ${state.blur}px #fff${intensity},
        ${inset} ${distance[2]}px  ${distance[3]}px ${state.blur}px #000${intensity} `
        code = `
        .element{<br><br>
             
           <span> background-color: ${state.color};</span>
            <br>
           
          
            <span>box-shadow:${shadow};</span>

            <br><br>
            
          }
        </span}`
        $('code').innerHTML = code

            









      



 

    }
    render(state);



    // State Update

    $('#size').oninput = function(){
        state.size = `${$('#size').value}`
        render(state);
    }

    $('#radius').oninput = function(){
        state.radius = `${$('#radius').value}`
        render(state);
    }

    $('#blur').oninput = function(){
        state.blur = $('#blur').value
        render(state);
    }

    $('#distance').oninput = function(){
        state.distance = $('#distance').value
        render(state);
    }

    $('#intensity').oninput = function(){
        state.intensity = $('#intensity').value
        render(state);
    }

    $('#color').oninput = function(){
        state.color =  $('#color').value
        render(state);
    }
  
    document.querySelectorAll('.light').forEach(element =>{
        element.onclick = (e) =>{
            state.light = e.target.id
            console.log(state.light)

            render(state)



        }
    })
let codeCopy = `.element{ background-color :${state.color} ; box-shadow:${shadow}}`


$('#copy-button').onclick = () =>{
    navigator.clipboard.writeText(codeCopy);

}






