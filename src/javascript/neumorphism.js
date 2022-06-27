
    $ = (element) => {

        var generated = document.querySelector(element);
        return generated

    }
    var state = {
        opacity:50,
        blur:'10',
        color:'#111111',
        copy : 'copy',
        size : '100' ,
        radius : '10',
        backgroundColor : '#fff',
        distance:'5',
        intensityBlack:'#636363',
        intensityWhite:'fff'

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


function render(state){
        // background blur
        $('.glass').style.backdropFilter = `blur(${state.blur}px)`;
        $('#blurOutput').innerHTML = state.blur+'px'
        
       
        // background colour
        var bgColor = state.color + `${opacityConvert(state.opacity)}`;

        $('.glass').style.background = bgColor;
        $('#opacityOutput').innerHTML = state.opacity + '%'
        $('#colorOutput').innerHTML = bgColor 
        // $('#backgroundColorOutput').innerHTML = state.backgroundColor 

        // size
       
        size = state.size || size
        $('.glass').style.height = size + "px";
        $('.glass').style.width = size + "px";
        $('#sizeOutput').innerHTML = size + "px"
        $('.css').innerHTML = ` background : ${ bgColor}; <br> backdrop-filter : ${state.blur}; <br> border: 1px solid rgba(255, 255, 255, 0.125);`

 

    }
    render(state);
    $('#size').oninput = function(){
        state.size = `${$('#size').value}`
        // state.copy = 'copy';
        render(state);
    }
    // $('#radius').oninput = function(){
    //     state.radius = `${$('#radius').value}`
    //     state.size = `${$('#size').value + 1}`
    //         state.size = `${$('#size').value + 1}`
  

    //     // state.copy = 'copy';
    //     render(state);
    // }
    $('#blur').oninput = function(){
        state.blur = $('#blur').value
        // state.copy = 'copy';
        render(state);
    }
    $('#opacity').oninput = function(){
       state.opacity = `${$('#opacity').value}`
    //    state.copy = 'copy';
       render(state);
    }
    $('#color').oninput = function(){
        state.color =  $('#color').value
        // state.copy = 'copy';
        render(state);
    }
    // $('#backgroundColor').oninput = function(){
    //     state.color =  $('#backgroundColor').value
    //     $('main .display').style.background = $('#backgroundColor').value
    //     // state.copy = 'copy';
    //     render(state);
    // }




    // $('.copy').onclick = function(){
        // var clipboard = new ClipboardJS('.btn');
        // var bgColor = state.color + `${opacityConvert(state.opacity)}`;
        // state.copy = 'copied';
        // render(state);
        // let string = "background :"+bgColor+"; backdrop-filter : "+state.blur+"; border: 1px solid rgba(255, 255, 255, 0.125);"
        // navigator.clipboard.writeText(string);
    // }
    
