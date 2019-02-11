function sor() {
    gun = document.getElementById("gun").value;


    switch (gun) {
        case "1":
            document.getElementById("sonuc").innerHTML = "Pazartesi";
            break;
        case "2":
            document.getElementById("sonuc").innerHTML = "Salı";
            break;
        case "3":
            document.getElementById("sonuc").innerHTML = "Çarşamba";
            break;
        case "4":
            document.getElementById("sonuc").innerHTML = "Perşembe";
            break;
        case "5":
            document.getElementById("sonuc").innerHTML = "Cuma";
            break;
        case "6":
            document.getElementById("sonuc").innerHTML = "Cumartesi";
        case "7":
            document.getElementById("sonuc").innerHTML = "Pazar";
            break
        default:
            document.getElementById("sonuc").innerHTML = "Hatalı Giriş !!";
            break;
    }
}