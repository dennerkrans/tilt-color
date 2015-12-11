//Add a map function to the Number prototype
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

var socket = io();
//Listen to the colors message and put the rgb value to background-color of body
socket.on('colors', function(color) {
    $('body').css('background-color', color);
});

var handleOrientation = function (event) {
  var z = event.alpha; // Direction of device, range [0, 360]
  var x = event.beta; // Tilt front-to-back, range [-180,180]
  var y = event.gamma; // Tilt left-to-right, range [-90,90]

  // Limit the max and min of x to 90 and -90
  if (x < -90) {x = -90;}
  if (x > 90) {x = 90;}

  //Map the values to the 0-255 range
  z = z.map(0, 360, 0, 255);
  x = x.map(-90, 90, 0, 255);
  y = y.map(-90, 90, 0, 255);

  //Emit rgb value to server
  socket.emit('colors', 'rgb(' + Math.round(z) + ',' + Math.round(x) + ',' + Math.round(y) + ')');
};

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation, false);
}
