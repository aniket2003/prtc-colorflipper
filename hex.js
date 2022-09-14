

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click",function(){

    let final_hex = '#';
    let rand_num = Math.floor(Math.random()*6) +10;
    final_hex+=hex[rand_num];

    for(let i=0;i<5;i++){

        let rand_num = Math.floor(Math.random()*9);
        final_hex +=  hex[rand_num];

    }

    color.textContent = final_hex;
    document.body.style.backgroundColor = final_hex;

});




