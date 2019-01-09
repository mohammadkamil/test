// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";
    var map;
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    //menu
    document.getElementById("home").addEventListener("click", home);
    document.getElementById("sLaporan").addEventListener("click", sLaporan);
    document.getElementById("profile").addEventListener("click", profile);
    document.getElementById("semakLaporan").addEventListener("click", semakLaporan);
    document.getElementById("logout").addEventListener("click", logout);
    document.getElementById("ubahbtn").addEventListener("click", ubahbtn);
    //menu
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);
        console.log(navigator.camera);
        getReport();
       
    
        //map = new google.maps.Map(document.getElementById('map'), {
        //        center: { lat: -34.397, lng: 150.644 },
        //        zoom: 8
        //    });
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
        location.href = "editReport.html";
    }

    function getReport() {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "getreportPbyID",
                laporan_ID: localStorage.getItem("laporan_ID")
            }, async: false,
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);

                
                
                if (myObj[0].reportType != 1) {
                    var latlng = JSON.parse(myObj[0].lokasi_GPS);
                    initMap(latlng.lat, latlng.lng);
                    setData2(myObj[0].asnaf_nama, myObj[0].asnaf_IC,  myObj[0].bantuan_ID, myObj[0].qareah_ID, myObj[0].alamat, latlng.lat, latlng.lng, myObj[0].ulasan, myObj[0].gambar, myObj[0].status_Laporan);

                } else {
                    setData(myObj[0].asnaf_nama, myObj[0].asnaf_IC,  myObj[0].bantuan_ID, myObj[0].qareah_ID, myObj[0].status_Laporan);
                }
            } 
        
        });
    }
    function onBackKeyDown() {
        return false;
    };
    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };
    function setData(nama, ic, jenisbantuan, qareah, status) {
        $("#ligambar").hide();
        $("#lihuraian").hide();
        $("#limap").hide();
        $("#lialamat").hide();
        $("#latlng").hide();
        $("#nama").html("Nama<br>" + nama);
        $("#status").html("Status<br>" + checkstatus(status));
        if (status != 1) {
            $("#ubah").hide();
        }
        $("#ic").html("IC<br>" + ic);
        //$("#kaum").html("Kaum<br>" + checkKaum(kaum));
        checkjenisbantuan(jenisbantuan);
        checkqareah(qareah);

    } function setData2(nama, ic, jenisbantuan, qareah, alamat, lat, lng, huraian, gambar, status) {
       
        $("#nama").html("Nama<br>" + nama);
        $("#status").html("Status<br>" + checkstatus(status));
        $("#ic").html("IC<br>" + ic);
        //$("#kaum").html("Kaum<br>" + checkKaum(kaum));
        checkjenisbantuan(jenisbantuan);
        checkqareah(qareah);
        $("#alamat").html(alamat);
        $("#latlng").html("Kordinat<br>Lat:" + lat + "<br>lng:" + lng);
        $("#huraian").html(huraian);
        var gambararray = JSON.parse(gambar);
        var image;
        if (status != 1) {
            $("#ubah").hide();
        }
        for (var loop = 0; loop < gambararray.length; loop++) {
            if (loop == 0) {
                image = document.getElementById('gambar');
            } else if (loop == 1) {

                image = document.getElementById('gambar1');

            } else if (loop == 2) {

                image = document.getElementById('gambar2');

            } else if (loop == 3) {

                image = document.getElementById('gambar3');

            } else if (loop == 4) {

                image = document.getElementById('gambar4');

            } else if (loop == 5) {
                image = document.getElementById('gambar5');

            }
            image.src = "http://www.smartapp.name.my/Jejak%20Asnaf/gambar/report/" + gambararray[loop];
        }
     

    }
    function initMap(lat, lng) {

        var myLatLng = { lat: parseFloat(lat), lng: parseFloat(lng) };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
        });
    }   function checkKaum(kaum) {
        if (kaum == 1) {
            return "Melayu";
        } else if (kaum == 2) {
            return "Chinese";

        } else if (kaum == 3) {
            return "Indian";

        } else if (kaum == 4) {
            return "Lain-lain";

        } 
    } function checkqareah(qareah) {
        $.ajax({
            type: 'GET',	//Request method: GET, POST  
            dataType: "text",
            data: {
                id: "MhKV92$nVM09!",
                branchcode: '',
                qaryahcode: qareah
            },
            url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getQaryahListing', //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(xmltostring(data));
                $("#qareah").html("Qareah<br>" + myObj[0].nameqaryah);

                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
      
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
                $("#jenisbantuan").html("Jenis Bantuan<br>" + myObj[0].bantuan_nama);

                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    }
    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();
function xmltostring(data) {
    data = data.split('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">');
    data = data[1].split('</string>');
    return data[0];
} 