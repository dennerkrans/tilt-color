function scaleRange(inputValue, inputMin, inputMax, outputMin, outputMax){
  return parseInt(inputValue / ((inputMax - inputMin) / (outputMax - outputMin)) + outputMin);
}


if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function handleOrientation(event) {
    var z = event.alpha; // Direction of device, range [0, 360]
    var x = event.beta; // Tilt front-to-back, range [-180,180]
    var y = event.gamma; // Tilt left-to-right, range [-90,90]

    console.log(z);
    console.log(x);
    console.log(y);

  }, false);
}
