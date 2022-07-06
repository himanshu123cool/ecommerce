// more-option-script 
$('#more').click(function () {
    $('.right-wrapper-container').toggle()
})

$(window).scroll(function () {
    $('.right-wrapper-container').hide()
})







//sidebar-script 
$(document).ready(function () {
    $('.hamburger-icon').click(function () {
        $('.hamburger-icon').css('visibility', 'hidden')
        $('.sidebar').show(400)
    })
})

$('.close-icon').click(function () {
    $('.hamburger-icon').css('visibility', 'visible')
    $('.sidebar').hide(400)
})






// login-form-script 
setTimeout(function () {
    $('#login-section').css('display', 'flex')
}, 2000)

$('.sign-in').click(function(){
    $('#login-section').css('display', 'flex')
})

$('.login-icon').click(function () {
    $('#login-section').hide()
})

$('.create-acc').click(function () {
    $('.login-container').css('display', 'none')
    $('.signup-container').css('display', 'grid')
})

$('.existing-acc').click(function () {
    $('.login-container').css('display', 'grid')
    $('.signup-container').css('display', 'none')
})


function loginData() {
    let _email = document.getElementById('email').value;
    let _password = document.getElementById('password').value;

    if ((_password >= 8 || _password !== '') && (_email !== '' && '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')) {

        let user_records = new Array();
        user_records =JSON.parse(localStorage.getItem('users')) ?JSON.parse(localStorage.getItem('users')) : [];

        if (user_records.some((v) => { return (v.email == _email && v.password == _password) })) {
            let current_user = user_records.filter((v) => { return (v.email == _email && v.password == _password) })[0]
            localStorage.setItem('name', current_user.name);
            localStorage.setItem('email', current_user.email);

            $('.login-container').css('display', 'none');
            $('.signup-container').css('display', 'none');
            $('.welcome-container').css('display', 'flex')
            $('#account span').html('Logout');
            $('.welcome-text').html('Login Successfull');
            $('.welcome-heading').html('Welcome Back!!');
            $('.welcome-character').html(localStorage.getItem('name'));
            $('.user-id p').html(localStorage.getItem('name'));
            $('#start-btn').click(function(){
                $('#login-section').css('display' , 'none');
            })
            $('.login-icon').hide();
        }
        else {
           alert('Incorrect Data login again')
           $('#login-section').css('display', 'flex');
        }
    }
    else {
        alert('Data Not Found Please Fill the Form')
    }
}










// signup-form script  

function saveData() {
    let _name = document.getElementById('sign-name').value;
    let _email = document.getElementById('sign-email').value;
    let _password = document.getElementById('sign-password').value;

    if ((_name !== '' || _name>=3 || _name<=25) && (_password >= 8 || _password !== '')  && (_email !== '' && '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')) {
        $('.login-container').css('display', 'none');
        $('.signup-container').css('display', 'none');
        $('.welcome-container').css('display', 'flex');
        $('#account span').html('Logout');
        $('.welcome-text').html('Account Create Successfully');
        $('.welcome-character').html(_name)
        $('.user-id p').html(_name)
        $('#start-btn').click(function(){
            $('#login-section').css('display' , 'none')
        })
        $('.login-icon').hide();
        
        
        let user_records = new Array();
        user_records =JSON.parse(localStorage.getItem('users')) ?JSON.parse(localStorage.getItem('users')) : [];

        if (user_records.some((v) => { return (v.name == _name && v.email == _email && v.password == _password) })) {
            alert('Already Data has found')
        }
        else {
            user_records.push({
                "name": _name,
                "email": _email,
                "password": _password
            })
            localStorage.setItem('users', JSON.stringify(user_records));
        }
    }
    else {
        alert('Fill the Form')
    }
}




//--------------- logout-script---------------- 

if($('#account span').text()=='Sign Up'){

    $('#account span , .logout').click(function(){

        localStorage.removeItem('name');
        localStorage.removeItem('email');
    
        $('#login-section').css('display', 'flex');
        $('.login-container').css('display', 'grid');
        $('.form-row-box input').val(null);
        $('.welcome-container').css('display' , 'none');
        $('#account span').html('Sign Up');
        $('.user-id p').html('User Name');
        $('.login-icon').show();
    })
}
else{
    $('#login-section').css('display', 'flex');
}








// profile-photo-script 

const _imgDiv = document.querySelector('.user-img-box');
const userImg = document.querySelector('.user-img');
const file = document.querySelector('#file');

file.addEventListener('change' , function(){
    const chooseImg = this.files[0];
    
    if(chooseImg){
        const reader = new FileReader();

        reader.addEventListener('load' , function(){
            userImg.setAttribute('src', reader.result);
        })

        reader.readAsDataURL(chooseImg);
    }
})






// password hide-show-script 

$('.password-show-btn').click(function(){
    $('#password, #sign-password').attr('type', 'text');
    $('.password-hide-btn').css('display', 'block');
    $('.password-show-btn').css('display', 'none');
})

$('.password-hide-btn').click(function(){
    $('#password, #sign-password').attr('type', 'password');
    $('.password-hide-btn').css('display', 'none');
    $('.password-show-btn').css('display', 'block');
})





// filter-section-script 
$('.product-filter-btn').click(function(){
    const value = $(this).attr('data-filter');
    if(value=='ALL'){
        $('.product-box').show('500');
    }
    else{
        $('.product-box').not('.' + value).hide('500');
        $('.product-box').filter('.' + value).show('500');
    }
})



// filter-btn-sctipt 

$(".product-filter-btn").click(function () {
    if ($(this).hasClass("active")) {
      $(".product-filter-btn").removeClass("active");
    }
    else {
      $(".product-filter-btn").removeClass("active");
      $(this).addClass("active");
    }
  });



