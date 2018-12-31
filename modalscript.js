
var fotky = JSON.parse(p);
var zoznam = document.getElementById("zoznam");
for (var i = 0; i < fotky.photos.length; i++) {
    var img = document.createElement("img");
    img.src = fotky.photos[i].src;
    img.alt = fotky.photos[i].title;
    img.id = "img"+i;
    img.className = "modalimg";
    zoznam.appendChild(img);
}

var number = 1;
var modal = document.getElementById('modal1');
var img1= document.getElementById('img0');
var img2= document.getElementById('img1');
var img3= document.getElementById('img2');
var img4= document.getElementById('img3');
var img5= document.getElementById('img4');
var img6= document.getElementById('img5');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var podrobnost = document.getElementById("podrobnosti");

img1.onclick = function(){
    number = 1;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent = this.alt;
    podrobnost.textContent=fotky.photos[number-1].description;
}
img2.onclick=function () {
    number=2;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent= this.alt;
    podrobnost.textContent=fotky.photos[number-1].description;
}

img3.onclick=function () {
    number=3;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent= this.alt;
    podrobnost.textContent=fotky.photos[number-1].description;
}
img4.onclick=function () {
    number=4;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent= this.alt;
    podrobnost.textContent=fotky.photos[number-1].description;
}
img5.onclick=function () {
    number=5;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent= this.alt;
    podrobnost.textContent=fotky.photos[number-1].description;
}
img6.onclick=function () {
    number=6;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent= this.alt;
    podrobnost.textContent=fotky.photos[number-1].description;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
    clearTimeout(myVar);
}

function plusSlides(n) {
    number += n;
    console.log(number);
    console.log(n);
    openPhoto(number);
}
function openPhoto(n) {
    console.log(n);
    if(n <1) {number =6;    console.log('Smaller than 1');
    }
    if(n > 6){number = 1;  console.log('Bigger than 6');}

    if(number==1){
        modalImg.src= fotky.photos[number-1].src;
        captionText.textContent=fotky.photos[number-1].title;
        podrobnost.textContent=fotky.photos[number-1].description;
    }
    if(number==2){
        modalImg.src= fotky.photos[number-1].src;
        captionText.textContent=fotky.photos[number-1].title;
        podrobnost.textContent=fotky.photos[number-1].description;
    }
    if(number==3){
        modalImg.src= fotky.photos[number-1].src;
        captionText.textContent=fotky.photos[number-1].title;
        podrobnost.textContent=fotky.photos[number-1].description;
    }
    if(number==4){
        modalImg.src= fotky.photos[number-1].src;
        captionText.textContent=fotky.photos[number-1].title;
        podrobnost.textContent=fotky.photos[number-1].description;
    }
    if(number==5){
        modalImg.src= fotky.photos[number-1].src;
        captionText.textContent=fotky.photos[number-1].title;
        podrobnost.textContent=fotky.photos[number-1].description;
    }
    if(number==6){
        modalImg.src= fotky.photos[number-1].src;
        captionText.textContent=fotky.photos[number-1].title;
        podrobnost.textContent=fotky.photos[number-1].description;
    }
}
