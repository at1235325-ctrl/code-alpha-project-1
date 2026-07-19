const images=document.querySelectorAll(".gallery img");
const lightbox=document.querySelector(".lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const close=document.querySelector(".close");

let current=0;

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

current=index;

showImage();

});

});

function showImage(){

lightbox.style.display="flex";
lightboxImg.src=images[current].src;

}

close.onclick=()=>{

lightbox.style.display="none";

}

document.getElementById("next").onclick=()=>{

current++;

if(current>=images.length){

current=0;

}

showImage();

}

document.getElementById("prev").onclick=()=>{

current--;

if(current<0){

current=images.length-1;

}

showImage();

}

const buttons=document.querySelectorAll(".buttons button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

let filter=button.dataset.filter;

document.querySelectorAll(".image").forEach(image=>{

if(filter==="all"){

image.style.display="block";

}

else{

image.classList.contains(filter)

?image.style.display="block"

:image.style.display="none";

}

});

});

});