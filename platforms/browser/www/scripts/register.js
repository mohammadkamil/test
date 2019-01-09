// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";
    var gambar, nama, ic, alamat, kaum, agama, email, password;

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.getElementById("loginbtn").addEventListener("click", loginbtn);
    //document.getElementById("uploadimg").addEventListener("click", uploadimg);
    document.getElementById("btnRegister").addEventListener("click", btnRegister);
    //document.getElementById("camerabtn").addEventListener("click", camerabtn);
    //document.getElementById("librarybtn").addEventListener("click", librarybtn);
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);

        console.log(navigator.camera);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

    };
    function loginbtn() {

        location.href = "login.html";
    };
    //function uploadimg() {

    //    $('#model').modal('toggle');
    //    document.getElementById("camerabtn").addEventListener("click", takePicture);
    //    document.getElementById("librarybtn").addEventListener("click", takeGallery);
        

    //    return false;
    //};
    //function takePicture() {
    //    $('#model').modal('toggle');
    //    var srcType = Camera.PictureSourceType.CAMERA;
    //    var options = setOptions(srcType);


    //    navigator.camera.getPicture(function cameraSuccess(imageUri) {
    //        var image = document.getElementById('uploadimg');
    //        image.src = "data:image/jpeg;base64," + imageUri;
    //        // Do something
    //        gambar = imageUri;
    //        // Do something

    //    }, function cameraError(error) {
    //        console.debug("Unable to obtain picture: " + error, "app");

    //        }, options);
    //} function takeGallery() {
    //    $('#model').modal('toggle');
    //    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    //    var options = setOptions(srcType);


    //    navigator.camera.getPicture(function cameraSuccess(imageUri) {
    //        var image = document.getElementById('uploadimg');
    //        image.src = "data:image/jpeg;base64," + imageUri;
    //        // Do something
    //        gambar = imageUri;

    //    }, function cameraError(error) {
    //        console.debug("Unable to obtain picture: " + error, "app");
    //        alert(error);
    //    }, options);
    //}
    //function setOptions(srcType) {
    //    var options = {
    //        // Some common settings are 20, 50, and 100
    //        quality: 50,
    //        destinationType: Camera.DestinationType.DATA_URL,
    //        // In this app, dynamically set the picture source, Camera or photo gallery
    //        sourceType: srcType,
    //        encodingType: Camera.EncodingType.JPEG,
    //        mediaType: Camera.MediaType.PICTURE,
    //        allowEdit: true,
    //        correctOrientation: true  //Corrects Android orientation quirks
    //    }
    //    return options;
    //}
    function btnRegister() {
      
    
        $.ajax({
            type: 'POST',	//Request method: GET, POST  
            data: {
                nama: $("#nama").val(),
                ic: $("#ic").val(),
                email: $("#email").val(),
                noTel: $("#noTel").val(),
                nameorganisasi: $("#nameorganisasi").val(),
                password: $("#password").val()
            },
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/register.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                if (myObj[0].status = "success") {
                    alert("Berjaya daftar");
                    location.href = "login.html";
                } else {
                    alert("Email sudah di daftar");
                }
                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }, error: function (error) {
                alert(11);
            }
        });
    }
    //function validation() {
    //    if ($("#nama").val()=="") {

    //    }
    //        ic: $("#ic").val(),
    //}
    //function btncamera() {
    //    //$.ajax({
    //    //    type: 'post',	//Request method: GET, POST  
    //    //    url: 'http://www.smartapp.name.my/Jejak%20Asnaf/test.php',  //Where to send the data
    //    //      //What data you want to send
    //    //    success: function (data) {
    //    //        alert(data);
    //    //        //Here you will receive data from server
    //    //        //Do what you want to do with data                         
    //    //        console.log(data)	 //This is a example, like we want to print the result
    //    //    }
    //    //})
    //    navigator.camera.getPicture(onSuccess, onFail, {
    //        quality: 50,
    //        destinationType: Camera.DestinationType.FILE_URI
    //    });

    //    function onSuccess(imageURI) {
    //        alert("success");
    //    }

    //    function onFail(message) {
    //        alert('Failed because: ' + message);
    //    }
    //};
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