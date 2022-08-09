
// let formBtn = document.querySelector('#login-btn');
// let loginForm = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



// formBtn.addEventListener('click', () =>{
//     loginForm.classList.add('active');
// });

// formClose.addEventListener('click', () =>{
//     loginForm.classList.remove('active');
// });
// function login(){
//     alert("login thành công")
// }
function ktralogin(){
    function home(){
        location.assign("index.html")
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
 else{
   home();
   alert("Đăng nhập thành công. Mời bạn sử dụng dịch vụ của chúng tôi")
}
}
function login(){
    location.assign("dangnhap.html")
}
