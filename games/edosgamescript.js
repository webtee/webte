var canvas = $("#c");
var c = canvas[0].getContext("2d");

var img = new Image();
img.src = 'img/edosgame/SK2.png';
img.onload = function() {
    c.drawImage(this, 260, 0);
};

var images2 = [];
var image1 = new DragImage('img/edosgame/BA.png', 10, 50);
var image2 = new DragImage('img/edosgame/TN.png', 1250, 250);
var image3 = new DragImage('img/edosgame/NT.png', 10, 220);
var image4 = new DragImage('img/edosgame/TT.png', 400, 480);
var image5 = new DragImage('img/edosgame/ZA.png', 1200, 10);
var image6 = new DragImage('img/edosgame/BB.png', 650, 480);
var image7 = new DragImage('img/edosgame/PO.png', 1000, 490);
var image8 = new DragImage('img/edosgame/KE.png', 10, 520);

var images = [image1,image2,image3,image4,image5,image6,image7,image8];

var begincoords = [
    [10,50],
    [1250, 250],
    [10, 220],
    [400, 480],
    [1200, 10],
    [650, 480],
    [1000, 490],
    [10, 520]
];
var coords = [
    [277,250],
    [297,197],
    [408,240],
    [363,97],
    [524,35],
    [538,193],
    [761,75],
    [807,177]
];

function findImage(x,y){
    for (i = 0;i < images2.length ; i++){
        if (images[i].x < x && (images[i].x+images2[i].width) > x
            && images[i].y < y && (images[i].y+images2[i].height) > y){
            return i;
        }
    }
}

var completed = [false,false,false,false,false,false,false,false];
function checkPosition(number,x,y){
    if (!completed[number]){
        if (coords[number][0]-10 < x && (coords[number][0]+10 + images2[number].width) > x
            && coords[number][1]-10 < y && (coords[number][1]+10 + images2[number].height) > y){
            console.log('Picture Number ' + number);
            images[number].x = coords[number][0];
            images[number].y = coords[number][1];
            completed[number] = true;
        }else{
            images[number].x = begincoords[number][0];
            images[number].y = begincoords[number][1];
        }
    }else{
        images[number].x = coords[number][0];
        images[number].y = coords[number][1];
    }
}

function animationLoop (num) {
    setTimeout(function () {
        if (images[num].x < coords[num][0] && images[num].y < coords[num][1]) {
            images[num].x++;
            images[num].y++;
            animationLoop(num);
        }else if (images[num].x > coords[num][0] && images[num].y < coords[num][1]) {
            images[num].x--;
            images[num].y++;
            animationLoop(num);
        }else if (images[num].x > coords[num][0] && images[num].y > coords[num][1]) {
            images[num].x--;
            images[num].y--;
            animationLoop(num);
        }else if (images[num].x < coords[num][0] && images[num].y > coords[num][1]) {
            images[num].x++;
            images[num].y--;
            animationLoop(num);
        }else if (images[num].x > coords[num][0] && images[num].y == coords[num][1]) {
            images[num].x--;
            animationLoop(num);
        }else if (images[num].x < coords[num][0] && images[num].y == coords[num][1]) {
            images[num].x++;
            animationLoop(num);
        }else if (images[num].x == coords[num][0] && images[num].y > coords[num][1]) {
            images[num].y--;
            animationLoop(num);
        }else if (images[num].x == coords[num][0] && images[num].y < coords[num][1]) {
            images[num].y--;
            animationLoop(num);
        }
    }, 1)
}

function animateGame() {
    for (i = 0; i < 8 ; i++){
        animationLoop(i);
    }
    clearTimeout(t);
    setTimeout(function () {
        document.getElementById('restarterButton').style.visibility = "visible";
        document.getElementById('animationButton').style.visibility = "hidden";
    },6000);
}

function allCompleted(){
    for (i = 0; i < completed.length;i++){
        if (!completed[i]){
            return false;
        }
    }
    return true;
}

function startGame(){
    document.getElementById('starterButton').style.visibility = "hidden";
    document.getElementById('animationButton').style.visibility = "visible";
    document.getElementById('stopwatch').style.visibility = "visible";
    var loop = setInterval(function() {
        c.fillStyle = "azure";
        c.fillRect(0, 0, 1500, 700);
        c.drawImage(img, 260, 0);
        if (allCompleted()){
            var myLayer = document.createElement('button');
            myLayer.id = 'endGameText';
            myLayer.innerHTML = 'Gratulujem! <br>Úspešne si poskladaj krajinu po ktorej sa cestovateľ vyberie.';
            document.getElementById('restarterButton').style.visibility = "visible";
            document.getElementById('animationButton').style.visibility = "hidden";
            document.body.appendChild(myLayer);
            clearInterval(loop);
            clearTimeout(t);
        }
        for (i = 0; i < images.length ; i++){
            images[i].update();
        }
    }, 30);
}

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
    clickedImgNumber = findImage(mouseX,mouseY);
}).mouseup(function(e) {
    mousePressed = false;
    dragging = false;
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    if (clickedImgNumber >= 0){
        checkPosition(clickedImgNumber,mouseX,mouseY);
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

var h1 = document.getElementsByTagName('h1')[0],
    seconds = 0, minutes = 0, hours = 0,
    t;
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}