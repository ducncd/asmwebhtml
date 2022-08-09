function kiemtra() {
    
   
    var email = document.getElementById("email");

    let count = 0;

    function dieu_huong(){
        location.assign("dangnhap.html")
    }
    //check username
    var hoten = document.getElementById("hoten");
    if (hoten.value.length == 0 ) {
        alert("Họ tên không được để trống !");
        return;
    }
    //check passsword
    var pass = document.getElementById("pass");
        if ( pass.value.length == 0){
        alert("Mật khẩu không được để trống")
        return;
        }
        if(pass.value.length <6 ){
            alert("Mật khẩu không được dưới 6 kí tự nhen")
            return;
        }
    //check email
    var checkEmail = /^\w{3,}@\w{2,}(\.[a-zA-Z]{2,3}){1,2}$/;
    // \w : bất kì kí tự chữ nào
        
        var email = document.getElementById("Email");
        if (email.value == "") {
            alert("Email hông được bỏ trống.");
            return;
        }
       
        if (!checkEmail.test(email.value)) {
            alert("Email không đúng định dạng cha ơi.");;
            return ;
        }
    else{
        dieu_huong();
    }
}
function home(){
    location.assign("index.html")
}



        
    