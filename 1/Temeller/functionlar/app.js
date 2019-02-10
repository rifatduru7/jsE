/* var personel1 = 1980;
var personel2 = 1990;
var personel3 = 1987;

function hesapla (ad, dogumTarihi){

    console.log(ad + " Yaşınız :" + (2019-dogumTarihi));

}

hesapla("Rıfat",personel1);
hesapla("Mehmet",personel2);
hesapla("Derin",personel3);
 */

var ogrenci1 = 2005;
var ogrenci2 = 1980;
var ogrenci3 = 1990;

function ogrenciYas(ad,dTarihi) {
    console.log(ad + " Yaşı :" + (2019-dTarihi));
}
ogrenciYas("Ahmet",ogrenci1);
ogrenciYas("Ahmet",ogrenci2);
ogrenciYas("Ahmet",ogrenci3);


//Geri değer döndüren fonksiyonlar

var ogrenci1 = 2005;
var ogrenci2 = 1980;
var ogrenci3 = 1990;

function ogrenciYas(ad,dTarihi) {
   return ad + " Yaşı :" + (2019-dTarihi);
}
var pers1 = ogrenciYas("Ahmet",ogrenci1);
var pers2 = ogrenciYas("Mehmet",ogrenci2);
var pers3 = ogrenciYas("Selim", ogrenci3);

console.log(pers1);
console.log(pers2);
console.log(pers3);

//Fonksiyon uygulama

// C = (9/5) * F-32;

function fahHesapla(fahrenheith) {
   return (9/5)* (fahrenheith-32);
}

console.log(fahHesapla(75));
alert(fahHesapla(55));
document.write(fahHesapla(45));
