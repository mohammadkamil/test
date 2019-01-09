var arraybantuan = [];
function checkstatus(status) {
    if (status == 1) {
        return "Dihantar ke Penolong Amil";
    } else if (status == 2) {
        return "Dibaca oleh Penolong Amil";

    } else if (status == 3) {
        return "Dihantar ke LZNK";

    } else if (status == 4) {
        return "Tidak Sokong";

    } else if (status == 5) {
        return "Laporan Berganda";
    } else if (status == 6) {
        return "Tidak Berkaitan";
    } else if (status == 7) {
        return "Diluluskan oleh LZNK";
    } else if (status == 8) {
        return "Ditolak oleh LZNK";
    }

}
function milistodate(date) {
    var day = date / 86400000;
    day = Math.round(day);
    
    if (day <= 1) {
        day = 1;
    } 
    return day;
}

function getbantuan(bantuan) {
    $.ajax({
        type: 'post',	//Request method: GET, POST  
        data: {
            mode: "getjenisbantuan",
            bantuan_ID: bantuan
        },
        async: false,
        url: 'http://www.smartapp.name.my/Jejak%20Asnaf/get_data.php',  //Where to send the data
        //What data you want to send
        success: function (data) {
            var myObj = JSON.parse(data);
            arraybantuan = JSON.parse(data);
            //$("#jenisbantuan").html("Jenis Bantuan: " + myObj[0].bantuan_nama);
            //Here you will receive data from server
            //Do what you want to do with data                         
            console.log(data)	 //This is a example, like we want to print the result
        }
    });
}
function setbantuan(bantuan) {
    var namebantuan;
    for (var xx = 0; xx < arraybantuan.length; xx++) {
        if (arraybantuan[xx].bantuan_ID == bantuan) {
            namebantuan = arraybantuan[xx].bantuan_nama;
            break;
        }
    }
    return namebantuan;
}
function starloading() {
    $('#model3').modal({
        keyboard: false,
        backdrop: 'static'
    });
}
function endloading() {
    $('#model3').modal('hide');
} function changeformatDate(date) {
    date = date.split("/");
    return date[2] + "-" + date[1] + "-" + date[0];
} function xmltostring(data) {
    data = data.split('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">');
    data = data[1].split('</string>');
    return data[0];
} function checkpassword() {
    if ($('#password').val() == $('#passwordC').val()) {
        $('#passwordC').addClass('samapassword');
        $('#password').addClass('samapassword');
        $('#passwordC').removeClass('xsamapassword');
        $('#password').removeClass('xsamapassword');
    } else {
        $('#passwordC').addClass('xsamapassword');
        $('#password').addClass('xsamapassword');
        $('#passwordC').removeClass('samapassword');
        $('#password').removeClass('samapassword');
    }
}
$(document).ajaxStart(function () {
    starloading();
});
$(document).ajaxStop(function () {
    endloading();
});