//based on https://dribbble.com/shots/3913847-404-page

let pageX = document.width();
let pageY = document.height();
let mouseY=0;
let mouseX=0;

document.mousemove(function( event ) {
  //verticalAxis
  mouseY = event.pageY;
  yAxis = (pageY/2-mouseY)/pageY*300; 
  //horizontalAxis
  mouseX = event.pageX / -pageX;
  xAxis = -mouseX * 100 - 100;

  document.getElementByClassName("box__ghost-eyes").css({ 'transform': 'translate('+ xAxis +'%,-'+ yAxis +'%)' }); 
  
  //console.log('X: ' + xAxis);
  
});
