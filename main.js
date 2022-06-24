const form = document.getElementById('form'),
email = document.getElementById('email'),
username = document.getElementById('username'),
password = document.getElementById('password'),
password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});
function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setErrorfor(username, 'Tên đăng nhập ko chính xác');
    }else {
        setSuccessfor(username);
    }

    if(emailValue === ''){
        setErrorfor(email, 'Email ko chính xác');
    }else if(!isMail(emailValue)) {
        setErrorfor(email, 'Email ko chính xác');
    }else{
        setSuccessfor(email)
    }

    if(passwordValue === ''){
        setErrorfor(password, 'Mật khẩu ko chính xác');
    }else{
        setSuccessfor(password);
    }

    if(password2Value === ''){
        setErrorfor(password2, 'Nhập lại mật khẩu ko chính xác');
    }else if (passwordValue !== password2Value){
        setErrorfor(password2, 'Nhập lại mật khẩu ko chính xác');
    }else{
        setSuccessfor(password2);
    }
}
function setErrorfor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}
function setSuccessfor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isMail (email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}