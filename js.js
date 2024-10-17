document.querySelector(".text-animation h1").innerHTML = document.querySelector(".text-animation h1").textContent.replace(/./g, '<span>$&</span>');

let span = document.querySelectorAll(".text-animation h1 span");
for(let i=0;i<span.length;i++){
    spans[i].style.animationDelay = (i*250)+"ms";
}