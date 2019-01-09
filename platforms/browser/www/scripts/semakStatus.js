// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";
    var gambararray, nama, ic, alamat, kaum, agama, email, password;
    var gId = 0;
    var latlng;
  
    //document.getElementById("back").addEventListener("click", back);
    document.getElementById("semak").addEventListener("click", semak);
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        console.log(navigator.camera);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

    };
   
    function semak() {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "getreportPbyIC",
                asnafic: $("#asnafic").val()
            }, async: false,
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                $("#asnafic").val("");
                $("#card").show();
 $("#status").show();
                    $("#ic").show();
                if (myObj.length == 0) {
                    $("#nama").html("Tiada Laporan");
                    $("#status").hide();
                    $("#jenis").hide();
                    $("#ic").hide();
                } else {
                    setData(myObj[0].asnaf_nama, myObj[0].asnaf_IC, myObj[0].status_Laporan, myObj[0].bantuan_ID);
                }               
            }

        });

    }
    function setData(nama, ic, status,jenis) {
        $("#nama").html("Nama<br>" + nama);
      checkjenisbantuan(jenis);
        $("#status").html("Status<br>" + checkstatus(status));
        $("#ic").html("IC<br>" + ic);

    }; 
  
    function back() {
        $("#semakDiv").show();
        $("#card").hide();
    }function checkjenisbantuan(bantuan) {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "getbantuanbyID",
                bantuan_ID: bantuan
            },
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                $("#jenis").html("Jenis Bantuan<br>" + myObj[0].bantuan_nama);

                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();