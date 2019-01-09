
$("#menu-toggle").click(function (e) {
    var check = $("#wrapper").hasClass("toggled");
    if (!check) {
        $("#wrapper").addClass("toggled");
    } else if (check) {
        $("#wrapper").removeClass("toggled");
    }
   
});
//$("body").click(function (e) {
//    var check = $("#wrapper").hasClass("toggled");
//    if (check) {
//        $("#wrapper").toggleClass("toggled");

//    }

   
//});
var myElement = document.getElementById('body');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("panleft panright tap", function (ev) {
    var check = $("#wrapper").hasClass("toggled");
    if (ev.type == "panright" && !check) {
        $("#wrapper").addClass("toggled");
    } else if (ev.type == "panleft" && check) {
        $("#wrapper").removeClass("toggled");
    } else if (ev.type == "tap" && check) {
        $("#wrapper").removeClass("toggled");
    }
});
//var myElement = document.getElementById('body');

//var mc = new Hammer(myElement);

////enable all directions
//mc.get('swipe').set({
//    direction: Hammer.DIRECTION_ALL,
//    threshold: 1,
//    velocity: 0.1
//});

//// listen to events...
//mc.on("swipeleft swiperight", function (ev) {

//    var check = $("#wrapper").hasClass("toggled");
//    if (ev.type == "swiperight" && !check) {
//        $("#wrapper").addClass("toggled");
//    } else if (ev.type == "swipeleft" && check) {
//        $("#wrapper").removeClass("toggled");
//    }
   
//});
//var myElement2 = document.getElementById('sidebar-wrapper');

//var mc1 = new Hammer(myElement2);

////enable all directions
//mc1.get('swipe').set({
//    direction: Hammer.DIRECTION_ALL,
//    threshold: 1,
//    velocity: 0.1
//});

//// listen to events...
//mc1.on("swipeleft swiperight", function (ev) {
    
//    var check = $("#wrapper").hasClass("toggled");
//    if (ev.type == "swiperight" && !check) {
//        $("#wrapper").addClass("toggled");
//    } else if (ev.type == "swipeleft" && check) {
//        $("#wrapper").removeClass("toggled");
//    }
   
//});
//var myElement3 = document.getElementById('detail');

//var mc2 = new Hammer(myElement3);

////enable all directions
//mc2.get('swipe').set({
//    direction: Hammer.DIRECTION_ALL,
//    threshold: 1,
//    velocity: 0.1
//});

//// listen to events...
//mc2.on("swipeleft swiperight", function (ev) {
    
//    var check = $("#wrapper").hasClass("toggled");
//    if (ev.type == "swiperight" && !check) {
//        $("#wrapper").addClass("toggled");
//    } else if (ev.type == "swipeleft" && check) {
//        $("#wrapper").removeClass("toggled");
//    }
   
//});