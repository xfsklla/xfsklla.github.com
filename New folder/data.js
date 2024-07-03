const nama = "fisikella julian lera"; 
let usia = 21;

let biodata = document.getElementById('biodata');

function generatebiodata() {
    let generasi;

    if(usia > 10 && usia < 18 ) {   
      generasi = "cantik biasa";
    } 
    else if (usia > 18 && usia < 30) {
        generasi = "cantik masyaallah 🌷";
    } 
    else if(usia >= 30) {
        generasi = "suka marah";
    }
    else if (usia > 10 && usia < 2) {
        generasi = "suka marah banget";
    }
    else {
         generasi = "generasi bayi";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generatebiodata();