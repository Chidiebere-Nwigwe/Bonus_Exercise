let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");

// onload, image should be displayed
window.onload = function (){
let img = document.createElement("img");
img.setAttribute("src","https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
img.setAttribute("id","image");
document.body.appendChild(img);
}

/// function for onclick of next button
nextButton.addEventListener("click", () =>{
    let image = document.getElementById("image");
    let imgarr = 
     [ 
      "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
      "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
      "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     ];
    let value = image.src;

 if(value ==  imgarr[0]){
    image.setAttribute("src",imgarr[1]);

 }
 if(value ==  imgarr[1]){
    image.src = imgarr[2];c
 }
 if(value ==  imgarr[2]){
    image.src = imgarr[0];
 } 
})

/// function for onclick of previous button
previousButton.addEventListener("click", () =>{
    let image = document.getElementById("image");
    let imgarr = 
     [ 
      "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
      "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
      "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     ];
    let value = image.src;

 if(value ==  imgarr[2]){
    image.src =  imgarr[1];
 }
 if(value ==  imgarr[1]){
    image.src = imgarr[0];
 }
 if(value ==  imgarr[0]){
    image.src =  imgarr[2];
 }
})