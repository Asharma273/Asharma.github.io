window.addEventListener("load", () => {
document.querySelector(".loader").classList.add("loader-hidden");
document.querySelector(".loading_word").classList.add("loader-hidden");
}) 



let profile = document.querySelector(".profile_main");
console.log(profile);
if(window.matchMedia) {
const query = window.matchMedia('prefers-color-scheme: dark');
}

let counter = 0;
let about = document.querySelector(".About_sec")
let currbgImage = document.getElementById("main1").style.backgroundImage;
let currbgcolor = document.getElementById("main1").style.backgroundColor;
let bgmain = document.getElementById("main1");
let html_image = document.querySelector(".html_image");
let html_cont = document.querySelector(".html_cont");
console.log(html_image);

profile.addEventListener("click", ()=> {
    console.log("clicked");
    bgmain.style.backgroundImage = currbgImage;
    bgmain.style.transitionDuration = "1.5s";
    bgmain.style.transitionTimingFunction = "linear";
   
})
about.addEventListener("click", ()=> {
    console.log("clicked");
    bgmain.style.backgroundImage = currbgImage;
    bgmain.style.transitionDuration = "1.5s";
    bgmain.style.transitionTimingFunction = "linear";
   
})
    
// Color change of the icons on page one 
html_image.addEventListener("mouseover", () => {
    html_cont.classList.add("reveal");

})
html_image.addEventListener("mouseover", () => {
    bgmain.style.backgroundImage = "none";
    bgmain.style.backgroundColor = "rgb(255, 136, 100)";
    bgmain.style.transitionDuration = "1.5s";
    bgmain.style.transitionTimingFunction = "linear";
    
})

html_image.addEventListener("mouseout", () => {

html_cont.classList.remove("reveal");
 })

 let css_image = document.querySelector(".css_image");
 let css_cont = document.querySelector(".css_cont");
 css_image.addEventListener("mouseover", () => {
      css_cont.classList.add("reveal");

})
  css_image.addEventListener("mouseover", ()=>{

    bgmain.style.backgroundImage = "none";
    bgmain.style.backgroundColor = "rgb(97, 130, 251)";
    bgmain.style.transitionDuration = "1.5s";
    bgmain.style.transitionTimingFunction = "linear";


  })  
    css_image.addEventListener("mouseout", () => {
        
        css_cont.classList.remove("reveal");
     })
  
  let jss_image = document.querySelector(".jss_image");   
 let jss_content = document.querySelector(".jss_cont");
 jss_image.addEventListener("mouseover", () => {
  
    jss_content.classList.add("reveal");
     })
    jss_image.addEventListener("mouseover", ()=>{
        bgmain.style.backgroundImage = "none";
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            bgmain.style.backgroundColor = "rgb(243, 212, 74)";
        } 
else {
        bgmain.style.backgroundColor = "rgb(255, 237, 156)";
}
        bgmain.style.transitionDuration = "1.5s";
        bgmain.style.transitionTimingFunction = "linear";
     

    })
    jss_image.addEventListener("mouseout",()=> {
        jss_content.classList.remove("reveal");
    })
     let java_image = document.querySelector(".java_image");
 let java_cont = document.querySelector(".java_cont");
 java_image.addEventListener("mouseover", () => {

    java_cont.classList.add("reveal");
     })

     java_image.addEventListener("mouseover",()=> {
        bgmain.style.backgroundImage = "none";
        

    bgmain.style.backgroundColor = "rgb(124, 189, 255)";
    bgmain.style.transitionDuration = "1.5s";
    bgmain.style.transitionTimingFunction = "linear";
   
     })

    java_image.addEventListener("mouseout", () => {
        java_cont.classList.remove("reveal");
     })
let c_image = document.querySelector(".c_image");
 let c_cont = document.querySelector(".C_cont");
 
 c_image.addEventListener("mouseover", () => {  
    c_cont.classList.add("reveal");
     })
    c_image.addEventListener("mouseover",()=> {
        bgmain.style.backgroundImage = "none";
        bgmain.style.backgroundColor = "rgb(145, 180, 255)";
        bgmain.style.transitionDuration = "1.5s";
        bgmain.style.transitionTimingFunction = "linear";
     
    }) 
    c_image.addEventListener("mouseout", () => {
        c_cont.classList.remove("reveal");
     })

let sql_image = document.querySelector (".sql_image");
let sql_cont = document.querySelector(".sql_cont");

sql_image.addEventListener("mouseover", () => {
    sql_cont.classList.add("reveal");
     })
    sql_image.addEventListener("mouseover",()=>{
        bgmain.style.backgroundImage = "none";
        bgmain.style.backgroundColor = "rgb(255, 171, 87)";
        bgmain.style.transitionDuration = "1.5s";
        bgmain.style.transitionTimingFunction = "linear";
        
    } )

    sql_image.addEventListener("mouseout", () => {
        sql_cont.classList.remove("reveal");

    })

    let python_image = document.querySelector(".python_image");
    let python_cont = document.querySelector(".python_cont");

    python_image.addEventListener("mouseover", () => {
        python_cont.classList.add("reveal");
         })
      
         python_image.addEventListener("mouseover",()=>{
            bgmain.style.backgroundImage = "none";
            bgmain.style.backgroundColor = "rgb(212, 132, 255)";
            bgmain.style.transitionDuration = "1.5s";
            bgmain.style.transitionTimingFunction = "linear";
            
        } )
    
        python_image.addEventListener("mouseout", () => {
            python_cont.classList.remove("reveal");
    
        })
       
       
    