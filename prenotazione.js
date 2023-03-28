
var prenota = document.getElementById('prenota');

var nm = document.getElementById('nm');

var cg = document.getElementById('cg');

var eta = document.getElementById('eta');

var data = document.getElementById('dt');

var divPren = document.getElementById('divPren');


prenota.addEventListener("click",function(){

  
    if((nm.value!='')&&(cg.value!='')&&(eta.value!='')&&(eta.value>=18)&&(data.value!='')){
        
        prenota.style.backgroundColor="green";
        prenota.value="Prenotato";
        divPren.style.borderColor="green";
    }

    

    if(nm.value=='') {
        alert("Devi inserire un nome");
    }

    if(cg.value=='') {
        alert("Devi inserire un cognome");
    }
  
    if(eta.value=='') {
        alert("Devi inserire un'età");
    }

    if(eta.value<18) {
        alert("Devi essere maggiorenne per prenotare");
    }

    if(data.value=='') {
        alert("Devi inserire una data");
    }
})






