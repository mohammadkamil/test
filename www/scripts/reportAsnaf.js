// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var daerahid, qareahid;
(function () {
    "use strict";
    var gambararray, nama, ic, alamat, kaum, agama, email, password;
    var gId = 0;
    var latlng;
    var map;
    var geocoder;
    //menu
    document.getElementById("home").addEventListener("click", home);
    document.getElementById("sLaporan").addEventListener("click", sLaporan);
    document.getElementById("profile").addEventListener("click", profile);
    document.getElementById("logout").addEventListener("click", logout);
    document.getElementById("semakLaporan").addEventListener("click", semakLaporan);

    //menu
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.getElementById("next").addEventListener("click", next);
    document.getElementById("next2").addEventListener("click", next2);
    document.getElementById("next3").addEventListener("click", next3);
    document.getElementById("btnsubmit").addEventListener("click", btnsubmit);
    document.getElementById("btnhantar").addEventListener("click", btnhantar);
    document.getElementById("back2").addEventListener("click", back2);
    document.getElementById("back4").addEventListener("click", back4);
    document.getElementById("back3").addEventListener("click", back3);
    document.getElementById("gambar").addEventListener("click", gambar);
    document.getElementById("gambar1").addEventListener("click", gambar1);
    document.getElementById("gambar2").addEventListener("click", gambar2);
    document.getElementById("gambar3").addEventListener("click", gambar3);
    document.getElementById("gambar4").addEventListener("click", gambar4);
    document.getElementById("gambar5").addEventListener("click", gambar5);
    document.getElementById("btnsemakbyic").addEventListener("click", btnsemakbyic);
    gambararray = [];
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);
        //setqareah();
        setDaerah();
        setjenis();
        //autocomplete();
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        console.log(navigator.camera);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

    };
    function btnsemakbyic() {
       
        var noic = $("#ic").val();
        var d = new Date();
        var year = d.getFullYear();
        if (noic!="") {
            $('#model3').modal({
                keyboard: false,
                backdrop: 'static'
            });
            $.ajax({
                type: 'GET',	//Request method: GET, POST  
                dataType: "text",
                async: true,
                url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getPayeePaymentListing?appid=' + noic + '&id=MhKV92$nVM09!&year=',//Where to send the data
                //What data you want to send
                success: function (data) {
                  

                    $('#model3').modal('hide');
                    $('#modellist').modal({
                        keyboard: false,
                        backdrop: 'static'
                    });
                    //$("#ic").val("");

                    var myObj = JSON.parse(xmltostring(data));
                    $('#modelbody').empty();

                    if (myObj.length == 0) {

                        //$("#icdiv").html(myObj[0].appid);
                        $('#modelbody').append('<div class="card border-primary mb-3" style="width:100%"><div class="card-body" ><p class="card-text" >Tiada rekod bantuan</p></div></div>');

                    } else {
                        var sizeloop = 0;
                        if (myObj.length >= 3) {
                            sizeloop = 3;
                        } else {
                            sizeloop = myObj.length;
                        }
                        $("#icdiv").html(myObj[0].appname+"<br>"+myObj[0].appid);

                        for (var loop = 0; loop < sizeloop; loop++) {
                            $('#modelbody').append('<div class="card border-primary mb-3" style="width:100%"><div class="card-body" ><p class="card-text" >' + myObj[loop].distdesc + '</p> <p class="card-text"><small class="text-muted">' + myObj[loop].appyear + '</small></p></div></div>');

                        }
                       
                    }
                 
                    //Here you will receive data from server
                    //Do what you want to do with data                         
                    console.log(data)	 //This is a example, like we want to print the result
                }, 
            });
        }
            
           
        
        //$('#model3').modal('hide');
    }
   
    //function autocomplete() {
       
    //    var options = {
    //        url: function (phrase) {
    //            return "http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php";
    //        },

    //        getValue: function (element) {

    //            return element.kampung_nama;
    //        },

    //        ajaxSettings: {
    //            dataType: "json",
    //            method: "POST",
    //            data: {
    //                mode: "getkampung"
    //            }
    //        },
    //        list: {

    //            onSelectItemEvent: function () {
    //                var value = $("#kampung").getSelectedItemData().qareah_ID;
    //                $("#qareah").val(value).trigger("change");
    //                $("#kampung_ID").val($("#kampung").getSelectedItemData().kampung_ID);
    //            }
    //        },
    //        preparePostData: function (data) {

    //            data.phrase = $("#example-ajax-post").val();
    //            return data;
    //        },

    //        requestDelay: 400
    //    };

    //    $("#kampung").easyAutocomplete(options);
    //}
    //menu
    function home() {
        location.href = "reportAsnaf.html";

    };function sLaporan() {
        location.href = "listReport.html";

    };function profile() {
        location.href = "profilePelapor.html";

    }; function logout() {
        localStorage.setItem("login", 0);
        location.href = "../index.html";
    };function semakLaporan() {
       
  location.href = "semakStatus.html";
    };
    //menu

    function gambar() {
        gId = 1;
        uploadimg();
    }; function gambar1() {
        gId = 2;
        uploadimg();

    }; function gambar2() {
        gId = 3;
        uploadimg();

    }; function gambar3() {
        gId = 4;
        uploadimg();

    }; function gambar4() {
        gId = 5;
        uploadimg();

    }; function gambar5() {
        gId = 6;
        uploadimg();

    };
    function setDaerah() {
        $.ajax({
            type: 'GET',	//Request method: GET, POST  
            dataType: "text",
            data: {
                id:"MhKV92$nVM09!"
            },
            url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getBranchListing',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(xmltostring(data));
                for (var loop = 0; loop < myObj.length-1; loop++) {
                    $('#daerah').append('<option value="' + myObj[loop].brachid + '" >' + myObj[loop].branchdesc + '</option>');
                } 

                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }, error: function (error) {
                alert(JSON.stringify(error));
            }
        });
    };  function setjenis() {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "getjenisbantuan",
            },
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                for (var loop = 0; loop < myObj.length; loop++) {
                    $('#jenisBantuan').append('<option value="' + myObj[loop].bantuan_ID + '" >' + myObj[loop].bantuan_nama + '</option>');

                }
                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    };
    function next() {
        //$("#divbutton").show();
        $("#divbutton1").hide();

        $("#page1").hide();
        $("#page2").show();
    }; function next2() {
        $("#page2").hide();
        $("#page3").show();
        $("#page4").hide();


    }; function next3() {
        $("#page3").hide();
        $("#page4").show();
       

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }; function back2() {
        //$("#divbutton").hide();
        $("#divbutton1").show();
        $("#page2").hide();
        $("#page3").hide();
        $("#page4").hide();
        $("#page1").show();
    }; function back3() {
        $("#page3").hide();
        $("#page2").show();
    };function back4() {
        $("#page4").hide();
        $("#page3").show();
    };
    function uploadimg() {

        $('#model').modal('toggle');
        document.getElementById("camerabtn").addEventListener("click", takePicture);
        document.getElementById("librarybtn").addEventListener("click", takeGallery);


        return false;
    };
   
function geocodeLatLng(geocoder, map,lat,lng) {
  
     latlng = { lat: lat, lng: lng };
    geocoder.geocode({ 'location': latlng }, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {
                map.setZoom(11);
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                });
                $("#addres").val(results[0].formatted_address);
                $("#latlng").text("Kordinat\nLat:" + lat + "\nLng:" + lng);
            } else {
                window.alert('No results found');
            }
        } else {
            //window.alert('Geocoder failed due to: ' + status);
        }
     });
   
};
    // onError Callback receives a PositionError object
    //
var onSuccess = function (position) {
          map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: { lat: position.coords.latitude, lng: position.coords.longitude }
    }); 
    geocoder = new google.maps.Geocoder;

    geocodeLatLng(geocoder, map, position.coords.latitude, position.coords.longitude); 

};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
function btnsubmit() {
    if ($("#ic").val() != "" && $("#nama").val() != "" && $("#daerah").val() != null && $("#reportNoTel").val() != "") {
            $.ajax({
                type: 'post',	//Request method: GET, POST  
                data: {
                    mode: 2,
                    gambar: gambararray,
                    nama: $("#nama").val(),
                    ic: $("#ic").val(),
                    daerah: $("#daerah").val(),
                    qareah: $("#qareah").val(),
                    jenisB: $("#jenisBantuan").val(),
                    alamat: $("#addres").val(),
                    //kaum: $("#kaum").val(),
                    fizikal: $("#fizikal").val(),
                    kerja: $("#kerja").val(),
                    pendapatan: $("#pendapatan").val(),
                    perbelanjaan: $("#perbelanjaan").val(),
                    tgglsama: $("#tgglsama").val(),
                    tgglasing: $("#tgglasing").val(),
                    kordinat: latlng,
                    reportNoTel: $("#reportNoTel").val(),
                    huraian: $("#huraian").val(),
                    pa_ID: $("#amil").val(),
                    user_ID: localStorage.getItem("user_ID")
                },
                url: 'http://www.smartapp.name.my/Jejak%20Asnaf/addReport.php',  //Where to send the data
                //What data you want to send
                success: function (data) {
                    var myObj = JSON.parse(data);
                    var image;
                    if (myObj[0].status = "success") {
                        alert("Berjaya Lapor Asnaf");

                        $('#form').trigger("reset");
                        $("#page1").show();
                        $("#page2").hide();
                        $("#page3").hide();
                        $("#page4").hide();
                        for (var loop = 1; loop <= 6; loop++) {

                            if (loop == 1) {
                                image = document.getElementById('gambar');
                            } else if (loop == 2) {
                                image = document.getElementById('gambar1');

                            } else if (loop == 3) {
                                image = document.getElementById('gambar2');

                            } else if (loop == 4) {
                                image = document.getElementById('gambar3');

                            } else if (loop == 5) {
                                image = document.getElementById('gambar4');

                            } else if (loop == 6) {
                                image = document.getElementById('gambar5');

                            }
                            image.src = "../images/photo.png";
                        }
                        gambararray = null;

                    }

                    //Here you will receive data from server
                    //Do what you want to do with data                         
                    console.log(data)	 //This is a example, like we want to print the result
                }
            });
        } else {
            alert("Sila lengkapkan Laporan");
        }
}; function btnhantar() {
    if ($("#ic").val() != "" && $("#nama").val() != "" && $("#daerah").val() != null && $("#reportNoTel").val()!="") {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: 1,
                nama: $("#nama").val(),
                ic: $("#ic").val(),
                daerah: $("#daerah").val(),
                qareah: $("#qareah").val().trim(),
                jenisB: $("#jenisBantuan").val(),
                //kampung: $("#kampung_ID").val(),
                pa_ID:$("#amil").val(),
                //kaum: $("#kaum").val(),
                reportNoTel: $("#reportNoTel").val(),
                huraian: $("#huraian").val(),
                user_ID: localStorage.getItem("user_ID")
            },
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/addReport.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                prompt(1,data);
                var myObj = JSON.parse(data);
                var image;
                if (myObj[0].status = "success") {
                    alert("Berjaya Lapor Asnaf");

                    $('#form').trigger("reset");


                }

                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    }else {
        alert("Sila lengkapkan Laporan");
    }
};

    function takePicture() {
        $('#model').modal('toggle');
        var srcType = Camera.PictureSourceType.CAMERA;
        var options = setOptions(srcType);


        navigator.camera.getPicture(function cameraSuccess(imageUri) {
            var image
            if (gId == 1) {
                if (gambararray[0] !== null) {
                    gambararray[0] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar');
            } else if (gId == 2) {
                if (gambararray[1] !== null) {
                    gambararray[1] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar1');

            } else if (gId == 3) {
                if (gambararray[2] !== null) {
                    gambararray[2] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar2');

            } else if (gId == 4) {
                if (gambararray[3] !== null) {
                    gambararray[3] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar3');

            } else if (gId == 5) {
                if (gambararray[4] !== null) {
                    gambararray[4] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar4');

            } else if (gId == 6) {
                if (gambararray[5] !== null) {
                    gambararray[5] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar5');

            }
            //gambararray.push(imageUri);
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
            var image
            if (gId == 1) {
                if (gambararray[0] !== null) {
                    gambararray[0] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar');
            } else if (gId == 2) {
                if (gambararray[1] !== null) {
                    gambararray[1] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar1');

            } else if (gId == 3) {
                if (gambararray[2] !== null) {
                    gambararray[2] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar2');

            } else if (gId == 4) {
                if (gambararray[3] !== null) {
                    gambararray[3] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar3');

            } else if (gId == 5) {
                if (gambararray[4] !== null) {
                    gambararray[4] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar4');

            } else if (gId == 6) {
                if (gambararray[5] !== null) {
                    gambararray[5] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('gambar5');

            }
            //gambararray.push(imageUri);

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
            allowEdit: false,
            correctOrientation: true  //Corrects Android orientation quirks
        }
        return options;
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
    //function xmltostring(data) {
    //    data = data.split('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">');
    //    data = data[1].split('</string>');

    //    return data[0];
    //}
})();
$("#daerah").change(function () {
    daerahid = $("#daerah").val();
    setqareah($("#daerah").val());
    $("#qareah").prop("disabled", false);

}); $("#qareah").change(function () {

    setamil(daerahid, $("#qareah").val());
    $("#amil").prop("disabled", false);

});
function setqareah(daerah) {
    $('#qareah').empty();
    $('#qareah').append('<option value="" disabled selected> Pilih Kariah</option >');
    $('#qareah').append('<option value="1"  >Tidak Pasti</option >');
    
    $.ajax({
        type: 'GET',	//Request method: GET, POST  
        dataType: "text",
        url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getQaryahListing?id=MhKV92$nVM09!&branchcode=' + daerah + '&qaryahcode=', //Where to send the data
        //What data you want to send
        success: function (data) {
            var myObj = JSON.parse(xmltostring(data));
            for (var loop = 0; loop < myObj.length; loop++) {
                $('#qareah').append('<option value="' + myObj[loop].codeqaryah + '" >' + myObj[loop].nameqaryah + '</option>');
            }

            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }, error: function (error) {
        }
    });
};function setamil(daerah, qareah) {
    $('#amil').empty();
    $('#amil').append('<option value="" disabled selected> Pilih Penolong Amil</option >');

    $.ajax({
        type: 'GET',	//Request method: GET, POST  
        dataType: "text",
        data: {
            id: 'MhKV92$nVM09!',
            branchcode: daerah,
            qaryahcode: qareah,
            certno:"",
            icno:"",
            currentdate:""
        },
        url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getAmilListing', //Where to send the data
        //What data you want to send
        success: function (data) {
           
            var myObj = JSON.parse(xmltostring(data));
            for (var loop = 0; loop < myObj.length; loop++) {
                $('#amil').append('<option value="' + myObj[loop].certno + '" selected>' + myObj[loop].amilinfo.name + '</option>');
            }

            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }
    });
}; 