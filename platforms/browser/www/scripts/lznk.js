// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var teatpcheck = 0;
var arrayqareah = [];

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    //menu
    document.getElementById("home").addEventListener("click", home);
    document.getElementById("sLaporan").addEventListener("click", sLaporan);
    //document.getElementById("profile").addEventListener("click", profile);
    document.getElementById("logout").addEventListener("click", logout);
    document.getElementById("semakLaporan").addEventListener("click", semakLaporan);
    document.getElementById("semakasnaf").addEventListener("click", semakasnaf);

    //menu
    //button penolong amil
    document.getElementById("lznk_lulus").addEventListener("click", lznk_lulus);
    document.getElementById("lznk_tolak").addEventListener("click", lznk_tolak);
    document.getElementById("lznk_semak").addEventListener("click", lznk_semak);
    document.getElementById("lznk_semakAsnafback").addEventListener("click", lznk_semakAsnafback);
    document.getElementById("lznk_semakAsnafBtn").addEventListener("click", lznk_semakAsnafBtn);
    document.getElementById("lznk_tetapqareah").addEventListener("click", lznk_tetapqareah);
    document.getElementById("lznk_lapoantidakberkaitan").addEventListener("click", lznk_lapoantidakberkaitan);
    document.getElementById("lznk_tetapbatal").addEventListener("click", lznk_tetapbatal);
    document.getElementById("lznk_btnreminder").addEventListener("click", lznk_btnreminder);
    document.getElementById("lznk_reminderback").addEventListener("click", lznk_reminderback);

    //button penolong amil

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);
        hide(1);
        getReport();
        getbantuan();
        getqareah();
        console.log(navigator.camera);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

    };
    function hide(hide) {
        $("#wrapper").removeClass("toggled");
        $("#lznk_listreportkariah").hide();
        if (hide == 1) {
            //home
            $("#lznk_detailreport").hide();
            $("#lznk_listreport").show();
            //senaraidiambil
            //$("#lznk_detailreportambil").hide();
            $("#lznk_listreportambil").hide();
            //semaklaporan
            $("#lznk_semakstatus").hide();
            $("#lznk_card").hide();
            //semakasnaf
            $("#lznk_semakasnaf").hide();
            $("#lznk_semakasnafcard").hide();
        } else if (hide == 2) {
            //slaporan
            $("#lznk_detailreport").hide();
            $("#lznk_listreport").hide();
            //senaraidiambil
            //$("#lznk_detailreportambil").hide();
            $("#lznk_listreportambil").show();
            //semaklaporan
            $("#lznk_semakstatus").hide();
            $("#lznk_card").hide();
            //semakasnaf
            $("#lznk_semakasnaf").hide();
            $("#lznk_semakasnafcard").hide();
        } else if (hide == 3) {
            //slaporan
            $("#lznk_detailreport").hide();
            $("#lznk_listreport").hide();
            //senaraidiambil
            //$("#lznk_detailreportambil").hide();
            $("#lznk_listreportambil").show();
            //semaklaporan
            $("#lznk_semakstatus").hide();
            $("#lznk_card").hide();
            //semakasnaf
            $("#lznk_semakasnaf").hide();
            $("#lznk_semakasnafcard").hide();
        } else if (hide == 4) {
            //home
            $("#lznk_detailreport").hide();
            $("#lznk_listreport").hide();
            //senaraidiambil
            //$("#lznk_detailreportambil").hide();
            $("#lznk_listreportambil").hide();
            //semaklaporan
            $("#lznk_semakstatus").show();
            $("#lznk_card").hide();
            //semakasnaf
            $("#lznk_semakasnaf").hide();
            $("#lznk_semakasnafcard").hide();
        } else if (hide == 5) {
            //home
            $("#lznk_detailreport").hide();
            $("#lznk_listreport").hide();
            //senaraidiambil
            //$("#lznk_detailreportambil").hide();
            $("#lznk_listreportambil").hide();
            //semaklaporan
            $("#lznk_semakstatus").hide();
            $("#lznk_card").hide();
            //semakasnaf
            $("#lznk_semakasnaf").show();
            $("#lznk_semakasnafcard").hide();
        }
    }
    //menu
    function home() {
        hide(1);
        getReport();
    }; function sLaporan() {
        hide(2);
        getReportqareah();


    }; function profile() {
        hide(3);


    }; function semakLaporan() {

        hide(4);

    }; function logout() {
        localStorage.clear();
        location.href = "../index.html";
    };
    function semakasnaf() {
        hide(5);
    };


    //menu

    //button function penolong amil
    function lznk_tetapqareah() {
        if (teatpcheck == 0) {
            $("#lznk_lapoantidakberkaitan").hide();
            $("#setqareahli").show();
            $("#setPA").show();
            $("#lznk_tetapbatal").show();
            $("#qareah").hide();
            $("#lznk_lapoantidakberkaitan").hide();
            teatpcheck = 1;
            setqareah(localStorage.getItem("daerah_ID"));
        } else {
            //starloading();
            $.ajax({
                type: 'post',	//Request method: GET, POST  
                data: {
                    mode: "sendkePA",
                    statusupdate: 1,
                    qareah_ID: $("#selectqareah").val(),
                    pa_ID: $("#amil").val(),
                    ic: localStorage.getItem('asnaf_ic'),
                    laporan_ID: localStorage.getItem("laporan_ID")
                },
                //async: false,
                url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
                //What data you want to send
                success: function (data) {
                    //endloading();
                    var myObj = JSON.parse(data);
                    if (myObj[0].status = "success") {
                        alert("Berjaya dikemaskini ststus");
                        hide(1);
                        getReport();
                        $('#amil').empty();
                        $('#amil').prop("disabled", true);
                        $('#amil').append('<option value="" disabled selected> Pilih Penolong Amil</option >');
                    }
                }

            });
            $("#selectqareah").val(1);
        }

    } function lznk_lapoantidakberkaitan() {
        teatpcheck = 0;
        //starloading();
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "sendkePA",
                statusupdate: 2,
                qareah_ID: "",
                pa_ID: "",
                ic: "",
                laporan_ID: localStorage.getItem("laporan_ID")
            },
            //async: false,
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                //endloading();

                var myObj = JSON.parse(data);
                if (myObj[0].status = "success") {
                    alert("Berjaya dikemaskini ststus");
                    hide(1);
                    getReport();

                }
            }

        });
    } function lznk_tetapbatal() {
        $("#lznk_lapoantidakberkaitan").show();
        $("#setqareahli").hide();
        $("#setPA").hide();
        $("#lznk_tetapbatal").hide();
        $("#qareah").show();
        $("#lznk_lapoantidakberkaitan").show();
        teatpcheck = 0;
        $('#amil').empty();
        $('#amil').prop("disabled", true);
        $('#amil').append('<option value="" disabled selected> Pilih Penolong Amil</option >');
    }
    function lznk_lulus() {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "setreportLulus",
                lznk_ID: localStorage.getItem("lznk_ID"),
                laporan_ID: localStorage.getItem("laporan_ID")

            },
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                if (myObj[0].status = "success") {
                    alert("Berjaya Kemaskini Status");
                    hide(1);
                    getReport();
                }
                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    } function lznk_tolak() {
        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "setreportTolak",
                lznk_ID: localStorage.getItem("lznk_ID"),
                laporan_ID: localStorage.getItem("laporan_ID")

            },
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                if (myObj[0].status = "success") {
                    alert("Berjaya Kemaskini Status");
                    hide(1);

                }

                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    }
    //semak laporan
    function lznk_semak() {
        $("#lznk_status").empty();
        var dateitem, timeitem, xtime;

        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "getreportPbyIC",
                asnafic: $("#lznk_asnafic").val()
            },
            //async: false,
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                $("#lznk_semakDiv").show();
                $("#lznk_card").show();
                $("#lznk_asnafic").val("");
                if (myObj.length == 0) {
                    $("#lznk_nama").html("Tiada Laporan");
                    $("#lznk_status").hide();
                    $("#lznk_ic").hide();
                } else {
                    var sizeloop = 0;
                    if (myObj.length >= 3) {
                        sizeloop = 3;
                    } else {
                        sizeloop = myObj.length;
                    }
                    setDatamodel(myObj[0].asnaf_nama, myObj[0].asnaf_IC);
                    for (var loop = 0; loop < sizeloop; loop++) {

                        dateitem = new Date(changeformatDate(myObj[loop].tarikh_Laporan) + " " + myObj[loop].masa_Laporan).getTime();

                        timeitem = new Date().getTime();

                        xtime = timeitem - dateitem;

                        //$('#list').append(' <a href="#" class="list-group-item list-group-item-action flex-column align-items-start  alink"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">Kamil</h6></div><small>Status: Diterima oleh LZNK</small></a>');
                        //$('#list').append(' <div  class="list-group-item list-group-item-action flex-column align-items-start alink" onclick="alert("DSDA")"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6></div><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></div>');

                        $('#lznk_status').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss " style="margin:1.5% 0" ><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + setbantuan(myObj[loop].bantuan_ID) + '</h6> <small>' + milistodate(xtime) + ' hari lepas</small></div ><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></a >');
                    }
                }
            }

        });

    }//semak asnaf
    function lznk_semakAsnafBtn() {
        var noic = $("#lznk_semakAsnaficInput").val();
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
                    
                    //$('#model3').modal('hide');
                    //$('#modellist').modal({
                    //    keyboard: false,
                    //    backdrop: 'static'
                    //});
                    var myObj = JSON.parse(xmltostring(data));
                    $("#lznk_semakasnafcard").show();
                    $("#lznk_semakasnafDiv").show();
                    $("#lznk_semakAsnaficInput").val("");
                    if (myObj.length == 0) {
                        $("#lznk_semakAsnafic").html(noic);
                        //$("#icdiv").html(myObj[0].appid);
                        $('#lznk_semakAsnafstatus').append('<div class="card border-primary mb-3" style="width:100%"><div class="card-body" ><p class="card-text" >Tiada rekod bantuan</p></div></div>');

                    } else {
                        $("#lznk_semakAsnafic").html(noic);
                        $("#lznk_semakAsnafNama").html(myObj[0].appname );
                        var sizeloop = 0;
                        if (myObj.length >= 3) {
                            sizeloop = 3;
                        } else {
                            sizeloop = myObj.length;
                        }

                        for (var loop = 0; loop < sizeloop; loop++) {
                            $('#lznk_semakAsnafstatus').append('<div class="card" style="width:100%"><div class="card-body" style="width:100%"><h6 class="card-title">' + myObj[loop].distdesc + '</h6><p class="card-text"><small class="text-muted">' + myObj[loop].appyear + '</small></p></div></div>');

                        }

                    }
                    //if (myObj.length == 0) {

                    //    $("#lznk_semakAsnafic").html(noic);
                    //    $("#lznk_semakAsnafstatus").html("Tiada rekod bantuan");
                    //} else {
                    //    $("#lznk_semakAsnafic").html(noic);
                    //    $("#lznk_semakAsnafstatus").html(myObj[0].distdesc);
                    //} 

                    //$("#icdiv").html(myObj[0].appid);

                    //Here you will receive data from server
                    //Do what you want to do with data                         
                    console.log(data)	 //This is a example, like we want to print the result
                }, error: function (error) {
                    alert(JSON.stringify(error));
                }
            });
        }
    }
    //button function penolong amil
    $("#selectqareah").change(function () {
        setamil(localStorage.getItem('daerah_ID'), $("#selectqareah").val());

        $("#amil").prop("disabled", false);


    });
    function getReport() {
        var dateitem, timeitem, xtime;
        //starloading();
        $("#list").empty();

        $.ajax({
            type: 'post',	//Request method: GET, POST  
            data: {
                mode: "getreportByDaerahtiadaamil",
                daerah_ID: localStorage.getItem("daerah_ID")
            },
            url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(data);
                $("#newh").show();
                $("#newh").html(myObj.length);
                if (myObj.length != 0) {
                    for (var loop = 0; loop < myObj.length; loop++) {

                        dateitem = new Date(changeformatDate(myObj[loop].tarikh_Laporan) + " " + myObj[loop].masa_Laporan).getTime();

                        timeitem = new Date().getTime();

                        xtime = timeitem - dateitem;

                        //$('#list').append(' <a href="#" class="list-group-item list-group-item-action flex-column align-items-start  alink"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">Kamil</h6></div><small>Status: Diterima oleh LZNK</small></a>');
                        //$('#list').append(' <div  class="list-group-item list-group-item-action flex-column align-items-start alink" onclick="alert("DSDA")"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6></div><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></div>');
                        //if (xtime < 604800000) {
                        if (xtime < 259200000) {

                            $('#list').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss " onclick="idreport(' + myObj[loop].laporan_ID + ',1)" ><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6> <small>' + milistodate(xtime) + ' hari lepas</small></div ><small>Jenis Bantuan: ' + setbantuan(myObj[loop].bantuan_ID) + '</small></a >');
                        }
                        //else if (xtime < 604800000) {
                        //    $('#list').append('<a href="#" class="list-group-item flex-column align-items-start alink listcssM " onclick="idreport(' + myObj[loop].laporan_ID + ',1)" ><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6></div ></a >');

                        //}
                        else {
                            $('#list').append('<a href="#" class="list-group-item flex-column align-items-start alink listcssL " onclick="idreport(' + myObj[loop].laporan_ID + ',1)" ><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6> <small>' + milistodate(xtime) + ' hari lepas</small></div ><small>Jenis Bantuan: ' + setbantuan(myObj[loop].bantuan_ID) + '</small></a >');

                        }
                        //$('#list').append(' <a href="#" class="list-group-item list-group-item-action flex-column align-items-start  alink"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">Kamil</h6></div><small>Status: Diterima oleh LZNK</small></a>');
                        //$('#list').append(' <div  class="list-group-item list-group-item-action flex-column align-items-start alink" onclick="alert("DSDA")"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6></div><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></div>');
                        //$('#list').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss " onclick="idreport(' + myObj[loop].laporan_ID + ',1)"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6></div ><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></a >');

                    }
                } else {
                    $("#newh").hide();
                    $('#list').append('<div class="list-group-item  flex-column align-items-start alink listcss "><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">Tiada Laporan</h6></div ></div>');
                }
                //endloading();

                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    } function getReportqareah() {
        var dateitem, timeitem, xtime, lama, baru, total, namaqareah;
        var result;
        $("#listqareah").empty();
        if (arrayqareah.length != 0) {
            //getreportbydaerahandqareah
            //for (var loop = 0; loop < arrayqareah.length; loop++) {
                //$('#listqareah').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss " onclick="codeqareah(' + arrayqareah[loop].codeqaryah + ')"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + arrayqareah[loop].nameqaryah + '</h6></div ></a >');
                $.ajax({
                    type: 'post',	//Request method: GET, POST  
                    data: {
                        mode: "getreportbydaerahandqareah",
                        qareah_ID: arrayqareah
                    },
                    url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
                    //What data you want to send
                    //beforeSend: function () {
                    //    starloading();
                    //},
                    success: function (data) {
                        console.log(data);
                        localStorage.setItem('databyqareah', data);
                        var myObj = JSON.parse(data);
                        if (myObj.length != 0) {
                            for (var loop = 0; loop < myObj.length; loop++) {
                                lama = 0;
                                baru = 0;
                                total = 0;
                                if (myObj[loop].result.length != 0) {

                                    for (var loop2 = 0; loop2 < myObj[loop].result.length; loop2++) {
                                        dateitem = new Date(changeformatDate(myObj[loop].result[loop2].tarikh_Laporan) + " " + myObj[loop].result[loop2].masa_Laporan).getTime();

                                        timeitem = new Date().getTime();

                                        xtime = timeitem - dateitem;
                                        total = myObj[loop].result.length;
                                        //if (xtime < 604800000) {
                                        if (xtime < 259200000) {
                                            baru++;
                                        }
                                        //else if (xtime < 604800000) {
                                        //    $('#list').append('<a href="#" class="list-group-item flex-column align-items-start alink listcssM " onclick="idreport(' + myObj[loop].laporan_ID + ',1)" ><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6></div ></a >');

                                        //}
                                        else {
                                            lama++;

                                        }
                                    }
                                }
                                $('#listqareah').append('<li class=" d-flex justify-content-between align-items-center listqareah" onclick="listbyqareah('+loop+')"><h6 style="width:60%">' + myObj[loop].qareahnama + ' </h6 > <span class="badge badge-success" id="">' + baru + '</span> <span class="badge badge-danger" id="">' + lama + '</span> <span class="badge badge-primary" id="">' + total + '</span></li > ');


                            }
                        }
                        //Here you will receive data from server
                        //Do what you want to do with data                         
                        console.log(data)	 //This is a example, like we want to print the result
                    }
                });
                //$('#listqareah').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss " onclick="codeqareah(' + arrayqareah[loop].codeqaryah + ')"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + arrayqareah[loop].nameqaryah + '</h6></div ><small>Status: ' + checkstatus(arrayqareah[loop].status_Laporan) + '</small></a >');

            //}
        } 
        //    $.ajax({
        //    type: 'post',	//Request method: GET, POST  
        //        data: {
        //            mode: "getreportstatuslulus",
        //            daerah_ID: localStorage.getItem("daerah_ID")
        //        },
        //    url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
        //        //What data you want to send
        //    success: function (data) {
        //        var myObj = JSON.parse(data);
        //        if (myObj.length != 0) {
        //            for (var loop = 0; loop < myObj.length; loop++) {
        //                //$('#list').append(' <a href="#" class="list-group-item list-group-item-action flex-column align-items-start  alink"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">Kamil</h6></div><small>Status: Diterima oleh LZNK</small></a>');
        //                //$('#list').append(' <div  class="list-group-item list-group-item-action flex-column align-items-start alink" onclick="alert("DSDA")"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6></div><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></div>');
        //                $('#listqareah').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss " onclick="idreport(' + myObj[loop].laporan_ID + ',2)"><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + myObj[loop].asnaf_nama + '</h6></div ><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></a >');

        //            }
        //        } else {
        //            $('#listqareah').append('<div class="list-group-item  flex-column align-items-start alink listcss "><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">Tiada Laporan</h6></div ></div>');
        //        }

        //            //Here you will receive data from server
        //            //Do what you want to do with data                         
        //            console.log(data)	 //This is a example, like we want to print the result
        //        }
        //});
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

    function setDatamodel(nama, ic) {
        $("#lznk_nama").html("Nama<br>" + nama);
        //$("#lznk_status").html("Status<br>" + checkstatus(status));
        $("#lznk_ic").html("IC<br>" + ic);

    }; function setDataasnaf(nama, ic, status) {
        $("#lznk_nama").html("Nama<br>" + nama);
        $("#lznk_status").html("Status<br>" + checkstatus(status));
        $("#lznk_ic").html("IC<br>" + ic);

    };

    function lznk_semakAsnafback() {
        $("#lznk_semakasnafcard").hide();
        $("#lznk_semakasnafDiv").show();
    }

    //semak laporan
    function setqareah(daerah) {
        $('#selectqareah').empty();
        $('#selectqareah').append('<option value="" disabled selected> Pilih Kariah</option >');
        $('#selectqareah').append('<option value="1"  selected>Tidak Pasti</option >');

        $.ajax({
            type: 'GET',	//Request method: GET, POST  
            dataType: "text",
            url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getQaryahListing?id=MhKV92$nVM09!&branchcode=' + daerah + '&qaryahcode=', //Where to send the data
            //What data you want to send
            success: function (data) {
                var myObj = JSON.parse(xmltostring(data));
                for (var loop = 0; loop < myObj.length; loop++) {
                    $('#selectqareah').append('<option value="' + myObj[loop].codeqaryah + '" >' + myObj[loop].nameqaryah + '</option>');
                }

                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    }; function setamil(daerah, qareah) {
        $('#amil').empty();
        $('#amil').append('<option value="" disabled selected> Pilih Penolong Amil</option >');

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
                    $('#amil').append('<option value="' + myObj[loop].certno + '" selected>' + myObj[loop].amilinfo.name + '</option>');
                }

                //Here you will receive data from server
                //Do what you want to do with data                         
                console.log(data)	 //This is a example, like we want to print the result
            }
        });
    };


})();

//LZNK
function listbyqareah(id) {
    var arrays = JSON.parse(localStorage.getItem('databyqareah'));
    $("#lznk_listreportkariah").show();
    $("#lznk_listreportambil").hide();
    $('#listpermohonan').empty();
    if (arrays[id].result.length != 0) {
        for (var loop = 0; loop < arrays[id].result.length; loop++) {
            dateitem = new Date(changeformatDate(arrays[id].result[loop].tarikh_Laporan) + " " + arrays[id].result[loop].masa_Laporan).getTime();
            timeitem = new Date().getTime();
            xtime = timeitem - dateitem;
            //$('#list').append(' <a href="#" class="list-group-item list-group-item-action flex-column align-items-start  alink"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">Kamil</h5></div><small>Status: Diterima oleh LZNK</small></a>');
            //$('#list').append(' <div  class="list-group-item list-group-item-action flex-column align-items-start alink" onclick="alert("DSDA")"><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">' + myObj[loop].asnaf_nama + '</h5></div><small>Status: ' + checkstatus(myObj[loop].status_Laporan) + '</small></div>');
            if (xtime < 259200000) {
                //if (xtime < 604800000) {

                $('#listpermohonan').append('<a href="#" class="list-group-item flex-column align-items-start alink listcss " onclick="idreport(' + arrays[id].result[loop].laporan_ID + ',2)" ><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + arrays[id].result[loop].asnaf_nama + '</h6> <small>' + milistodate(xtime) + ' hari lepas</small></div ><small>Jenis Bantuan: ' + setbantuan(arrays[id].result[loop].bantuan_ID) + '</small></a >');
            }
            //else if (xtime < 604800000) {
            //    $('#list').append('<a href="#" class="list-group-item flex-column align-items-start alink listcssM " onclick="idreport(' + myObj[loop].laporan_ID + ',1)" ><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">' + myObj[loop].asnaf_nama + '</h5></div ></a >');

            //}
            else {
                $('#listpermohonan').append('<a href="#" class="list-group-item flex-column align-items-start alink listcssL " onclick="idreport(' + arrays[id].result[loop].laporan_ID + ',2)" ><div class="d-flex w-100 justify-content-between" ><h6 class="mb-1">' + arrays[id].result[loop].asnaf_nama + '</h6> <small>' + milistodate(xtime) + ' hari lepas</small></div ><small>Jenis Bantuan: ' + setbantuan(arrays[id].result[loop].bantuan_ID) + '</small></a >');

            }

        }
    } else {
        $('#listpermohonan').append('<div class="list-group-item  flex-column align-items-start alink listcss "><div class="d-flex w-100 justify-content-between" ><h5 class="mb-1">Tiada Laporan</h5></div ></div>');
    }
}
function idreport(id, type) {
    localStorage.setItem("laporan_ID", id);


    $.ajax({
        type: 'post',	//Request method: GET, POST  
        data: {
            mode: "getreportPbyID",
            laporan_ID: id
        },
        //async: true,
        url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
        //What data you want to send
        success: function (data) {
            endloading();
            $("#lznk_tetapbatal").hide();

            var myObj = JSON.parse(data);
            localStorage.setItem("asnaf_ic", myObj[0].asnaf_IC);
            if (myObj[0].reportType != 1) {

                var latlng = JSON.parse(myObj[0].lokasi_GPS);
                initMap(latlng.lat, latlng.lng);
                setData2(myObj[0].asnaf_nama, myObj[0].asnaf_IC, myObj[0].kaum, myObj[0].bantuan_ID, myObj[0].qareah_ID, myObj[0].alamat, latlng.lat, latlng.lng, myObj[0].ulasan, myObj[0].gambar, myObj[0].status_Laporan);

            } else {
                setData(myObj[0].asnaf_nama, myObj[0].asnaf_IC, myObj[0].kaum, myObj[0].bantuan_ID, myObj[0].qareah_ID, myObj[0].status_Laporan);

            }
        }

    });
    if (type == 1) {
        $("#lznk_detailreport").show();
        $("#lznk_listreport").hide();
        $("#reminderbtn").hide();
        $("#setqareah").show();
    } else if (type == 2) {

        $("#lznk_detailreport").show();
        $("#lznk_listreportambil").hide();
        $("#lznk_listreportkariah").hide();
        $("#reminderbtn").show();
        $("#setqareah").hide();
    }

}

function setData(nama, ic, kaum, jenisbantuan, qareah, status) {
    $("#ligambar").hide();
    $("#lihuraian").hide();
    $("#limap").hide();
    $("#ubah").show();
    $("#lialamat").hide();
    $("#latlng").hide();
    $("#nama").html("Nama: " + nama);
    $("#status").html("Status: " + checkstatus(status));
    $("#ic").html("IC: " + ic);
    //$("#kaum").html("Kaum: " + checkKaum(kaum));
    checkjenisbantuan(jenisbantuan);
    if (qareah != "" && qareah != '1') {

        checkqareah(qareah);
    } else {
        $("#qareah").html("Qareah : Tidak di tetapkan");

    }
    if (status != 3) {
        $("#ubah").hide();
    }

} function setData2(nama, ic, kaum, jenisbantuan, qareah, alamat, lat, lng, huraian, gambar, status) {
    $("#nama").html("Nama: " + nama);
    $("#ubah").show();

    $("#status").html("Status: " + checkstatus(status));
    $("#ic").html("IC: " + ic);
    //$("#kaum").html("Kaum: " + checkKaum(kaum));
    checkjenisbantuan(jenisbantuan);
    if (qareah != ""&&qareah != '1') {
        checkqareah(qareah);
    } else {
        $("#qareah").html("Qareah : Tidak di tetapkan");

    } $("#alamat").html(alamat);
    $("#latlng").html("Kordinat<br>Lat:" + lat + "<br>lng:" + lng);
    $("#huraian").html(huraian);
    var gambararray = JSON.parse(gambar);
    var image;
    if (status != 3) {

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
} function checkKaum(kaum) {
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

} function getqareah() {
    $.ajax({
        type: 'GET',	//Request method: GET, POST  
        dataType: "text",
        data: {
            id: "MhKV92$nVM09!",
            branchcode: localStorage.getItem('daerah_ID'),
            qaryahcode: ""
        },
        url: 'http://websvc.zakatkedah.com.my/webzakatkedah/WebServiceJejakAsnaf.asmx/getQaryahListing', //Where to send the data
        //What data you want to send
        success: function (data) {
            arrayqareah = JSON.parse(xmltostring(data));

            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }
    });

} function checkjenisbantuan(bantuan) {
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
//LZNK
