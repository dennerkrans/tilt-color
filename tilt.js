Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

var o = document.getElementById('output');

var handleOrientation = function (event) {
  var z = event.alpha; // Direction of device, range [0, 360]
  var x = event.beta; // Tilt front-to-back, range [-180,180]
  var y = event.gamma; // Tilt left-to-right, range [-90,90]

  if (x < -90)
    x = -90;
  if (x > 90)
    x = 90;

  z = z.map(0, 360, 0, 255);
  x = x.map(-90, 90, 0, 255);
  y = y.map(-90, 90, 0, 255);

  // o.innerHTML = 'z: ' + z + '\n';
  // o.innerHTML += 'x: ' + x + '\n';
  // o.innerHTML +='y: ' + y;

  $('body').css('background-color', 'rgb(' + Math.round(z) + ',' + Math.round(x) + ',' + Math.round(y) + ')');
};

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation, false);
}
