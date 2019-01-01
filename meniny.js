var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var year = today.getFullYear();

function findMonth(number){
    switch (number) {
        case 1:
            return "Január";
        case 2:
            return "Február";
        case 3:
            return "Marec";
        case 4:
            return "Apríl";
        case 5:
            return "Máj";
        case 6:
            return "Jún";
        case 7:
            return "Júl";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "Október";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Not a month";
    }
}

var countryimg = [];
var imgSK = document.createElement("img");
imgSK.src = "img/namesday/skflag.png";
imgSK.alt = "SK flag";
var imgCZ = document.createElement("img");
imgCZ.src = "img/namesday/czflag.jpg";
var imgHU = document.createElement("img");
imgHU.src = "img/namesday/huflag.png";
var imgPL = document.createElement("img");
imgPL.src = "img/namesday/plflag.png";
var imgAT = document.createElement("img");
imgAT.src = "img/namesday/atflag.png";
countryimg.push(imgSK);
countryimg.push(imgCZ);
countryimg.push(imgHU);
countryimg.push(imgPL);
countryimg.push(imgAT);

for (var i = 0; i< countryimg.length; i++){
    countryimg[i].style.height = '10px';
    countryimg[i].style.width = '15px';
}

function myelement(d,sk,cz,hu,pl,at,hol) {
    this.day = d;
    this.skname = sk;
    this.czname = cz;
    this.huname = hu;
    this.plname = pl;
    this.atname = at;
    this.atname = at;
    this.holidays = hol;
}

var date;
$(document).ready(function(){
    $("#namesday" ).append(dd + ". " + findMonth(mm) +" "+ year + " ");
    var src = document.getElementById("namesday");
    src.appendChild(imgSK);
    $.ajax({
        type: "GET" ,
        url: "meniny.xml" ,
        dataType: "xml" ,
        success: function(xml) {
            var zaznam = $(xml).find('zaznam');
            $(xml).find(zaznam).each(function(){
                var SKname =$(this).find('SK').text();
                var CZname =$(this).find('CZ').text();
                var HUname =$(this).find('HU').text();
                var PLname =$(this).find('PL').text();
                var ATname =$(this).find('AT').text();
                var day = $(this).find('den').text(),
                    SKdays= $(this).find('SKsviatky').text();
                if ((day == (mm+ "" +dd)) || (day == ("0" + mm+ "0" +dd))){
                    date = new myelement(day,SKname,CZname,
                        HUname,PLname,ATname,SKdays);
                    if (SKname === "" && SKdays != ""){
                        $("#namesday" ).append(" | " + SKdays);
                    }else if(SKname != "" && SKdays != ""){
                        $("#namesday" ).append(" | Meniny má " + date.skname + ", " + SKdays);
                    }else{
                        $("#namesday" ).append(' | Meniny má ' + date.skname);
                    }
                }
            });
        }
    });
});

function findName() {
    var result = document.getElementById("namesdate2").value;
    var splited = result.split(".");
    var str2 = splited[0];
    var str3 = splited[1];
    if (str2.length < 2){
        str2  = "0" + str2;
    }
    if (str3.length < 2){
        str3  = "0" + str3;
    }
    if (str2.length > 2 || str3.length > 2){
        alert("Neplatný dátum");
    }
    if (Number(str2) > 31 || Number(str3) > 12){
        alert("Neplatný dátum");
    }
    var finaldate = str3.concat(str2);

    $.ajax({
        type: "GET" ,
        url: "meniny.xml" ,
        dataType: "xml" ,
        success: function(xml) {
            var zaznam = $(xml).find('zaznam');
            $(xml).find(zaznam).each(function(){
                var SKname =$(this).find('SK').text();
                var CZname =$(this).find('CZ').text();
                var HUname =$(this).find('HU').text();
                var PLname =$(this).find('PL').text();
                var ATname =$(this).find('AT').text();
                var day = $(this).find('den').text(),
                    SKdays= $(this).find('SKsviatky').text();
                if (day == finaldate){
                    if (SKname === ""){
                        $("#namesdayresult").text("Meniny neoslavuje nikto: " + SKdays);
                        console.log("DONE");
                    }else{
                        $("#namesdayresult").text("Meniny oslavuje : " + SKname);
                        console.log("DONE");
                    }}
            });
        }
    });
}

var withdiacritic = "áäčďéěíĺľňóô öŕšťúů üýřžÁÄČĎÉĚÍĹĽŇÓÔ ÖŔŠŤÚŮ ÜÝŘŽ";
var woutdiacritic = "aacdeeillnoo orstuu uyrzAACDEEILLNOO ORSTUU UYRZ";

function translateDiacritice(word){
    var tx = "";
    for(p = 0; p < word.length; p++)
    {
        if (withdiacritic.indexOf(word.charAt(p)) != -1)
        {
            tx += woutdiacritic.charAt(withdiacritic.indexOf(word.charAt(p)));
            word = word.replace(word.charAt(p), tx);
            tx = "";
        }
    }
    return word;
}

function createDate(day){
    var str1 = day.substr(0,2);
    var str2 = day.substr(2,2);
    return str2 + "." + str1 + ".";
}

function findDate(){
    var name = document.getElementById("namesdate3").value;
    console.log(name);
    if (name.length == 0){
        alert("Zadaj meno aby sa zobrazil dátum menín.");
    }else{
        if ( $("#namesdayresult").text().length > 0 ){
            $("#namesdayresult").text("");
        }
        $.ajax({
            type: "GET" ,
            url: "meniny.xml" ,
            dataType: "xml" ,
            success: function(xml) {
                var zaznam = $(xml).find('zaznam');
                $(xml).find(zaznam).each(function(){
                    var SKname =$(this).find('SK').text();
                    var CZname =$(this).find('CZ').text();
                    var HUname =$(this).find('HU').text();
                    var PLname =$(this).find('PL').text();
                    var ATname =$(this).find('AT').text();
                    var day = $(this).find('den').text(),
                        SKdays= $(this).find('SKsviatky').text();
                    var splited = SKname.split(", ");
                    if (splited.length > 1){
                        console.log('More thann 1');
                        for (i = 0; i < splited.length;i++){
                            if (translateDiacritice(splited[i]).toLowerCase() == name ||
                                translateDiacritice(splited[i]) == name  ||
                                splited[i].toLowerCase() == name  ||
                                splited[i] == name){
                                $("#namesdayresult").append(SKname + " oslavuje meniny: " + createDate(day));
                            }
                        }
                    }
                    if (translateDiacritice(SKname).toLowerCase() == name ||
                        translateDiacritice(SKname) == name  ||
                        SKname.toLowerCase() == name  ||
                        SKname == name){
                        $("#namesdayresult").append(SKname + " oslavuje meniny: " + createDate(day));
                    }
                });
            }
        });
    }
}
