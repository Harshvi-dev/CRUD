$(document).ready(function(){
    // window.location("list.html")
    const saveusr = JSON.parse(localStorage.getItem('user')) ?  JSON.parse(localStorage.getItem('user')) : [] ;
      console.log(saveusr)
      printAll(saveusr);

    $('#submit').click(function () {

        console.log($("#color").val());
        var color = $("#color").val()
        console.log(" color ", color)
        var name = $('#name').val();
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
        var pass = $('#password').val();
        console.log(pass);
        // alert(name,email,aTime,payment,phone,age,arra,photo,saveusr,pass)
        // console.log(name,email,aTime,payment,phone,age,arra,photo,saveusr,pass);
        storeValue(name,email,aTime,payment,phone,age,arra,photo,color,saveusr,pass);
    });
});
function storeValue(name,email,aTime,payment,phone,age,arra,photo,color,saveusr,pass) {
                if(name == " ",email== " ",aTime== " ",payment== " ",phone== " ",age== 0,photo == " ",color == " ",arra.length == 0,pass==" "){
                    alert("fill the form correctly");   
                }else{
                    
                    const user = {
                        name :name,
                        email:email,
                        atime:aTime,
                        payment:payment,
                        phone:phone,
                        age:age,
                        hobby:arra,
                        photo:photo,
                        favColor:color,
                        pass:pass
                    }
                    // alert("hii");
                    saveusr.push(user);
                    console.log(user);
                    console.log(saveusr)
                    const userJSON = JSON.stringify(saveusr);
                    localStorage.setItem("user",userJSON);
                    printAll(saveusr);
                }    
}
function printAll(arra) {
    // console.log(document.getElementById("#showTable"))
    const ele = document.getElementById("tableData");
    if(ele) ele.innerHTML = "";

    // alert("hii");   
    for(var i=0;i<arra.length;i++){
    $('#tableData').append(`
        <tr>
            <td>${arra[i]['name']}</td>
            <td>${arra[i]['email']}</td>
            <td>${arra[i]['atime']}</td>
            <td>${arra[i]['payment']}</td>
            <td>${arra[i]['phone']}</td>
            <td>${arra[i]['age']}</td>
            <td>${arra[i]['hobby']}</td>
            <td>${arra[i]['photo']}</td>
            <td>${arra[i]['favColor']}</td>
            <td>${arra[i]['pass']}</td>
            <td><button type="button" id = "delete-${i}" onclick="deleteUser(${i})">delete</button></td>
            <td><button type="button" id = "edit-${i}" onclick = "getId(${i})">edit</button></td>
        </tr>
    `)
    
}    
}
function deleteUser(del) {
    // console.log(del);
    var localarr = localStorage.getItem('user');
    var arr = JSON.parse(localarr)
    arr.splice(del,1);
    // printAll(arr);
    localStorage.setItem('user',JSON.stringify(arr));
    console.log(arr);
    alert("record is delete")
    printAll(arr);
    
}
function getId(edt) {
    goUrl = `edit.html?id=${edt}`;
    window.location = goUrl;
    // alert("new page");
    console.log(goUrl);
}
