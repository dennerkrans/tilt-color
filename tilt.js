function scaleRange(inputValue, inputMax){
  return parseInt(inputValue / (inputMax / 255));
}

var o = document.getElementById('output');

var handleOrientation = function (event) {
  var z = scaleRange(Math.round(event.alpha), 360); // Direction of device, range [0, 360]
  var x = Math.round(event.beta); // Tilt front-to-back, range [-180,180]
  x += 180;
  x = scaleRange(x, 360);
  var y = Math.round(event.gamma); // Tilt left-to-right, range [-90,90]

  console.log(z);
  console.log(x);
  console.log(y);

  o.innerHTML = 'z: ' + Math.round(z) + '\n';
  o.innerHTML += 'x: ' + Math.round(x) + '\n';
  o.innerHTML +='y: ' + Math.round(y);

  $('.color').css('background-color', 'rgb(' + z + ',' + x + ',' + y + ')');
};

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation, false);
}
