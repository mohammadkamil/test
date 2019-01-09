// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.


(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.getElementById("back").addEventListener("click", back);
    document.getElementById("forgotbtn").addEventListener("click", forgotbtn);
  

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);


        //myDB.transaction(function (transaction) {
        //    transaction.executeSql('CREATE TABLE IF NOT EXISTS userinfo (userinfo_ID integer primary key,user_ID text, userType text, email text, password text, pelapor_IC text, pelapor_nama text, alamat text, gambar text, kaum text, agama text)', [],
        //        function (tx, result) {
        //            console.log("berjaya");
        //        },
        //        function (error) {
        //        });
        //});
        //myDB.transaction(function (transaction) {
        //    var executeQuery = "INSERT INTO userinfo (user_ID, userType, email, password, pelapor_IC, pelapor_nama, alamat, gambar, kaum, agama) VALUES (?,?,?,?,?,?,?,?,?,?)";
        //                transaction.executeSql(executeQuery, [myObj[0].userInfo.user_ID, myObj[0].userInfo.userType, myObj[0].userInfo.email, myObj[0].userInfo.password, myObj[0].userInfo.user_IC, myObj[0].userInfo.nama, myObj[0].userInfo.alamat, myObj[0].userInfo.gambar, myObj[0].userInfo.kaum, myObj[0].userInfo.agama]
        //                    , function (tx, result) {
        //                        alert('Inserted');
        //                    },
        //                    function (error) {
        //                        alert('Error occurred');
        //                    });
        //            });
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

    };
    function back() {
        location.href = "login.html";
    }; function forgotbtn() {
        if ($("#email").val() != "") {
            var email;
            email = $("#email").val();
          
            var email2 = email.substr(0, 2).toUpperCase();
            var username, email1;
            email1 = email.toUpperCase();
            var paramLogin;
            if (validateEmail(email)) {
                paramLogin = "email=" + email +"&mode=forgotPassword" ;
            } else {
                if (email2 == "PA") {

                    username = email1.split('PA');
                    paramLogin = "email=" + email1 + "&mode=forgotPassword";
                } else if (email2 == "LZ") {
                    username = email1.split('LZ');
                    paramLogin = "email=" + email1 + "&mode=forgotPassword" ;
                } else {
                    paramLogin = "email=" + email + "&mode=forgotPassword" ;

                }
            }

            //alert(paramLogin);
            //if (validateEmail(email)) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.open("POST", "http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php", false);
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    var myObj = JSON.parse(xmlhttp.responseText);
                    if (myObj.length != 0) {
                        if (myObj[0].status == "success") {
                            $("#semakpassword").show();
                            $("#username").html("Email : " + myObj[0].user_login.email);
                            $("#password").html("Password : " + myObj[0].user_login.password);

                        }
                    }
                    else {
                        alert("Email tidak di daftar.");
                    }
                } else {
                    alert("Email salah");
                }
            };
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(paramLogin);
            //} else if (Number.isInteger(parseInt(email))) {

            //    $.ajax({
            //        type: 'post',	//Request method: GET, POST  
            //        data: {
            //            mode:"checkPA0rLZNK",
            //            email: email,
            //            password: password,
            //        },
            //        url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //        //What data you want to send
            //        success: function (data) {
            //            if (data == "") {
            //                var test = password.substr(0, 2);
            //                if (test == "pa" || test == "PA") {
            //                    getamil(email, password);

            //                } else {

            //                }
            //            } else {

            //            }
            //            //Here you will receive data from server
            //            //Do what you want to do with data                         
            //            console.log(data)	 //This is a example, like we want to print the result
            //        }, error: function (error) {
            //            alert("Server down");
            //        }
            //    });
            //}

        } else {
            alert("Sila isi email.");
        }

        //$.ajax({
        //    type: 'post',	//Request method: GET, POST  

        //    data: {
        //        email: $("#email").val(),
        //        password: $("#password").val()
        //    },
        //    async :false,
        //    url: 'http://www.smartapp.name.my/Jejak%20Asnaf/login.php',  //Where to send the data
        //    //What data you want to send
        //    success: function (data) {

        //        var myObj = JSON.parse(data);
        //        if (myObj[0].status = "success") {
        //            ADDDATA();


        //            alert("Berjaya daftar Masuk");
        //            location.href = "pelapor/reportAsnaf.html";
        //        } else {
        //            alert("Email/Password salah");
        //        }
        //        //Here you will receive data from server
        //        //Do what you want to do with data                         
        //        console.log(data)	 //This is a example, like we want to print the result
        //    }
        //});
    }
   function xmltostring(data) {
        data = data.split('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">');
        data = data[1].split('</string>');
        return data[0];
    }
    function validateEmail(email) {
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

        return re.test(email);
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };
    function onBackKeyDown() {
        return false;
    };
    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

})();