//Array
var y = [1,2,3,4,5,6];

console.log(y);
console.log(typeof y);
console.log([3]);

//Kendi objeni oluşturma
var person = {
    name:"Rifat",
    surname:"Duru",
    age:29

}
console.log(person);
console.log(person.name);
console.log(typeof person);

//Date objesi
var date = new Date();
console.log(date);
console.log(typeof date);

//Functions
var selamVer = new function(){
    console.log("Merhaba");
}
console.log(selamVer);
console.log(typeof selamVer);

//İlkel değer atama ve objeler ile veri atamanın farkları

var a = 5;
var b = a;

console.log(b);
console.log(a,b);


var ata = [1,2,3];
var c = ata;
console.log(c);

c.push(6);
console.log(ata);
