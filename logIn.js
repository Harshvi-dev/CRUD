$(document).ready(function(){
    $('#logIn').click(function(){
        var count =0;
        var email = $('#email').val();
        var pass = $('#password').val();
        const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
        console.log(user.length)
        for (let i = 0; i < user.length; i++) {
            if(user[i].email == email && user[i].pass == pass){
                count = count+1;
            }
        }
        if (count == 1) {
            window.location.replace('list.html')
        }
        else{
            alert("enter correct email and password")
        }
    })
})