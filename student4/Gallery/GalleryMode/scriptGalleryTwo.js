//Change Background Colour
function changeColour() {
    let b = document.getElementById("select");
    let text = b.options[b.selectedIndex].value;
    document.getElementById("container-image").style.backgroundColor = text;
}

//Change Font Colour
function changeFont() {
    let d = document.getElementById("selectFont");
    let txt = d.options[d.selectedIndex].value;
    document.getElementById("caption").style.color = txt;
}


var result = document.getElementById("zoomBtn");
    
    var currentText = 20;
    
    function bigFont() {
     ++currentText;
     result.style.fontSize = currentText + 'px';
    }
    
    function smallFont() {
     --currentText;
     result.style.fontSize = currentText + 'px';
    }
    
    //menu button for scales <700px
    
    document.querySelector(".menuBtn").addEventListener
     ("click",()=> document.querySelector(".main-menu").classList.toggle("show"));
    
           //back to top button
           var topbutton = document.getElementById("topbtn");
    
    function backtopFunction(){
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
    }


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


function getSelectedValue(selectList) {
    return selectList[selectList.selectedtabIndex].value;
}

