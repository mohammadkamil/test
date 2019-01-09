// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var gId = 0;
var latlng;
var map;
var geocoder;
var gambararray = [];
(function () {
    "use strict";
   
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    //menu
    document.getElementById("home").addEventListener("click", home);
    document.getElementById("sLaporan").addEventListener("click", sLaporan);
    //document.getElementById("profile").addEventListener("click", profile);
    document.getElementById("logout").addEventListener("click", logout);
    //document.getElementById("semakLaporan").addEventListener("click", semakLaporan);
    document.getElementById("semakasnaf").addEventListener("click", semakasnaf);

    //menu
    //button penolong amil
    //document.getElementById("pa_ambil").addEventListener("click", pa_ambil);
    document.getElementById("semakbyic").addEventListener("click", semakbyic);

    document.getElementById("pa_sokong").addEventListener("click", pa_sokong);
    //document.getElementById("pa_Xlayak").addEventListener("click", pa_Xlayak);
    //document.getElementById("pa_semakback").addEventListener("click", pa_semakback);
    document.getElementById("pa_semak").addEventListener("click", pa_semak);
    //document.getElementById("pa_semakAsnafback").addEventListener("click", pa_semakAsnafback);
    document.getElementById("pa_semakAsnafBtn").addEventListener("click", pa_semakAsnafBtn);

    //button penolong amil
    //edit report
    document.getElementById("edit_next").addEventListener("click", edit_next);
    document.getElementById("edit_next2").addEventListener("click", edit_next2);
    document.getElementById("edit_next3").addEventListener("click", edit_next3);
    document.getElementById("edit_btnsubmit").addEventListener("click", edit_btnsubmit);
    document.getElementById("edit_btncancel").addEventListener("click", edit_btncancel);
    document.getElementById("edit_btncancel2").addEventListener("click", edit_btncancel);
    document.getElementById("edit_btncancel3").addEventListener("click", edit_btncancel);
    document.getElementById("edit_btncancel4").addEventListener("click", edit_btncancel);
    document.getElementById("edit_back2").addEventListener("click", edit_back2);
    document.getElementById("edit_back4").addEventListener("click", edit_back4);
    document.getElementById("edit_back3").addEventListener("click", edit_back3);
    document.getElementById("edit_gambar").addEventListener("click", edit_gambar);
    document.getElementById("edit_gambar1").addEventListener("click", edit_gambar1);
    document.getElementById("edit_gambar2").addEventListener("click", edit_gambar2);
    document.getElementById("edit_gambar3").addEventListener("click", edit_gambar3);
    document.getElementById("edit_gambar4").addEventListener("click", edit_gambar4);
    document.getElementById("edit_gambar5").addEventListener("click", edit_gambar5);
    document.getElementById("edit_btnsemakbyic").addEventListener("click", edit_btnsemakbyic);
    //edit report
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);
        hide(1);
        getReport();
        getbantuan();
        setDaerah();
        setjenis();
        console.log(navigator.camera);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

    };
    function hide(hide) {
        $("#wrapper").removeClass("toggled");
        if (hide == 1) {
            //home
            $("#pa_detailreport").hide();
            $("#pa_listreport").show();
            //senaraidiambil
            //$("#pa_detailreportambil").hide();
            $("#semakbyic").hide();

            $("#pa_listreportambil").hide();
            //semaklaporan
            $("#pa_semakstatus").hide();
            $("#pa_card").hide();
            //semakasnaf
            $("#pa_semakasnaf").hide();
            $("#pa_semakasnafcard").hide();
            //edit report
            $("#pa_editreport").hide();
        } else if (hide == 2) {
            //slaporan
            $("#pa_detailreport").hide();
            $("#pa_listreport").hide();
            //senaraidiambil
            //$("#pa_detailreportambil").hide();
            $("#pa_listreportambil").show();
            $("#semakbyic").show();

            //semaklaporan
            $("#pa_semakstatus").hide();
            $("#pa_card").hide();
            //semakasnaf
            $("#pa_semakasnaf").hide();
            $("#pa_semakasnafcard").hide();
            //edit report
            $("#pa_editreport").hide();
        }else if (hide == 3) {
            //slaporan
            $("#pa_detailreport").hide();
            $("#pa_listreport").hide();
            //senaraidiambil
            //$("#pa_detailreportambil").hide();
            $("#pa_listreportambil").show();
            $("#semakbyic").hide();

            //semaklaporan
            $("#pa_semakstatus").hide();
            $("#pa_card").hide();
            //semakasnaf
            $("#pa_semakasnaf").hide();
            $("#pa_semakasnafcard").hide();
            //edit report
            $("#pa_editreport").hide();
        }else if (hide == 4) {
            //home
            $("#pa_detailreport").hide();
            $("#pa_listreport").hide();
            //senaraidiambil
            //$("#pa_detailreportambil").hide();
            $("#pa_listreportambil").hide();
            $("#semakbyic").hide();

            //semaklaporan
            $("#pa_semakstatus").show();
            $("#pa_card").hide();
            //semakasnaf
            $("#pa_semakasnaf").hide();
            $("#pa_semakasnafcard").hide();
            //edit report
            $("#pa_editreport").hide();
        }else if (hide == 5) {
            //home
            $("#pa_detailreport").hide();
            $("#pa_listreport").hide();
            //senaraidiambil
            //$("#pa_detailreportambil").hide();
            $("#pa_listreportambil").hide();
            $("#semakbyic").hide();

            //semaklaporan
            $("#pa_semakstatus").hide();
            $("#pa_card").hide();
            //semakasnaf
            $("#pa_semakasnaf").show();
            $("#pa_semakasnafcard").hide();
            //edit report
            $("#pa_editreport").hide();
        }else if (hide == 6) {
            //home
            $("#pa_detailreport").hide();
            $("#pa_listreport").hide();
            //senaraidiambil
            //$("#pa_detailreportambil").hide();
            $("#pa_listreportambil").hide();
            $("#semakbyic").hide();

            //semaklaporan
            $("#pa_semakstatus").hide();
            $("#pa_card").hide();
            //semakasnaf
            $("#pa_semakasnaf").hide();
            $("#pa_semakasnafcard").hide();
            //edit report
            $("#pa_editreport").show();
        }
    }
    //menu
    function home() {
        hide(1);
        getReport();

    }; function sLaporan() {
        hide(2);
        getReportambil();


    }; function profile() {
        hide(3);

    };
    //function semakLaporan() {
       
    //    hide(4);

    //}; 
    function semakbyic() {
               $("#pa_semakDiv").show();

        hide(4);
        
    }; function logout() {
        localStorage.clear();
        location.href = "../index.html";
    }; function semakasnaf() {
        hide(5);
    };
    

    //menu

    //button function penolong amil
    function pa_sokong() {
        if ($("#statusupdate").val() != 0) {
            if ($("#statusupdate").val() == 1) {
                hide(6);
                hidepage(1);
                idreport(localStorage.getItem("laporan_ID"), 3);
            } else {
                $.ajax({
                    type: 'post',	//Request method: GET, POST  
                    data: {
                        mode: "setreportStatus",
                        pa_ID: localStorage.getItem("pa_ID"),
                        statusupdate: $("#statusupdate").val(),
                        laporan_ID: localStorage.getItem("laporan_ID")

                    },
                    url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
                    //What data you want to send
                    success: function (data) {
                        var myObj = JSON.parse(data);
                        if (myObj[0].status = "success") {
                            alert("Berjaya dikemaskini ststus");
                            hide(2);
                            getReportambil();

                        }
                        //Here you will receive data from server
                        //Do what you want to do with data                         
                        console.log(data)	 //This is a example, like we want to print the result
                    }
                });
            }
        } else {
            alert("Sila pilih status laporan");
        }
    }
    //function edit report
    function hidepage(page) {
        if (page == 1) {
            $("#page1").show();
            $("#page2").hide();
            $("#page3").hide();
            $("#page4").hide();
        }else if (page == 2) {
            $("#page1").hide();
            $("#page2").show();
            $("#page3").hide();
            $("#page4").hide();
        }else if (page == 3) {
            $("#page1").hide();
            $("#page2").hide();
            $("#page3").show();
            $("#page4").hide();
        }else if (page == 4) {
            $("#page1").hide();
            $("#page2").hide();
            $("#page3").hide();
            $("#page4").show();
        }
    } function edit_gambar() {
        gId = 1;
        uploadimg();
    }; function edit_gambar1() {
        gId = 2;
        uploadimg();

    }; function edit_gambar2() {
        gId = 3;
        uploadimg();

    }; function edit_gambar3() {
        gId = 4;
        uploadimg();

    }; function edit_gambar4() {
        gId = 5;
        uploadimg();

    }; function edit_gambar5() {
        gId = 6;
        uploadimg();

    };
    function edit_btncancel() {

    }
    function edit_next() {
        //$("#divbutton").show();
        hidepage(2);
    }; function edit_next2() {
        hidepage(3);

    }; function edit_next3() {
        hidepage(4);

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }; function edit_back2() {
        //$("#divbutton").hide();
        hidepage(1);

    }; function edit_back3() {
        hidepage(2);

    }; function edit_back4() {
        hidepage(3);

    };
    function uploadimg() {

        $('#model').modal('toggle');
        document.getElementById("camerabtn").addEventListener("click", takePicture);
        document.getElementById("librarybtn").addEventListener("click", takeGallery);


        return false;
    };

    function geocodeLatLng(geocoder, map, lat, lng) {

        latlng = { lat: lat, lng: lng };
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    map.setZoom(11);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map
                    });
                    $("#edit_addres").val(results[0].formatted_address);
                    $("#edit_latlng").text("Kordinat\nLat:" + lat + "\nLng:" + lng);
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

        map = new google.maps.Map(document.getElementById('map2'), {
            zoom: 11,
            center: { lat: position.coords.latitude, lng: position.coords.longitude }
        });
        geocoder = new google.maps.Geocoder;
        geocodeLatLng(geocoder, map, position.coords.latitude, position.coords.longitude);
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        //alert('code: ' + error.code + '\n' +
        //    'message: ' + error.message + '\n');
    }
    function edit_btnsubmit() {
        if ($("#edit_ic").val() != "" && $("#edit_nama").val() != "" && $("#edit_daerah").val() != "" && $("#edit_qareah").val()
            != "" && $("#edit_jenisBantuan").val() != "" && $("#edit_addres").val() != "" && $("#edit_fizikal").val() != "" && $("#edit_kerja").val()
            != "" && $("#edit_pendapatan").val() != "" && $("#edit_perbelanjaan").val() != "" && $("#edit_tgglsama").val() != ""
            && $("#edit_tgglasing").val() != "" && $("#edit_reportNoTel").val() != "" && $("#edit_huraian").val() != "" && $("#edit_amil").val() != "") {
            $.ajax({
                type: 'POST',	//Request method: GET, POST  
                data: {
                    gambar: gambararray,
                    nama: $("#edit_nama").val(),
                    ic: $("#edit_ic").val(),
                    daerah: $("#edit_daerah").val(),
                    qareah: $("#edit_qareah").val(),
                    jenisB: $("#edit_jenisBantuan").val(),
                    alamat: $("#edit_addres").val(),
                    //kaum: $("#edit_kaum").val(),
                    fizikal: $("#edit_fizikal").val(),
                    kerja: $("#edit_kerja").val(),
                    pendapatan: $("#edit_pendapatan").val(),
                    perbelanjaan: $("#edit_perbelanjaan").val(),
                    tgglsama: $("#edit_tgglsama").val(),
                    tgglasing: $("#edit_tgglasing").val(),
                    kordinat: latlng,
                    reportNoTel: $("#edit_reportNoTel").val(),
                    huraian: $("#edit_huraian").val(),
                    pa_ID: $("#edit_amil").val(),
                    laporan_ID: localStorage.getItem("laporan_ID")
                },
                url: 'http://www.smartapp.name.my/Jejak%20Asnaf/sokongasnaf.php',  //Where to send the data
                //What data you want to send
                success: function (data) {
                    var myObj = JSON.parse(data);
                    var image;
                    if (myObj[0].status = "success") {
                        alert("Berjaya Lapor Asnaf");
                        hide(1);
                        getReport();
                        for (var loop = 1; loop <= 6; loop++) {

                            if (loop == 1) {
                                image = document.getElementById('edit_gambar');
                            } else if (loop == 2) {
                                image = document.getElementById('edit_gambar1');

                            } else if (loop == 3) {
                                image = document.getElementById('edit_gambar2');

                            } else if (loop == 4) {
                                image = document.getElementById('edit_gambar3');

                            } else if (loop == 5) {
                                image = document.getElementById('edit_gambar4');

                            } else if (loop == 6) {
                                image = document.getElementById('edit_gambar5');

                            }
                            image.src = "../images/photo.png";
                        }
                        gambararray = null;

                    }

                    //Here you will receive data from server
                    //Do what you want to do with data                         
                    console.log(data)	 //This is a example, like we want to print the result
                }, error: function (error) {
                }
            });
        } else {
            alert("Sila lengkapkan Laporan");
        }
    }; function edit_btncancel() {
        home(); 
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
                image = document.getElementById('edit_gambar');
            } else if (gId == 2) {
                if (gambararray[1] !== null) {
                    gambararray[1] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('edit_gambar1');

            } else if (gId == 3) {
                if (gambararray[2] !== null) {
                    gambararray[2] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('edit_gambar2');

            } else if (gId == 4) {
                if (gambararray[3] !== null) {
                    gambararray[3] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('edit_gambar3');

            } else if (gId == 5) {
                if (gambararray[4] !== null) {
                    gambararray[4] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('edit_gambar4');

            } else if (gId == 6) {
                if (gambararray[5] !== null) {
                    gambararray[5] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('edit_gambar5');

            }
            gambararray.push(imageUri);
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
                image = document.getElementById('edit_gambar');
            } else if (gId == 2) {
                if (gambararray[1] !== null) {
                    gambararray[1] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('edit_gambar1');

            } else if (gId == 3) {
                if (gambararray[2] !== null) {
                    gambararray[2] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('edit_gambar2');

            } else if (gId == 4) {
                if (gambararray[3] !== null) {
                    gambararray[3] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('edit_gambar3');

            } else if (gId == 5) {
                if (gambararray[4] !== null) {
                    gambararray[4] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('edit_gambar4');

            } else if (gId == 6) {
                if (gambararray[5] !== null) {
                    gambararray[5] = imageUri;
                } else {
                    gambararray.push(imageUri);
                }
                image = document.getElementById('edit_gambar5');

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


    //function edit report
    function pa_Xlayak() {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "setreportXSokong",
                pa_ID: localStorage.getItem("pa_ID"),
                laporan_ID: localStorage.getItem("laporan_ID")

            },
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                if (myObj[0].status = "success") {
                    alert("Berjaya dikemaskini ststus");
                    hide(2);
                    getReportambil();

                } 
                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    }
    //semak laporan
    function pa_semak() {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "getreportPbyIC",
                asnafic: $("#pa_asnafic").val()
            },
            //async: false,
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
              
                $("#pa_semakDiv").show();
                $("#pa_card").show();
                $("#pa_asnafic").val("");
                $("#pa_status").show();
                $("#pa_ic").show();
                if (myObj.length == 0) {
                    $("#pa_nama").html("Tiada Laporan");
                    $("#pa_status").hide();
                    $("#pa_ic").hide();
                } else {
                    setDataasnaf(myObj[0].asnaf_nama, myObj[0].asnaf_IC, myObj[0].status_Laporan);
                }
            }

        });

    }//semak asnaf
    function pa_semakAsnafBtn() {
        var noic = $("#pa_semakAsnaficInput").val();
        var d = new Date();
        var year = d.getFullYear();
        if (noic != "") {
            //$('#model3').modal({
            //    keyboard: false,
            //    backdrop: 'static'
            //});

        $.ajax({
            type: 'GET',	//Request method: GET, POST  
            dataType: "text",
            //async: true,
            url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getPayeePaymentListing?appid=' + noic + '&id=MhKV92$nVM09!&year=',//Where to send the data
            success: function (data) {
                data = data.split('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">');
                data = data[1].split('</string>');

                //$('#model3').modal('hide');
                //$('#modellist').modal({
                //    keyboard: false,
                //    backdrop: 'static'
                //});
                var myObj = JSON.parse(data[0]);
                $("#pa_semakasnafcard").show();
                //$("#pa_semakasnafDiv").show();
                $("#pa_semakAsnaficInput").val("");
                $('#pa_semakAsnafstatus').empty();
                $("#pa_semakAsnafNama").show();

                if (myObj.length == 0) {
                    $("#pa_semakAsnafNama").hide();

                    $("#pa_semakAsnafic").html(noic);
                    //$("#icdiv").html(myObj[0].appid);
                    $('#pa_semakAsnafstatus').append('<div class="card border-primary mb-3" style="width:100%"><div class="card-body" ><p class="card-text" >Tiada rekod bantuan</p></div></div>');

                } else {
                    $("#pa_semakAsnafNama").html(myObj[0].appname);
                    $("#pa_semakAsnafic").html(noic);
                    var sizeloop = 0;
                    var indexmyObj = myObj.length-1;
                    if (myObj.length <= 3) {
                        sizeloop = myObj.length;
                    } else {
                        sizeloop = 3;
                    }

                    for (var loop = 0; loop < sizeloop; loop++) {
                        $('#pa_semakAsnafstatus').append('<div class="card" style="width:100%"><div class="card-body" style="width:100%"><h5 class="card-title">' + myObj[indexmyObj].distdesc + '</h5><p class="card-text"><small class="text-muted">' + myObj[indexmyObj].appyear + '</small></p></div></div>');
                        indexmyObj = indexmyObj - 1;
                    }

                }
                //if (myObj.length == 0) {
                   
                //    $("#pa_semakAsnafic").html(noic);
                //    $("#pa_semakAsnafstatus").html("Tiada rekod bantuan");
                //} else {
                //    $("#pa_semakAsnafic").html(noic);
                //    $("#pa_semakAsnafstatus").html(myObj[0].distdesc);
                //}
             
                //$("#icdiv").html(myObj[0].appid);
                
                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }, error: function (error) {
            }
        });
    }
    }
    //button function penolong amil
    function getReport() {
        $("#list").empty();
        var dateitem, timeitem,xtime;
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "getreportbyPA",
                pa_ID: localStorage.getItem("pa_ID")
            },
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                if (myObj.length != 0) {

                    $("#newh").show();
                    $("#newh").html(myObj.length);
                    for (var loop = 0; loop < myObj.length; loop++) {
                        dateitem = new Date(changeformatDate(myObj[loop].tarikh_Laporan) + " " + myObj[loop].masa_Laporan).getTime();
                        timeitem = new Date().getTime();
                        xtime = timeitem - dateitem;
                        //$('#list').append(' <a href="#" class="list-group-item list-group-item-action flex-column align-items-start  alink"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">Kamil</h5></div><small>Status: Diterima oleh LZNK</small></a>');
                        //$('#list').append(' <div  class="list-group-item list-group-item-action flex-column align-items-start alink" onclick="alert("DSDA")"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">' + myObj[loop].asnaf_nama + '</h5></div><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></div>');
                        if (xtime < 259200000) {
                        //if (xtime < 604800000) {

                            $('#list').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss " onclick="idreport(' + myObj[loop].laporan_ID + ',1)" ><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6> <small>' + milistodate(xtime) + ' hari lepas</small></div ><small>Jenis Bantuan: ' + setbantuan(myObj[loop].bantuan_ID)+ '</small></a >'); 
                        }
                        //else if (xtime < 604800000) {
                        //    $('#list').append('<a href="#" class="list-group-item flex-column align-items-start alink listcssM " onclick="idreport(' + myObj[loop].laporan_ID + ',1)" ><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">' + myObj[loop].asnaf_nama + '</h5></div ></a >');

                        //}
                        else {
                            $('#list').append('<a href="#" class="list-group-item flex-column align-items-start alink listcssL " onclick="idreport(' + myObj[loop].laporan_ID + ',1)" ><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6> <small>' + milistodate(xtime) + ' hari lepas</small></div ><small>Jenis Bantuan: ' + setbantuan(myObj[loop].bantuan_ID) + '</small></a >'); 

                        }

                    }
                } else {
                    $("#newh").hide();
                    $('#list').append('<div class="list-group-item  flex-column align-items-start alink listcss "><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">Tiada Laporan</h5></div ></div>');
                }

                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    } 
    
    function getReportambil() {
        $("#listambil").empty();
        $.ajax({
        type: 'post',	//Request method: GET, POST  
            data: {
                mode: "getreportbyPA2",
                pa_ID: localStorage.getItem("pa_ID")
            },
        url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
        success: function (data) {
            var myObj = JSON.parse(data);
            if (myObj.length != 0) {
                for (var loop = 0; loop < myObj.length; loop++) {
                    //$('#list').append(' <a href="#" class="list-group-item list-group-item-action flex-column align-items-start  alink"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">Kamil</h5></div><small>Status: Diterima oleh LZNK</small></a>');
                    //$('#list').append(' <div  class="list-group-item list-group-item-action flex-column align-items-start alink" onclick="alert("DSDA")"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">' + myObj[loop].asnaf_nama + '</h5></div><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></div>');
                    //$('#listambil').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss " onclick="idreport(' + myObj[loop].laporan_ID + ',2)"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">' + myObj[loop].asnaf_nama + '</h5></div ><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></a >');
                    $('#listambil').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss "  ><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6> </div ><small>Jenis Bantuan: ' + setbantuan(myObj[loop].bantuan_ID) + '</small></a >'); 

                }
            } else {
                $('#listambil').append('<div class="list-group-item  flex-column align-items-start alink listcss "><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">Tiada Laporan</h5></div ></div>');
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
    
    function setDataasnaf(nama, ic, status) {
        $("#pa_nama").html("Nama<br>" + nama);
        $("#pa_status").html("Status<br>" + checkstatus(status));
        $("#pa_ic").html("IC<br>" + ic);

    }; 
    //function pa_semakback() {
    //    hide(2);
    //    //$("#pa_semakDiv").show();
    //    //$("#pa_card").hide();
    //}
    //function pa_semakAsnafback() {
    //    $("#pa_semakasnafcard").hide();
    //    $("#pa_semakasnafDiv").show();
    //}

    //semak laporan

})();
//penolong amil
function idreport(id, type) {
    localStorage.setItem("laporan_ID", id);
    $.ajax({
        type: 'post',	//Request method: GET, POST  
        data: {
            mode: "getreportPbyID",
            laporan_ID: id
        },
        //async: false,
        url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
        //What data you want to send
        success: function (data) {
            endloading();
            var myObj = JSON.parse(data);
            if (type != 3) {
                pa_ambil();

                if (myObj[0].reportType != 1) {
                    var latlng = JSON.parse(myObj[0].lokasi_GPS);
                    setData2(myObj[0].asnaf_nama, myObj[0].asnaf_IC, myObj[0].bantuan_ID, myObj[0].qareah_ID, myObj[0].alamat, latlng.lat, latlng.lng, myObj[0].ulasan, myObj[0].gambar, myObj[0].status_Laporan);

                } else {
                    setData(myObj[0].asnaf_nama, myObj[0].asnaf_IC, myObj[0].bantuan_ID, myObj[0].qareah_ID, myObj[0].status_Laporan);

                }
            } else {


                if (myObj[0].reportType != 1) {
                    var latlng = JSON.parse(myObj[0].lokasi_GPS);
                    initMap1(latlng.lat, latlng.lng);
                    setedit(myObj[0].asnaf_nama, myObj[0].asnaf_IC, myObj[0].bantuan_ID, myObj[0].qareah_ID, myObj[0].alamat, latlng.lat, latlng.lng, myObj[0].ulasan, myObj[0].fizikal, myObj[0].kerja, myObj[0].perdapatan, myObj[0].perbelanjaan, myObj[0].tanggunganBersama, myObj[0].tanggunganAsing, myObj[0].gambar, myObj[0].daerah_ID, myObj[0].pa_ID, myObj[0].reportNoTel);

                } else {
                    setedit(myObj[0].asnaf_nama, myObj[0].asnaf_IC, myObj[0].bantuan_ID, myObj[0].qareah_ID, myObj[0].alamat, 0, 0, myObj[0].ulasan, myObj[0].fizikal, myObj[0].kerja, myObj[0].perdapatan, myObj[0].perbelanjaan, myObj[0].tanggunganBersama, myObj[0].tanggunganAsing, myObj[0].gambar, myObj[0].daerah_ID, myObj[0].pa_ID, myObj[0].reportNoTel);


                }
            }
        }

    });
    if (type == 1) {
        $("#pa_detailreport").show();
        $("#pa_listreport").hide();
        $("#pa_sokong").show();
        $("#pa_Xlayak").show();

        //$("#pa_ambil").show();

    } else if (type == 2) {
        $("#pa_sokong").hide();
        $("#pa_Xlayak").hide();
        $("#pa_detailreport").show();
        $("#pa_listreportambil").hide();
        //$("#pa_ambil").hide();

    } else {
        $("#pa_sokong").hide();
        $("#pa_Xlayak").hide();
        $("#pa_detailreport").hide();
        $("#pa_listreportambil").hide();
    }

} function setDaerah() {
    $.ajax({
        type: 'get',	//Request method: GET, POST  
        dataType: "text",
        url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getBranchListing?id=MhKV92$nVM09!',  //Where to send the data
        //What data you want to send
        success: function (data) {
            var myObj = JSON.parse(xmltostring(data));
            for (var loop = 0; loop < myObj.length - 1; loop++) {
                $('#edit_daerah').append('<option value="' + myObj[loop].brachid + '" >' + myObj[loop].branchdesc + '</option>');
            }

            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }, error: function (error) {
            alert("Server down");
        }
    });
}; 
function setjenis() {
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
                $('#edit_jenisBantuan').append('<option value="' + myObj[loop].bantuan_ID + '" >' + myObj[loop].bantuan_nama + '</option>');

            }
            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }
    });
};
function setData(nama, ic, jenisbantuan, qareah, status) {
    $("#ubah").show();
    $("#ligambar").hide();
    $("#lihuraian").hide();
    $("#limap").hide();
    $("#lialamat").hide();
    $("#latlng").hide();
    $("#nama").html("Nama: " + nama);
    $("#status").html("Status: " + checkstatus(status));
    $("#ic").html("IC: " + ic);
    //$("#kaum").html("Kaum: " + checkKaum(kaum));
    $("#jenisbantuan").html("Jenis Bantuan: " + setbantuan(jenisbantuan));

    //checkjenisbantuan(jenisbantuan);
    checkqareah(qareah);
    if (status >= 3) {
        $("#ubah").hide();

    }
} function setData2(nama, ic, jenisbantuan, qareah, alamat, lat, lng, huraian, gambar, status) {

    $("#ubah").show();
    $("#ligambar").show();
    $("#lihuraian").show();
    $("#limap").show();
    $("#lialamat").show();
    $("#latlng").show(); 

    $("#nama").html("Nama: " + nama); 

    $("#status").html("Status: " + checkstatus(status));

    $("#ic").html("IC: " + ic);

    //$("#kaum").html("Kaum: " + checkKaum(kaum));
    $("#jenisbantuan").html("Jenis Bantuan: " + setbantuan(jenisbantuan)); 

    //checkjenisbantuan(jenisbantuan);
    checkqareah(qareah);

    $("#alamat").html(alamat); 

    $("#latlng").html("Kordinat<br>Lat:" + lat + "<br>lng:" + lng); 

    $("#huraian").html(huraian); 

    var gambararray1 = JSON.parse(gambar);
    var image; 

    for (var loop = 0; loop < gambararray1.length; loop++) {
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
        image.src = "http://www.smartapp.name.my/Jejak%20Asnaf/gambar/report/" + gambararray1[loop];

    }
    initMap(lat, lng);


} function setedit(nama, ic, jenisbantuan, qareah, alamat, lat, lng, huraian, fizikal, kerja, pendapatan, perbelanjaan, tgglbersama, tgglasing, gambar, daerah, amil, reportNoTel) {
    $("#edit_daerah").val(daerah); 
    $("#edit_reportNoTel").val(reportNoTel);
    //setqareah(daerah, qareah);
    //setamil(daerah, qareah, amil);
    $("#edit_nama").val(nama); 
    $("#edit_ic").val(ic);
    if (fizikal != 0) {
        $("#edit_fizikal").val(fizikal);
    } if (kerja != 0) {
        $("#edit_kerja").val(kerja); 

    }
   
    setqareah(daerah, qareah);
    setamil(daerah, qareah, amil);
    $("#edit_pendapatan").val(pendapatan);
    $("#edit_perbelanjaan").val(perbelanjaan); 
    $("#edit_tgglsama").val(tgglbersama);
    $("#edit_tgglasing").val(tgglasing); 
    //$("#kaum").val(kaum);
    $("#edit_jenisBantuan").val(jenisbantuan);
    $("#edit_addres").val(alamat); 
    $("#edit_latlng").val("Kordinat<br>Lat:" + lat + "<br>lng:" + lng);
    $("#edit_huraian").val(huraian);
    var gambararray1 = JSON.parse(gambar);
    var image;
    for (var loop = 0; loop < gambararray1.length; loop++) {
        if (loop == 0) {
            image = document.getElementById('edit_gambar');

        } else if (loop == 1) {

            image = document.getElementById('edit_gambar1');

        } else if (loop == 2) {

            image = document.getElementById('edit_gambar2');

        } else if (loop == 3) {

            image = document.getElementById('edit_gambar3');

        } else if (loop == 4) {

            image = document.getElementById('edit_gambar4');

        } else if (loop == 5) {
            image = document.getElementById('edit_gambar5');

        }
        gambararray.push(gambararray1[loop]);

        image.src = "http://www.smartapp.name.my/Jejak%20Asnaf/gambar/report/" + gambararray1[loop];
    }


}
function initMap(lat, lng) {
    var myLatLng = { lat: parseFloat(lat), lng: parseFloat(lng) };

    var peta = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: { lat: 11.221212, lng: 11.11212121 }
    });

    var marker = new google.maps.Marker({
        position: { lat: 11.221212, lng: 11.11212121 },
        map: peta,
    });
} function initMap1(lat, lng) {
    var myLatLng = { lat: lat, lng: lng };
    var map = new google.maps.Map(document.getElementById('map2'), {
        zoom: 11,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });

}
//function checkstatus(status) {
//    if (status == 1) {
//        return "Dihantar ke Penolong Amil";
//    } else if (status == 2) {
//        return "Dibaca oleh Penolong Amil";

//    } else if (status == 3) {
//        return "Dihantar ke LZNK";

//    } else if (status == 4) {
//        return "Tidak Sokong";

//    } else if (status == 5) {
//        return "Laporan Berganda";
//    } else if (status == 6) {
//        return "Tidak Berkaitan";
//    } else if (status == 7) {
//        return "Diluluskan oleh LZNK";
//    } else if (status == 8) {
//        return "Ditolak oleh LZNK";
//    }

//}
//function checkKaum(kaum) {
//    if (kaum == 1) {
//        return "Melayu";
//    } else if (kaum == 2) {
//        return "Chinese";

//    } else if (kaum == 3) {
//        return "Indian";

//    } else if (kaum == 4) {
//        return "Lain-lain";

//    }
//} 
function checkqareah(qareah) {
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

}
function checkjenisbantuan(bantuan) {
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
            $("#jenisbantuan").html("Jenis Bantuan: " + myObj[0].bantuan_nama);

            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }
    });
}
function setqareah(daerah, qareah) {
    $('#edit_qareah').empty();
    $('#edit_qareah').append('<option value="" disabled > Pilih Kariah</option >');
    $('#edit_qareah').append('<option value="1"  selected> Tidak Pasti</option >');
    $.ajax({
        type: 'GET',	//Request method: GET, POST  
        dataType: "text",
        url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getQaryahListing?id=MhKV92$nVM09!&branchcode=' + daerah + '&qaryahcode=', //Where to send the data
        //What data you want to send
        success: function (data) {
            var myObj = JSON.parse(xmltostring(data));
            var qareahid = "";
            for (var loop = 0; loop < myObj.length; loop++) {
                qareahid = myObj[loop].codeqaryah;

                if (qareahid.trim() == qareah.trim()) {
                    $('#edit_qareah').append('<option value="' + qareahid.trim() + '" selected>' + myObj[loop].nameqaryah + '</option>');
                } else {
                    $('#edit_qareah').append('<option value="' + qareahid.trim() + '" >' + myObj[loop].nameqaryah + '</option>');
                }

            }

            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }
    });
}; function setamil(daerah, qareah, amil) {
    $('#edit_amil').empty();
    $('#edit_amil').append('<option value="" disabled selected> Pilih Penolong Amil</option >');
    $.ajax({
        type: 'GET',	//Request method: GET, POST  
        dataType: "text",
        data: {
            id: 'MhKV92$nVM09!',
            branchcode: daerah,
            qaryahcode: qareah,
            certno: "",
            icno: "",
            currentdate: ""
        },
        url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getAmilListing', //Where to send the data
        //What data you want to send
        success: function (data) {

            var myObj = JSON.parse(xmltostring(data));
            for (var loop = 0; loop < myObj.length; loop++) {
                if (myObj[loop].certno.trim() == amil) {
                    $('#edit_amil').append('<option value="' + myObj[loop].certno + '" selected>' + myObj[loop].amilinfo.name + '</option>');
                } else {
                    $('#edit_amil').append('<option value="' + myObj[loop].certno + '" >' + myObj[loop].amilinfo.name + '</option>');
                }
            }

            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }
    });
};
function pa_ambil() {
    $.ajax({
        type: 'post',	//Request method: GET, POST  
        data: {
            mode: "setreport",
            pa_ID: localStorage.getItem("pa_ID"),
            laporan_ID: localStorage.getItem("laporan_ID")

        },
        url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
        //What data you want to send
        success: function (data) {
           
            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }
    });
}
//penolong amil