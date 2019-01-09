// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var paarray = [];

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.getElementById("btnsimpan").addEventListener("click", btnsimpan);


    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);
        var email = localStorage.getItem("email").split("PA");
        getamil(email[1]);
      
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
    function btnsimpan() {
        if ($("#password").val() === $("#passwordC").val()) {
            $.ajax({
                type: 'post',	
                data: {
                    mode:'checkPA0rLZNK',
                    pa_nama: paarray[0].amilinfo.name,
                   pa_ID: paarray[0].certno.trim(),
                   pa_IC: paarray[0].icnoamil,
                   qareah_ID: paarray[0].codeqaryah.trim(),
                   password: $("#password").val(),
                   email:$("#email").val(),
                 
                },
                url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
                success: function (data) {
                    var myObj = JSON.parse(data);
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
                }, error: function (error) {
                    alert("Server down");
                }
            });
        } else {
            $("#password").addClass('xsamapassword');
            $("#passwordC").addClass('xsamapassword');
            alert("Katalaluan tidak sama");
        }
    }
    function getamil(email) {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            dataType: "text",
            data: {
                id: 'MhKV92$nVM09!',
                branchcode:'',
                qaryahcode: '',
                certno: '',
                icno: email,
                currentdate:""
            },
            url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getAmilListing',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(xmltostring(data));
                paarray = myObj;
               
             
                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }, error: function (error) {
                alert("Server down");
            }
        });
    } function xmltostring(data) {
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
   
} )();