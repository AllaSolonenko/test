
function changeImg() { 
  
  var img = document.getElementById("logo"); 
  if (img.src === "images/IL_makiage.png") {    
    img.src = "images/google_logo.svg";
  } else  {
    img.src = "../images/IL_makiage.png";
  }
  
 
}
