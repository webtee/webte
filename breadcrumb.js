
//var users = new Array();

//users.push('Theo','Mark','Luke','John');

//localStorage.setItem('users', JSON.stringify(users));

var adresa= window.location.href;
var pole = [];
pole.push(adresa);
var local;
var pocitadlo = 1;
var i;
for(i =0 ; i < 5; i++){
    local = localStorage.getItem(i);

        if(local === null) {
            localStorage.setItem(i, adresa);
            break;
        }
    pocitadlo++;
}
if(pocitadlo === 6){
    localStorage.removeItem(0);
    local = localStorage.getItem(1);
    localStorage.setItem(0,local);

    local = localStorage.getItem(2);
    localStorage.setItem(1,local);

    local = localStorage.getItem(3);
    localStorage.setItem(2,local);

    local = localStorage.getItem(4);
    localStorage.setItem(3,local);

    localStorage.setItem(4,pole);
}

var ul = document.createElement('ul');
ul.id = 'breadcrumbs';
var menu = document.getElementById('broad');
for(i=0; i < pocitadlo;i++){
    local = localStorage.getItem(i);
    var li = document.createElement('li');
    li.classList.add('breadcrumbsli');
    var a = document.createElement('a');
    a.href = local;
    if(local === "http://147.175.98.102/~xmartinez/Zav_Final/index.html"){
        a.innerText = "Domov > ";
        console.log(a.innerHTML);
    }
    if(local === "http://147.175.98.102/~xmartinez/Zav_Final/news.html"){
        a.innerText = "Správy > ";
    }
    if(local === "http://147.175.98.102/~xmartinez/Zav_Final/edosgame.html"){
        a.innerText = "Hra číslo 1 > ";
    }
    if(local === "http://147.175.98.102/~xmartinez/Zav_Final/eriksgame.html"){
        a.innerText = "Hra číslo 2 > ";
    }
    if(local === "http://147.175.98.102/~xmartinez/Zav_Final/contacts.html"){
        a.innerText = "Kontakty > ";
    }
    if(local === "http://147.175.98.102/~xmartinez/Zav_Final/tasks.html"){
        a.innerText = "Rozdelenie úloh > ";
    }
    if(local === "http://147.175.98.102/~xmartinez/Zav_Final/michalgame.html"){
        a.innerText = "Hra číslo 3 > ";
    }
    li.appendChild(a);
    ul.appendChild(li);

}
menu.appendChild(ul);
