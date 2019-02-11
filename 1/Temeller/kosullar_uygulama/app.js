function login (){

    var email = document.getElementById("email").value;
    var sifre = document.getElementById("sifre").value;
    
    if (email == "rifatduru@outlook.com" && sifre == "123456" ) {
        
        document.getElementById("yaz").innerHTML = "Giriş Başarılı";
    
    }else{
        document.getElementById("yaz").innerHTML = "Hatalı Giriş";
        }
}

