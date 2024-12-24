window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader-hidden");
    document.querySelector(".loading_word").classList.add("loader-hidden");
    })

let loadword = document.querySelector(".loading_word");  
console.log(loadword);

window.addEventListener("scroll", reveal);

function reveal()
{
 let reveals = document.querySelectorAll(".reveals");
 console.log(reveals);

 for (let i =0; i < reveals.length; i++) {
    console.log(reveals[i]);

let winheight = window.innerHeight;
let revealTop = reveals[i].getBoundingClientRect().top;
var revealPoint =180;

if (revealTop < winheight - revealPoint) {
    reveals[i].classList.add("activereveal");
}
else  
reveals[i].classList.remove("activereveal");
 
} 

}







