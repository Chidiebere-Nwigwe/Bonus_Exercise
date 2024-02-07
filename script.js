let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");

// onload, image should be displayed
window.onload = function (){
let img = document.createElement("img");
img.setAttribute("src","bonusimage1.avif");
img.setAttribute("id","image");
document.body.appendChild(img);
}

/// function for onclick of next button
nextButton.addEventListener("click", () =>{
    let image = document.getElementById("image");
    let imgarr = [ "bonusimage1.avif" , "bonusimage2.avif" , "bonusimage3.avif" ];
    let value = image.src;

 if(value ==  "http://127.0.0.1:5500/bonusimage1.avif"){
    image.src =  imgarr[1];
 }
 if(value ==  "http://127.0.0.1:5500/bonusimage2.avif"){
    image.src =  imgarr[2];
 }
 if(value ==  "http://127.0.0.1:5500/bonusimage3.avif"){
    image.src =  imgarr[0];
 } 
})

/// function for onclick of previous button
previousButton.addEventListener("click", () =>{
    let image = document.getElementById("image");
    let imgarr = [ "bonusimage1.avif" , "bonusimage2.avif" , "bonusimage3.avif" ];
    let value = image.src;

 if(value ==  "http://127.0.0.1:5500/bonusimage3.avif"){
    image.src =  imgarr[1];
 }
 if(value ==  "http://127.0.0.1:5500/bonusimage2.avif"){
    image.src =  imgarr[0];
 }
 if(value ==  "http://127.0.0.1:5500/bonusimage1.avif"){
    image.src =  imgarr[2];
 }
})