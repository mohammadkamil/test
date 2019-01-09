﻿
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.getElementById("back").addEventListener("click", back);
    document.getElementById("loginBtn").addEventListener("click", loginBtn);
    document.getElementById("forgotbtn").addEventListener("click", forgotbtn);
    document.getElementById("registerbtn").addEventListener("click", registerbtn);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
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
        location.href = "index.html";
    }; function forgotbtn() {
        location.href = "forgotPassword.html";
    }; function registerbtn() {
        location.href = "register.html";
    };
    function loginBtn() {
        if ($("#email").val() != "" || $("#password").val() != "") {
            var email, password;
            email = $("#email").val();
            password = $("#password").val();
            var email2 = email.substr(0, 2).toUpperCase();
            var username, email1;
            email1 = email.toUpperCase();
            var paramLogin;
            if (validateEmail(email)) {
                paramLogin = "email=" + email + "&password=" + password;
            } else {
                if (email2 == "PA") {

                    username = email1.split('PA');
                    paramLogin = "email=" + email1 + "&password=" + password;
                }
                else if (email2 == "LZ") {
                    username = email1.split('LZ');
                    paramLogin = "email=" + email1 + "&password=" + password;
                } else {
                    paramLogin = "email=" + email + "&password=" + password;

                }
            }
            //paramLogin = paramLogin + "&firebaseID=" + localStorage.getItem('registrationId');
            //alert(paramLogin);
            //if (validateEmail(email)) {
            if (!checkamil(email1) && email2 == "PA") {
                alert("IC tidak didaftar sebagai Penolong Amil");

            } else {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("POST", "http://www.smartapp.name.my/Jejak%20Asnaf/login.php", false);
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                        var myObj = JSON.parse(xmlhttp.responseText);
                        alert(xmlhttp.responseText);

                        if (myObj[0].status == "success") {
                            alert("Berjaya daftar Masuk");
                            if (myObj[0].userInfo.userType == 1) {
                                localStorage.setItem("login", 1);
                                localStorage.setItem("nama", myObj[0].userInfo.pelapor_nama);
                                localStorage.setItem("ic", myObj[0].userInfo.pelapor_IC);
                                localStorage.setItem("user_ID", myObj[0].userInfo.user_ID);
                                localStorage.setItem("userType", myObj[0].userInfo.userType);
                                localStorage.setItem("email", myObj[0].userInfo.email);
                                localStorage.setItem("password", myObj[0].userInfo.password);
                                //localStorage.setItem("alamat", myObj[0].userInfo.alamat);
                                //localStorage.setItem("gambar", myObj[0].userInfo.pelapor_gambar);
                                //localStorage.setItem("kaum", myObj[0].userInfo.pelapor_Kaum);
                                //localStorage.setItem("agama", myObj[0].userInfo.pelapor_agama);
                                localStorage.setItem("noTel", myObj[0].userInfo.noTel);
                                localStorage.setItem("nameorganisasi", myObj[0].userInfo.nameorganisasi);


                                location.href = "pelapor/reportAsnaf.html";
                            } else if (myObj[0].userInfo.userType == 2) {

                                localStorage.setItem("login", 1);
                                localStorage.setItem("nama", myObj[0].userInfo.pa_nama);
                                localStorage.setItem("ic", myObj[0].userInfo.pa_IC);
                                localStorage.setItem("pa_ID", myObj[0].userInfo.pa_ID);
                                localStorage.setItem("user_ID", myObj[0].userInfo.user_ID);
                                localStorage.setItem("userType", myObj[0].userInfo.userType);
                                localStorage.setItem("qareah_ID", myObj[0].userInfo.qareah_ID);

                                localStorage.setItem("email", myObj[0].userInfo.email);
                                localStorage.setItem("password", myObj[0].userInfo.password);
                                location.href = "penolongAmil/listReport.html";

                            } else {
                                localStorage.setItem("login", 1);
                                localStorage.setItem("daerah_ID", myObj[0].userInfo.daerah_ID);
                                localStorage.setItem("lznk_ID", myObj[0].userInfo.lznk_ID);
                                localStorage.setItem("email", myObj[0].userInfo.email);
                                localStorage.setItem("password", myObj[0].userInfo.password);
                                localStorage.setItem("user_ID", myObj[0].userInfo.user_ID);
                                localStorage.setItem("userType", 3);

                                location.href = "lznk/listReport.html";
                            }

                        } else if (myObj[0].status == "noaccount") {
                            if (validateEmail(email)) {
                                alert("Email/Password salah");
                            } else {

                                if (email2 == "pa" || email2 == "PA") {
                                    getamil(email1, password);
                                } else if (email2 == "lznk" || email2 == "LZNK") {

                                }
                            }
                            //else if (Number.isInteger(parseInt(email))) {
                            //    var test = password.substr(0, 2);
                            //    if (test == "pa" || test == "PA") {
                            //        getamil(email, password);

                            //    } else {

                            //    }


                            //}

                        } else {
                            alert("Password salah");
                        }
                    } else {
                        alert("Email/Password salah");
                    }
                };
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp.send(paramLogin);
            }

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
            alert("Sila isi email/password");
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
function validateEmail(email) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
}
function getamil(email, password) {
    var email1 = email.split("PA");
    $.ajax({
        type: 'post',	//Request method: GET, POST  
        dataType: "text",
        data: {
            id: 'MhKV92$nVM09!',
            branchcode: '',
            qaryahcode: '',
            //certno: password,
            certno: '',
            icno: email1[1],
            currentdate: ""
        },
        url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getAmilListing',  //Where to send the data
        //What data you want to send
        success: function (data) {
            var myObj = JSON.parse(xmltostring(data));
            if (myObj.length == 0) {
                alert('Penolong Amil tidak wujud');
            } else {
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                location.href = "updatePA.html";

            }

            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }, error: function (error) {
            alert("Server down");
        }
    });
} function checkamil(email) {
    var email1 = email.split("PA");
    var re;
    if (email1.length == 2) {
        var test = $.ajax({
            type: 'post',	//Request method: GET, POST  
            dataType: "text",
            data: {
                id: 'MhKV92$nVM09!',
                branchcode: '',
                qaryahcode: '',
                //certno: password,
                certno: '',
                icno: email1[1],
                currentdate: ""
            }, async: false,
            url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getAmilListing',  //Where to send the data
            //What data you want to send
            //success: function (data) {
            //    alert(999);
            //    //Here you will receive data from server
            //    //Do what you want to do with data                         
            //    console.log(data)	 //This is a example, like we want to print the result
            //}, error: function (error) {
            //    alert("Server down");
            //}
        });
        var myObj = JSON.parse(xmltostring(test.responseText));
        if (myObj.length == 0) {
            re = false;
        } else {

            re = true;
        }
    } else {
        re = false;
    }

    return re;
}
function xmltostring(data) {
    data = data.split('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">');
    data = data[1].split('</string>');
    return data[0];
}