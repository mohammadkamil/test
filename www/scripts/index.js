// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

var push;
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.getElementById("login").addEventListener("click", login);
    document.getElementById("semak").addEventListener("click", semak);
    document.getElementById("laporan").addEventListener("click", laporan);

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
    function semak() {
        location.href = "semakStatus.html";
    }; function laporan() {
        location.href = "reportAsnaf.html";
    };
    function login() {
        location.href = "login.html";

       
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