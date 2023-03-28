// get elements
var welcomeBox = document.getElementsByClassName("welcome");
var bootImg = document.getElementsByClassName("boot");
var topBar = document.getElementsByTagName("ul");
var allApps = document.getElementsByClassName("app");

// duration in milliseconds 
var welcomeDuration = 3000;
var bootDuration = 1500;

// "boot" up
setTimeout(function() {
    bootImg[0].style.display = "none";
    welcomeBox[0].style.display = "block";
}, bootDuration);

// load ui
setTimeout(function() {
    topBar[0].style.display = "block";
    welcomeBox[0].style.display = "none";
    for (var i = 0; i < allApps.length; i++) {
        var element = allApps[i];
        element.style.display = "block";
    }
}, welcomeDuration);

// window gotta load first otherwise it breaks
window.onload = function() {

    // makes all 'apps' on screen draggable across page
    for (let i = 0; i < allApps.length; i++) {
        makeDraggable(allApps[i]);
    }

    function makeDraggable(draggable) {

        var isDragging = false;
        var x, y;
        var offsetX = 0, offsetY = 0;

        draggable.addEventListener("mousedown", function(event) {
            event.preventDefault(); // prevent browsers from doing weird image drag
            isDragging = true;

            x = event.clientX; // initial x pos
            y = event.clientY; // initial y pos

            offsetX = draggable.offsetLeft - x; // offset between initial x and mouse
            offsetY = draggable.offsetTop - y; // offset between initial y and mouse
            
            // effect when being dragged
            draggable.style.filter = "invert(100%)";

        });

        document.addEventListener("mouseup", function(event) {
            isDragging = false; // no longer being dragged if mouse is up
            
            // remove effect when not being dragged
            draggable.style.filter = "invert(0%)";

        });

        document.addEventListener("mousemove", function(event) {
            // will only move if the image has been triggered to drag
            if (isDragging) {
                // calculates new pos
                var x = event.clientX + offsetX;
                var y = event.clientY + offsetY;

                // sets new pos of image
                draggable.style.left = x + "px";
                draggable.style.top = y + "px";
            }
        });

    }

};


