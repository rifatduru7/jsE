var araba = {
    name : "Volvo",
    model: "v60",
    color: "Yeşil",
    weight: 1000,
    year: 2008,
    //Obje içinde fonksiyon oluşturma
    start: function () {
        alert("Araba Çalıştı")
    },
    drive: function(){
        alert("Araba Hareket Ediyor !!")
    },
    break: function(){
        alert("Araba Fren Yaptı")
    },
    stop: function(){
        alert("Araba Durdu!!")
    },
    getInfo: function(){
        console.log("Araba Adı : " + this.name);
        console.log("Modeli : " + this.model);
        console.log("Rengi : " + this.color);
        console.log("Ağırlığı: " + this.weight);
        
    },
    getYear: function(){
        return 2019 - this.year;
    }
}
//Özelliklere ulaşmak
console.log(araba);
console.log("Rengi :"+araba.color);
console.log(araba.model);
console.log("Ağırlığı :"+araba["weight"]);

//Özellikleri değiştirmek
araba.name = "Mercedes";
console.log(araba.name);
console.log(araba);
araba.weight = 2000;
console.log(araba.weight)


//Obje içinde fonksiyon kullanımı
araba.start();
araba.drive();
araba.break();
araba.stop();
alert("Aracın " + araba.getYear()+ " Yaşında");
araba.getInfo();
araba.getYear();