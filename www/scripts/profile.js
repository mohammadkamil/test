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
    document.getElementById("ubahbtn").addEventListener("click", ubahbtn);
    document.getElementById("semakLaporan").addEventListener("click", semakLaporan);

    //menu
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);
        setData();
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
    function ubahbtn() {
        location.href = "editPelapor.html";
    }

    function setData() {
        
        $("#nama").html("Nama: " + localStorage.getItem("nama"));
        $("#ic").html("IC: " + localStorage.getItem("ic"));
        $("#noTel").html("No Telefon :" + localStorage.getItem("noTel"));
        if (localStorage.getItem("nameorganisasi") != "" ) {
            $("#nameorganisasi").html("Nama Organisasi :" + localStorage.getItem("nameorganisasi"));
        } else {
            $("#nameorganisasi").hide();
        }
      
        //$("#kaum").html("Kaum<br>" + checkKaum(localStorage.getItem("kaum")));
        //$("#alamat").html("Alamat<br>" + localStorage.getItem("alamat"));
        //$("#agama").html("Agama<br>" + checkAgama(localStorage.getItem("agama")));
        $("#email").html("Email: " + localStorage.getItem("email"));
        $("#password").html("Password: " + localStorage.getItem("password"));
        //var image = document.getElementById('profileimg');
        //image.src = "http://www.smartapp.name.my/Jejak%20Asnaf/gambar/profile/" + localStorage.getItem("gambar");
     
    }
    function checkKaum(kaum) {
        if (kaum == 1) {
            return "Melayu";
        } else if (kaum == 2) {
            return "Chinese";

        } else if (kaum == 3) {
            return "Indian";

        } else if (kaum == 4) {
            return "Lain-lain";

        }
    } function checkAgama(agama) {
        if (agama == 1) {
            return "Islam";
        } else if (agama == 2) {
            return "Bhudha";

        } else if (agama == 3) {
            return "Christianity";

        } else if (agama == 4) {
            return "Hinduism";

        }else if (agama == 5) {
            return "Lain-lain";

        }
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