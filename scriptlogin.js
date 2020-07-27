function login(){
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(userName == 'abcd' && password == '1234'){
        document.getElementById('enter').innerHTML=window.location = "welcome.html";
    }
    if(userName!= 'abcd') {
        document.getElementById('message1').innerHTML='Wrong username';
    }
    if(password != '1234'){
        document.getElementById('message2').innerHTML='Wrong password';
    }
}