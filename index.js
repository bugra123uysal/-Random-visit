/* rasgele ülke harf seçme */

function rstharf(){

    var alfabe = "abcçdefghijklmnopqrstuvwxyz";
    var ülkelerlst=["amerika,almanya,arnavutluk","belçika,brezilya , brundi","","çek cumhuriyeti,çekoslovakya,çin,","danimarka","estonya","fransa,","gana,","hindistan, ","israil,iran,ingiltere,ispanya,","jameika,","kanada,","Liechtenstein","maceristan,","","","","yeni zelanda","",""]
   var rsdur=  Math.floor(Math.random()*alfabe.length)
  var mm= document.getElementById("rhar").innerHTML=alfabe[rsdur];
  var hh=document.getElementById("country").innerHTML=ülkelerlst[rsdur];

  document.getElementById("ülk").innerHTML=mm +" "+" harfi ile ilgili ülkeler"+" "+hh ;
}

/* haritadan rasgele seçmek */
function see(){

            
}
