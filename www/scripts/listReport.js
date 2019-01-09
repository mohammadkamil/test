// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    //menu
    document.getElementById("home").addEventListener("click", home);
    document.getElementById("sLaporan").addEventListener("click", sLaporan);
    document.getElementById("profile").addEventListener("click", profile);
    document.getElementById("logout").addEventListener("click", logout);
    document.getElementById("semakLaporan").addEventListener("click", semakLaporan);

    //menu
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);
        getReport();
        console.log(navigator.camera);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

    };
    //menu
    function home() {
        location.href = "reportAsnaf.html";

    }; function sLaporan() {
        location.href = "listReport.html";

    }; function profile() {
        location.href = "profilePelapor.html";

    }; function logout() {
        localStorage.setItem("login", 0);
        location.href = "../index.html";
    };function semakLaporan() {
       
  location.href = "semakStatus.html";    };
    //menu
    function getReport() {
        $.ajax({
        type: 'post',	//Request method: GET, POST  
            data: {
                mode: "getreportP",
                user_ID: localStorage.getItem("user_ID")
            },
        url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
        success: function (data) {
            var myObj = JSON.parse(data);
            if (myObj.length != 0) {
                for (var loop = 0; loop < myObj.length; loop++) {
                    //$('#list').append(' <a href="#" class="list-group-item list-group-item-action flex-column align-items-start  alink"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">Kamil</h5></div><small>Status: Diterima oleh LZNK</small></a>');
                    //$('#list').append(' <div  class="list-group-item list-group-item-action flex-column align-items-start alink" onclick="alert("DSDA")"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">' + myObj[loop].asnaf_nama + '</h5></div><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></div>');
                    //$('#list').append('<a href="#" class="list-group-item list-group-item-action flex-column align-items-start alink listcss " onclick="idreport(' + myObj[loop].laporan_ID + ')"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">' + myObj[loop].asnaf_nama + '</h5></div ><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></a >');
                    $('#list').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss " onclick="idreport(' + myObj[loop].laporan_ID + ',1)"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">' + myObj[loop].asnaf_nama + '</h5></div ><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></a >');

                }
            } else {
                $('#list').append('<div class="list-group-item  flex-column align-items-start alink listcss "><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">Tiada Laporan</h5></div ></div>');

                //$('#list').append('<div class="list-group-item list-group-item-action flex-column align-items-start alink listcss "><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">Tiada Laporan</h5></div ></div>');
            }
               
                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
    });
    }
  
    function onBackKeyDown() {
        return false;
    };
    
    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();