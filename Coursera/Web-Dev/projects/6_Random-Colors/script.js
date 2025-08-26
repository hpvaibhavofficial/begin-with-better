const hex = '0123456789ABCDEF'

const randomColor = function(){
    let color = '#'
    for(let i=0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let interval;
function startChangingColor(){
    if(!interval){
   interval =  setInterval(() => {document.body.style.backgroundColor = randomColor();},900);
}
}

function stopChangingColor(){
    clearInterval(interval)
    interval = null
}



document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
