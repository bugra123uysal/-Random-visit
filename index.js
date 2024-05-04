/* rasgele ülke harf seçme (rasgele ülke seç) */

function rstharf(){

    var alfabe = "abcçdefghijklmnopqrstuvwxyz";
    var ülkelerlst=["amerika,almanya,arnavutluk,avusturya, avustralya","belçika,brezilya,brundi,","","çekya,çekoslovakya,çin,","danimarka","estonya","fransa,","gana,","hindistan,hollanda ","israil,iran,ingiltere,ispanya,","jameika,japonya","kanada,kıbrıs,","Liechtenstein","maceristan,","n","o","portekiz, panama,polonya","yeni zelanda,yunanistan,yugoslavya","",""]
   var rsdur=  Math.floor(Math.random()*alfabe.length)
  var mm= document.getElementById("rhar").innerHTML=alfabe[rsdur];
  var hh=document.getElementById("country").innerHTML=ülkelerlst[rsdur];


}

/* haritadan rasgele seçmek */
function see(){
  var yy=hrtt.height
  var xx=hrtt.width
  var hrtt=document.getElementById("hrtt");
  var y=Math.floor(Math.random()*yy);
  var x=Math.floor(Math.random()* xx);

  console.log(x+""+y)
            
}

/* rasgele  */

function ürs(){
  var rasgelebayreak=document.getElementById("rr");
 var flagrsgl=new Array()
 const nn=[Math.floor(Math.random()*10 )+1 ]

 flagrsgl[1]=document.getElementById("a").src;
 flagrsgl[2]=document.getElementById("b").src;
 flagrsgl[3]=document.getElementById("c").src;
 flagrsgl[4]=document.getElementById("d").src;
 flagrsgl[5]=document.getElementById("e").src;
 flagrsgl[6]=document.getElementById("f").src;
 flagrsgl[7]=document.getElementById("g").src;
 flagrsgl[8]=document.getElementById("ğ").src;
 flagrsgl[9]=document.getElementById("h").src;
 flagrsgl[10]=document.getElementById("ı").src;



  rasgelebayreak.src=flagrsgl[nn];
}
