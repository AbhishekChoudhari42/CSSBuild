
    $ = (element) => {

        var generated = document.querySelector(element);
        return generated

    }
    var state = {
        opacity:50,
        blur:'blur(10px)',
        color:'#111111',
        copy : 'copy',
        size : '200' ,
        radius : '10'

    }
    function opacityConvert(op)
    {
        let percentage = op/100;
        let number = Math.round(percentage*255) ;
        return number.toString(16) || 11;
    }

function render(state){
        $('.glass').style.backdropFilter = state.blur;
        var bgColor = state.color + `${opacityConvert(state.opacity)}`;
        $('.glass').style.background = bgColor;

        $('.css').innerHTML = ` background : ${ bgColor}; <br> backdrop-filter : ${state.blur}; <br> border: 1px solid rgba(255, 255, 255, 0.125);`
        // $('.code').style.background = state.copy == 'copy'? '#23f' : '#115'; 
        // $('.code').innerHTML = state.copy;
        // $('.glass').style.borderRadius = state.radius + "px";
        
        let maxWidth = $('.display').clientWidth;
        let maxHeight = $('.display').clientHeight;

        let width = state.size > maxWidth - 20 ? maxWidth - 20 : state.size
        $('.glass').style.width = width + "px";
        
        let height = state.size > maxHeight - 20 ? maxHeight - 20 : state.size
        $('.glass').style.height = height + "px";


 

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
        state.blur = `blur(${$('#blur').value}px)`
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




    // $('.copy').onclick = function(){
        // var clipboard = new ClipboardJS('.btn');
        // var bgColor = state.color + `${opacityConvert(state.opacity)}`;
        // state.copy = 'copied';
        // render(state);
        // let string = "background :"+bgColor+"; backdrop-filter : "+state.blur+"; border: 1px solid rgba(255, 255, 255, 0.125);"
        // navigator.clipboard.writeText(string);
    // }
    
