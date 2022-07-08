let array = [4]

function randomColor(){
    return Math.round(Math.random()*255)
}
function color(){
    let r = randomColor().toString(16)
    let g = randomColor().toString(16)
    let b = randomColor().toString(16)

    let color = `#${r}${g}${b}`

    return color
}
function generatePalette( ){
    document.querySelectorAll('.palette-color').forEach(item =>{

        let colorval = color()
        item.style.background = colorval;
        item.innerHTML = `<div class='rotate-text'>${colorval}</div>`;
        array.push(colorval)
        
        })
}
generatePalette()
document.querySelector('#generate').onclick = function(){

    array = []
    generatePalette();


}





