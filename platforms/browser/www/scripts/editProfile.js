// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var gambar = null;
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

    //document.getElementById("uploadimg").addEventListener("click", uploadimg);
    document.getElementById("btnUpdate").addEventListener("click", btnUpdate);
    document.getElementById("btncancel").addEventListener("click", btncancel);
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
    }; function btncancel() {
       
        location.href = "profilePelapor.html";
    };function semakLaporan() {
       
  location.href = "semakStatus.html";    };
    //menu
    function uploadimg() {

        $('#model').modal('toggle');
        document.getElementById("camerabtn").addEventListener("click", takePicture);
        document.getElementById("librarybtn").addEventListener("click", takeGallery);


        return false;
    };
    function takePicture() {
        $('#model').modal('toggle');
        var srcType = Camera.PictureSourceType.CAMERA;
        var options = setOptions(srcType);


        navigator.camera.getPicture(function cameraSuccess(imageUri) {
            var image = document.getElementById('uploadimg');
            image.src = "data:image/jpeg;base64," + imageUri;
            // Do something
            gambar = imageUri;
            // Do something

        }, function cameraError(error) {
            console.debug("Unable to obtain picture: " + error, "app");

        }, options);
    } function takeGallery() {
        $('#model').modal('toggle');
        var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
        var options = setOptions(srcType);


        navigator.camera.getPicture(function cameraSuccess(imageUri) {
            var image = document.getElementById('uploadimg');
            image.src = "data:image/jpeg;base64," + imageUri;
            // Do something
            gambar = imageUri;

        }, function cameraError(error) {
            console.debug("Unable to obtain picture: " + error, "app");
            alert(error);
        }, options);
    }
    function setOptions(srcType) {
        var options = {
            // Some common settings are 20, 50, and 100
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            // In this app, dynamically set the picture source, Camera or photo gallery
            sourceType: srcType,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true  //Corrects Android orientation quirks
        }
        return options;
    }
    function btnUpdate() {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                nama: $("#nama").val(),
                ic: $("#ic").val(),
                alamat: $("#alamat").val(),
                email: $("#email").val(),
                noTel: $("#noTel").val(),
                nameorganisasi: $("#nameorganisasi").val(),
                password: $("#password").val()
            },
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/updatePelapor.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                if (myObj[0].status = "success") {
                    localStorage.setItem("nama", $("#nama").val());
                    localStorage.setItem("ic", $("#ic").val());
                    localStorage.setItem("password", $("#password").val());
                    //localStorage.setItem("alamat", $("#alamat").val());
                    //localStorage.setItem("kaum", $("#kaum").val());
                    //localStorage.setItem("agama", $("#agama").val());
                    localStorage.setItem("noTel", $("#noTel").val());
                    localStorage.setItem("nameorganisasi", $("#nameorganisasi").val());
                    alert("Berjaya Kemaskini");
                    location.href = "profilePelapor.html";
                } else {
                    alert("Tidak Berjaya Kemaskini");
                }
                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    }
    function setData() {

        $("#nama").val( localStorage.getItem("nama"));
        $("#ic").val(localStorage.getItem("ic"));
        $("#noTel").val(localStorage.getItem("noTel"));
        $("#nameorganisasi").val(localStorage.getItem("nameorganisasi"));
        //$("#kaum").val(localStorage.getItem("kaum")).change();
        //$("#alamat").val(localStorage.getItem("alamat"));
        //$("#agama").val(localStorage.getItem("agama")).change();
        $("#email").val(localStorage.getItem("email"));
        $("#password").val(localStorage.getItem("password"));
       
      


        //var image = document.getElementById('uploadimg');
        //image.src = "http://www.smartapp.name.my/Jejak%20Asnaf/gambar/profile/" + localStorage.getItem("gambar");

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