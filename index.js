"use strict";

let btn = document.querySelector('#btn');
let output = document.querySelector('#output');
var error = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
};
var canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 400;
canvas.style.border = "1px soild";


function attemptPosition(){
    console.dir(navigator);
    if ( navigator.geolocation){
        
        let params = {enableHighAccuracy:true, timeout: 3600, maxmumAge: 55555};
        navigator.geolocation.getCurrentPosition(gotPosition, badStuff, params);
        document.querySelector("body").appendChild(canvas);
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src="http://maps.googleapis.com/maps/api/staticmap?center=45.3485939,-75.7555747&zoom=14&markers=color:red%7C45.3485939,-75.7555747&size=400x400&key=AIzaSyBDuow8enb_W6mfmga8kTMx_iSXFQN9UEw";
        img.onload = function(){
            ctx.drawImage(img,0,0);
        }
    }else{
        alert("Your browser does NOT support Geolocation");
    }
}
function gotPosition(position){
    //this runs when we have a position
    output.innerHTML += "Latitude: " + position.coords.latitude + "</br>";
    output.innerHTML += "Longitude: " + position.coords.longitude + "</br>";
    output.innerHTML += "Accuracy: " + position.coords.accuracy + "</br>";
}

function badStuff(err){
    //this runs when the grolocation call FAILs
    alert (error[err.code]);
    
}

btn.addEventListener("click",attemptPosition);
