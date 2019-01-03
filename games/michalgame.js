var canvas = $("#plocha");
var startovac = 0;
var timer = document.getElementById('timer');
var watch = new Stopwatch(timer);
var c = canvas[0].getContext("2d");
var img = new Image();
img.src = 'img/michalgame/kufor.jpg';
img.onload = function() {
    c.drawImage(this, 250, 0);
};
var img1 = new Image();
img1.src='img/michalgame/mydlo-cierne.png';
img1.onload = function() {
    c.drawImage(this, 500, 370);
};

var img2 = new Image();
img2.src='img/michalgame/ciapka-cierna.png';
img2.onload = function() {
    c.drawImage(this, 500, 470);
};

var img3 = new Image();
img3.src='img/michalgame/kefka-cierna.png';
img3.onload = function() {
    c.drawImage(this, 500, 570);
};

var img4 = new Image();
img4.src='img/michalgame/compas-cierny.png';
img4.onload = function() {
    c.drawImage(this, 620, 370);
};

var img5 = new Image();
img5.src='img/michalgame/plavky-cierne.png';
img5.onload = function() {
    c.drawImage(this, 670, 540);
};

var img6 = new Image();
img6.src='img/michalgame/olej-cierne.png';
img6.onload = function() {
    c.drawImage(this, 750, 400);
};
var img7 = new Image();
img7.src='img/michalgame/mikina-cierne.png';
img7.onload = function() {
    c.drawImage(this, 830, 370);
};
var img8 = new Image();
img8.src='img/michalgame/slapky-cierne.png';
img8.onload = function() {
    c.drawImage(this, 830, 470);
};

var images2 = [];
var image1 = new DragImage('img/michalgame/mydlo.png',10,50 );
var image2 = new DragImage('img/michalgame/ciapka.png', 1250, 250);
var image3 = new DragImage('img/michalgame/kefka.png', 10, 220);
var image4 = new DragImage('img/michalgame/Compass.png', 100, 450);
var image5 = new DragImage('img/michalgame/plavky.png', 1200, 10);
var image6 = new DragImage('img/michalgame/olej.png', 1300, 400);
var image7 = new DragImage('img/michalgame/mikina.png', 1250, 550);
var image8 = new DragImage('img/michalgame/slapky.png', 10, 520);
var images = [image1,image2,image3,image4,image5,image6,image7,image8];
console.log(images2);
console.log(images);
function findImage(x,y){                                            //najdi ktory obrazok si klikol
    for (i = 0;i < images2.length ; i++){
        if (images[i].x < x && (images[i].x+images2[i].width) > x
            && images[i].y < y && (images[i].y+images2[i].height) > y){
            return i;
        }
    }

}
var completed = [false,false,false,false,false,false,false,false];  //Kraj na spravnom mieste ked true
function checkPosition(number,x,y){
    switch (number) {
        case 0:
            if (!completed[0]) {                                    //ak BA kraj este nie je na spravnom mieste
                if (500 < x && (500 + images2[0].width) > x
                    && 370 < y && (370 + images2[0].height) > y) {  //skontroluj suradnice pustenia
                    console.log('Picture Number 0');
                    images[0].x = 500;
                    images[0].y = 370;                              //presun na spravne miesto
                    completed[0] = true;                            //uz je na svojom mieste
                    console.log(completed);
                } else {                                            //ak bol pusteni mimo suradnic
                    images[0].x = 10;
                    images[0].y = 50;                               //vrat na povodne miesto
                }
            } else {
                images[0].x = 500;
                images[0].y = 370;
            }
            break;
        case 1:
            if (!completed[1]) {
                if (500 < x && (500 + images2[1].width) > x
                    && 470 < y && (470 + images2[1].height) > y) {
                    console.log('Picture Number 1');
                    images[1].x = 500;
                    images[1].y = 470;
                    completed[1] = true;
                } else {
                    images[1].x = 1250;
                    images[1].y = 250;
                }
            } else {
                images[1].x = 500;
                images[1].y = 470;
            }
            break;
        case 2:
            if (!completed[2]) {
                if (500 < x && (500 + images2[2].width) > x
                    && 570 < y && (570 + images2[2].height) > y) {
                    console.log('Picture Number 2');
                    images[2].x = 500;
                    images[2].y = 570;
                    completed[2] = true;
                } else {
                    images[2].x = 10;
                    images[2].y = 220;
                }
            } else {
                images[2].x = 500;
                images[2].y = 570;
            }
            break;
        case 3:
            if (!completed[3]) {
                if (620 < x && (620 + images2[3].width) > x
                    && 370 < y && (370 + images2[3].height) > y) {
                    console.log('Picture Number 3');
                    images[3].x = 620;
                    images[3].y = 370;
                    completed[3] = true;
                } else {
                    images[3].x = 100;
                    images[3].y = 450;
                }
            } else {
                images[3].x = 620;
                images[3].y = 370;
            }
            break;
        case 4:
            if (!completed[4]) {
                if (670 < x && (670 + images2[4].width) > x
                    && 540 < y && (540 + images2[4].height) > y) {
                    console.log('Picture Number 4');
                    images[4].x = 670;
                    images[4].y = 540;
                    completed[4] = true;
                } else {
                    images[4].x = 1200;
                    images[4].y = 10;
                }
            } else {
                images[4].x = 670;
                images[4].y = 540;
            }
            break;
        case 5:
            if (!completed[5]) {
                if (750 < x && (750 + images2[5].width) > x
                    && 400 < y && (400 + images2[5].height) > y) {
                    console.log('Picture Number 5');
                    images[5].x = 750;
                    images[5].y = 400;
                    completed[5] = true;
                } else {
                    images[5].x = 1300;
                    images[5].y = 400;
                }
            } else {
                images[5].x = 750;
                images[5].y = 400;
            }
            break;
        case 6:
            if (!completed[6]) {
                if (830 < x && (830 + images2[6].width) > x
                    && 370 < y && (370 + images2[6].height) > y) {
                    console.log('Picture Number 6');
                    images[6].x = 830;
                    images[6].y = 370;
                    completed[6] = true;
                } else {
                    images[6].x = 1250;
                    images[6].y = 550;
                }
            } else {
                images[6].x = 830;
                images[6].y = 370;
            }
            break;
        case 7:
            if (!completed[7]) {
                if (830 < x && (830 + images2[7].width) > x
                    && 470 < y && (470 + images2[7].height) > y) {
                    console.log('Picture Number 7');
                    images[7].x = 830;
                    images[7].y = 470;
                    completed[7] = true;
                } else {
                    images[7].x = 10;
                    images[7].y = 520;
                }
            } else {
                images[7].x = 830;
                images[7].y = 470;
            }
            break;
    }
}
function allCompleted(){
    for (i = 0; i < completed.length;i++){
        if (!completed[i]){
            return false;
        }
    }
    return true;
}

    var loop = setInterval(function() {
        c.fillStyle = "azure";
        c.fillRect(0, 0, 1500, 700);
        c.drawImage(img, 250, 0);
        c.drawImage(img1,500,370);
        c.drawImage(img2,500,470);
        c.drawImage(img3,500,570);
        c.drawImage(img4,620,370);
        c.drawImage(img5,670, 540);
        c.drawImage(img6,750, 400);
        c.drawImage(img7,830, 370);
        c.drawImage(img8,830, 470);
        if (allCompleted()){
            stop();
            var myLayer = document.createElement('div');
            myLayer.id = 'bookingLayer';
            myLayer.style.position = 'absolute';
            myLayer.style.left = '750px';
            myLayer.style.top = '300px';
            myLayer.style.width = '400px';
            myLayer.style.height = '100px';
            myLayer.style.fontSize = "xx-large";
            myLayer.style.fontWeight = "900";
            myLayer.style.textAlign = "center";
            myLayer.style.color = 'black';
            myLayer.style.borderRadius = '20px';
            myLayer.innerHTML = 'Úspešne naplnený kufor, cestovateľ sa môže vydať na cestu!';
            document.body.appendChild(myLayer);
            clearInterval(loop);
            clearTimeout(t);
        }
        for (i = 0; i < images.length ; i++){
            images[i].update();
        }
    }, 30);


var mouseX = 0,
    mouseY = 0;
var mousePressed = false;
var dragging = false;
var clickedImgNumber = -1;
canvas.mousemove(function(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
})
$(document).mousedown(function(e) {

    mousePressed = true;
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    console.log('MouseX: ' + mouseX + ' MouseY: ' + mouseY);
    clickedImgNumber = findImage(mouseX,mouseY);
    console.log(clickedImgNumber);
}).mouseup(function(e) {

    mousePressed = false;
    dragging = false;
    console.log(dragging);
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    console.log('MouseX: ' + mouseX + ' MouseY: ' + mouseY);
    if (clickedImgNumber >= 0){                                           //ak bol kliknuti nejaky obrazok
        checkPosition(clickedImgNumber,mouseX,mouseY);                     //skontroluj ci bol pusteni na spravne miesto
    }
});
function DragImage(src, x, y) {                                 //draggable obrazok

    var that = this;
    var startX = 0,
        startY = 0;
    var drag = false;
    this.x = x;
    this.y = y;
    var img = new Image();
    img.src = src;
    images2.push(img);

    this.update = function() {
        if (mousePressed) {

            var left = that.x;
            var right = that.x + img.width;
            var top = that.y;
            var bottom = that.y + img.height;
            if (!drag) {
                startX = mouseX - that.x;
                startY = mouseY - that.y;
            }
            if (mouseX < right && mouseX > left && mouseY < bottom && mouseY > top) {
                if (!dragging){
                    dragging = true;
                    drag = true;
                    console.log(dragging);
                }
            }
        } else {
            drag = false;
        }
        if (drag) {
            that.x = mouseX - startX;
            that.y = mouseY - startY;
        }
        c.drawImage(img, that.x, that.y);
    }
}

function start() {
    watch.start();
}

function stop() {
    watch.stop();
}
/*if(startovac === 0){
    start();
    startovac = 10;
}*/
function tutorial(){
    var modal= document.getElementById('modal');
    modal.style.display="block";
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
