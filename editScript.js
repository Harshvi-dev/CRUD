$(document).ready(function(){
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('=') + 1);
    console.log(id)
    const user = JSON.parse(localStorage.getItem('user')) ?  JSON.parse(localStorage.getItem('user')) : [] ;
    console.log(user[id])
    console.log(user[id].name);
    $('#name').val(user[id].name);
    $('#email').val(user[id].email);
    $('#AppointmentTime').val(user[id].atime)
    // console.log(user[id].payment)
    if(user[id].payment == "paytm"){
        $('#paytm').attr('checked',true)
    }
    else if(user[id].payment == "gpay"){
        $('#Gpay').attr('checked',true)
    }else{
        $('#otherpayment').attr('checked',true)
    }
    $('#age').val(user[id].age)
    document.getElementById('counter').innerHTML = user[id].age;
    $('#phone').val(user[id].phone)
    document.getElementById('photoLable').innerHTML=user[id].photo
    var hobby = user[id].hobby;
    // console.log(hobby)
    for (let i = 0; i < hobby.length; i++) {
         if(hobby[i] == "travel"){
            $('#traveling').prop('checked',true);
            console.log(hobby[i]);
         }
         else if(hobby[i] == "read"){
            $("#reading").prop('checked',true);
         }
         else{
            $("#dance").prop('checked',true);
         }        
    }
    $('#password').val(user[id].pass)
    $('#color').val(user[id].favColor)
    //onclick
    $('#edit').click(function(){
        alert("data will get edit");
        var pass = $('#password').val();
        var name = $('#name').val()
        var color = $("#color").val()
        var email = $('#email').val();
        var aTime = $('#AppointmentTime').val();
        if($(`#paytm`).prop('checked') == true){
            var payment = "paytm";
            console.log(payment)
        }
        else if($(`#Gpay`).prop('checked') == true){
            var payment = "gpay";
            console.log(payment)
        }
        else if($(`#otherpayment`).prop('checked') == true){
            var payment = "other";
            console.log(payment)
        }
        else{
            var payment = " ";
        }
        var phone = $('#phone').val();        
        var age = $('#age').val();
        var arra = [];
        if($("#dance").prop('checked') == true){
            var dance = "dance"
            arra.push(dance);
        }
        if($("#reading").prop('checked') == true){
            var read= "read"
            arra.push(read)
            // console.log(arra);
        }
        if($("#traveling").prop('checked') == true){
            var travel = "travel"
            arra.push(travel)
        }
        var photo = $('#photo').val();
        // alert("photo",photo)
        if (photo == " ") {
            photo = user[id].photo
        }
        
        console.log(name,email,aTime,payment,phone,age,arra,photo,color,pass);
        // alert("edit");
        storeValue(name,email,aTime,payment,phone,age,arra,photo,color,id,user,pass);
    })
})
function storeValue(name,email,aTime,payment,phone,age,arra,photo,color,id,user,pass) {
    // alert("in storeValue")
    var newUser = user[id]
    newUser.name = name;
    newUser.email = email;
    newUser.aTime = aTime;
    newUser.payment = payment;
    newUser.phone=phone;
    newUser.age=age;
    newUser.arra=arra;
    newUser.photo=photo;
    newUser.color=color;
    newUser.pass=pass;
    user[id]=newUser;
    // alert("after newUser")
    console.log(user);
    // alert("wait");
    var local = JSON.stringify(user)
    localStorage.setItem('user',local)
}
