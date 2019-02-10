

function degistir(){
    return document.getElementById("container").innerHTML = document.getElementById("liste").value;

}

// Event Uygulama Fonksiyonları
    var result = document.getElementById("result");
    var sayi1 = document.getElementById("sayi1");
    var sayi2 = document.getElementById("sayi2");


function topla(){
    result.innerHTML = parseInt(sayi1.value) + parseInt(sayi2.value);
}

function cikar(){
    result.innerHTML = parseInt(sayi1.value) - parseInt(sayi2.value);

}

function carp(){
    result.innerHTML = parseInt(sayi1.value) * parseInt(sayi2.value);
}

function bol(){
    result.innerHTML = parseInt(sayi1.value) / parseInt(sayi2.value);
}