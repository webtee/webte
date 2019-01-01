var canvas = $("#myCanvas");
var c = canvas[0].getContext("2d");
var imageObj = new Image();
        
imageObj.src = 'img/eriksgame/Obrazek11.png'
c.fillStyle = "white";
c.fillRect(0, 0, 1200, 800);
imageObj.onload = function() {
    c.drawImage(this,600,120);
};
        var obrazky2 = [];
        var image1 = new DragImage('img/eriksgame/Obrazek2.png', 10, 10);
        var image2 = new DragImage('img/eriksgame/Obrazek1.png', 190, 80);
        var image3 = new DragImage('img/eriksgame/Obrazek3.png', 60, 270);
        var image4 = new DragImage('img/eriksgame/Obrazek4.png', 60, 320);
        var image5 = new DragImage('img/eriksgame/Obrazek5.png', 140, 400);
        var image6 = new DragImage('img/eriksgame/Obrazek6.png', 60, 400);
        var image7 = new DragImage('img/eriksgame/Obrazek7.png', 210, 400);
        var image8 = new DragImage('img/eriksgame/Obrazek8.png', 25, 600);
        var image9 = new DragImage('img/eriksgame/Obrazek9.png', 140, 630);
        var image10 = new DragImage('img/eriksgame/Obrazek10.png', 100, 700);
        //var image11 = new DragImage('Obrazek11.png', 300, 200);
        
        var obrazky = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10];
         function findImage(x,y){
            for (i = 0;i < obrazky2.length ; i++){
                if (obrazky[i].x < x && (obrazky[i].x+obrazky2[i].width) > x
                    && obrazky[i].y < y && (obrazky[i].y+obrazky2[i].height) > y){
                    return i;
                }
            }
        }
        var konec = 0;
        function checkPosition(number,x,y){
            switch (number) {
                case 0:
                if(konec == 10){
                    obrazky[0].x = 740;
                    obrazky[0].y = 219;
                }else{
                    if (745 < x && (766+obrazky2[0].width) > x
                        && 200 < y && (235+obrazky2[0].height) > y){
                        console.log('Picture Number 0');

                        obrazky[0].x = 740;
                        obrazky[0].y = 219;
                        konec++;
                        console.log("konec je " + konec);
                    }else{
                        obrazky[0].x = 10;
                        obrazky[0].y = 10;
                    }
                }
                    break;

                case 1:
                if(konec == 10){
                    obrazky[1].x = 756;
                        obrazky[1].y = 128;
                }else{
                    if (740 < x && (770+obrazky2[1].width) > x
                        && 110 < y && (140+obrazky2[1].height) > y){
                        console.log('Picture Number 1');
                        obrazky[1].x = 756;
                        obrazky[1].y = 128;
                        konec++;
                        console.log("konec je " + konec);
                    }else{
                        obrazky[1].x = 190;
                        obrazky[1].y = 80;
                    }}
                    break;
                case 2:
                if(konec == 10){
                    obrazky[2].x = 622;
                        obrazky[2].y = 258;
                }else{
                    if (610< x && (630+obrazky2[2].width) > x
                        && 245 < y && (270+obrazky2[2].height) > y){
                        console.log('Picture Number 2');
                        obrazky[2].x = 622;
                        obrazky[2].y = 258;
                        konec++;
                        console.log("konec je " + konec);
                    }else{
                        obrazky[2].x = 60;
                        obrazky[2].y = 270;
                    }}
                    break;
                case 3:
                if(konec == 10){
                    obrazky[3].x = 848;
                        obrazky[3].y = 256;
                }else{
                    if (832 < x && (860+obrazky2[3].width) > x
                        && 245 < y && (265+obrazky2[3].height) > y){
                        console.log('Picture Number 3');
                        obrazky[3].x = 848;
                        obrazky[3].y = 256;
                        konec++;
                        console.log("konec je " + konec);
                    }else{
                        obrazky[3].x = 60;
                        obrazky[3].y = 320;
                    }}
                    break;
                case 4:
                if(konec == 10){
                    obrazky[4].x = 741;
                        obrazky[4].y = 435;
                }else{
                    if (730 < x && (755+obrazky2[4].width) > x
                        && 420 < y && (445+obrazky2[4].height) > y){
                        console.log('Picture Number 4');
                        obrazky[4].x = 741;
                        obrazky[4].y = 435;
                        konec++;
                        console.log("konec je " + konec);
                    }else{
                        obrazky[4].x = 140;
                        obrazky[4].y = 400;
                    }}
                    break;
                case 5:
                if(konec == 10){
                    obrazky[5].x = 833;
                        obrazky[5].y = 446;
                }else{
                    if (823 < x && (843+obrazky2[5].width) > x
                        && 430 < y && (463+obrazky2[5].height) > y){
                        console.log('Picture Number 5');
                        obrazky[5].x = 833;
                        obrazky[5].y = 446;
                        konec++;
                        console.log("konec je " + konec);
                    }else{
                        obrazky[5].x = 60;
                        obrazky[5].y = 400;
                    }}
                    break;
                case 6:
                if(konec == 10){
                    obrazky[6].x = 978;
                        obrazky[6].y = 209;
                }else{
                    if (962 < x && (990+obrazky2[6].width) > x
                        && 198 < y && (220+obrazky2[6].height) > y){
                        console.log('Picture Number 6');
                        obrazky[6].x = 978;
                        obrazky[6].y = 209;
                        konec++;
                        console.log("konec je " + konec);
                    }else{
                        obrazky[6].x = 210;
                        obrazky[6].y = 400;
                    }}
                    break;
                case 7:
                if(konec == 10){
                    obrazky[7].x = 604;
                        obrazky[7].y = 208;
                }else{
                    if (590 < x && (615+obrazky2[7].width) > x
                        && 199 < y && (220+obrazky2[7].height) > y){
                        console.log('Picture Number 7');
                        obrazky[7].x = 604;
                        obrazky[7].y = 208;
                        konec++;
                        console.log("konec je " + konec);
                    }else{
                        obrazky[7].x = 25;
                        obrazky[7].y = 600;
                    }}
                    break;
                case 8:
                if(konec == 10){
                    obrazky[8].x = 693;
                        obrazky[8].y = 613;
                }else{
                    if (680 < x && (705+obrazky2[6].width) > x
                        && 600 < y && (630+obrazky2[6].height) > y){
                        console.log('Picture Number 8');
                        obrazky[8].x = 693;
                        obrazky[8].y = 613;
                        konec++;
                        console.log("konec je " + konec);
                    }else{
                        obrazky[8].x = 140;
                        obrazky[8].y = 630;
                    }}
                    break;
                case 9:
                if(konec == 10){
                    obrazky[9].x = 857;
                        obrazky[9].y = 626;
                }else{
                    if (845 < x && (870+obrazky2[6].width) > x
                        && 615 < y && (636+obrazky2[6].height) > y){
                        console.log('Picture Number 9');
                        obrazky[9].x = 857;
                        obrazky[9].y = 626;
                        konec++;
                        console.log("konec je " + konec);
                    }else{
                        obrazky[9].x = 100;
                        obrazky[9].y = 700;
                    }}
                    break;
            }    
        }

        function allCompleted(){

            if(konec == 10){
                console.log(konec);
                return true;
            } else {
                console.log("aossoidjaj");
                return false;
            }
        }

        function startGame(){
            var button = document.getElementById('starterButton');
            var button2 = document.getElementById('refresh');
            button.style.visibility = "hidden";
            button2.style.visibility = "hidden";
            var loop = setInterval(function() {
                c.fillStyle = "white";
                c.fillRect(0, 0, 1200, 800);
                c.drawImage(imageObj,600,120);
                image9.update();
                image10.update();
                image3.update();
                image4.update();
                image5.update();
                image6.update();
                image1.update();
                image2.update();
                image7.update();
                image8.update();
                if (allCompleted()){
                    var myLayer = document.createElement('div');
                    myLayer.id = 'bookingLayer';
                    myLayer.style.position = 'absolute';
                    myLayer.style.left = '540px';
                    myLayer.style.top = '400px';
                    myLayer.style.width = '300px';
                    myLayer.style.height = '130px';
                    myLayer.style.fontSize = "xx-large";
                    myLayer.style.fontWeight = "500";
                    myLayer.style.textAlign = "center";
                    myLayer.style.background = 'green';
                    myLayer.style.color = 'white';
                    myLayer.style.borderRadius = '8px';
                    myLayer.innerHTML = 'Gratulujem poskladal si cestovatela';
                    //button.style.visibility = "visible";
                    button2.style.visibility = "visible";
                    document.body.appendChild(myLayer);
                    clearInterval(loop);
                    clearTimeout(t);
                }
                
            }, 30);
        }

        var mouseX = 0,
            mouseY = 0;
        var mousePressed = false;
        var dragging = false;

        canvas.mousemove(function(e) {
            mouseX = e.offsetX;
            mouseY = e.offsetY;
            //console.log('X: ' + mouseX + ' Y: ' + mouseY);
        })
        var number = -1;
        $(document).mousedown(function(e) {
            mousePressed = true;
            mouseX = e.offsetX;
            mouseY = e.offsetY;
            console.log('MouseX: ' + mouseX + ' MouseY: ' + mouseY);
            number = findImage(mouseX,mouseY);
            console.log("cislo obrazka"+number);
        }).mouseup(function(e) {
            mousePressed = false;
            dragging = false;
            console.log(dragging);
            //TODO
            mouseX = e.offsetX;
            mouseY = e.offsetY;
            console.log('MouseX: ' + mouseX + ' MouseY: ' + mouseY);
            if (number >= 0){
               checkPosition(number,mouseX,mouseY);
            }
        });

        function DragImage(src, x, y) {
            var that = this;
            var startX = 0,
                startY = 0;
            var drag = false;
            this.x = x;
            this.y = y;
            var img = new Image();
            img.src = src;
            obrazky2.push(img);
            this.update = function() {
                if (mousePressed ) {
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

