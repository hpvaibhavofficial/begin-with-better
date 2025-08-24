const clock = document.querySelector('#clock')
setInterval(function(){
    const t = new Date();
    clock.innerHTML = t.toLocaleTimeString();
},1000);