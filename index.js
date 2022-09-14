const colors = ["cyan","magenta","rgba(133,122,200)","#f15025"];

const btn = document.getElementById('btn');

const color = document.querySelector(".color");


if(btn){

    btn.addEventListener("click",function(){

        //console.log("kya he bc ye!");

        const rand_num = Math.floor(Math.random()*4);
        document.body.style.backgroundColor = colors[rand_num];
        color.textContent = colors[rand_num];
    
    });



}


    

