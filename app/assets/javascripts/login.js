var leftPos = 900;
var time = 50;
function mouseMoveTitle() {
  $('#mouseHead').css({'left': (leftPos-21) + 'px'});
  $('#mouseLeftEar').css({'left': (leftPos-16) + 'px'});
  $('#mouseRightEar').css({'left': (leftPos+24) + 'px'});
  $('#mouseBody').css({'left': (leftPos+4) + 'px'});
  $('#mouseFloor').css({'left': (leftPos+6) + 'px'});
  $('#mouseTail').css({'left': (leftPos+64) + 'px'});
  $('#mouseNose').css({'left': (leftPos-13) + 'px'});
  $('#mouseWhisker1').css({'left': (leftPos-35) + 'px'});
  $('#mouseWhisker2').css({'left': (leftPos-34) + 'px'});
  $('#mouseWhisker3').css({'left': (leftPos-33) + 'px'});
  $('#mouseWhisker4').css({'left': leftPos + 'px'});
  $('#mouseWhisker5').css({'left': leftPos + 'px'});
  $('#mouseWhisker6').css({'left': leftPos + 'px'});
}
function animate() {
   setTimeout(function() {
      leftPos -=10;  
      mouseMoveTitle();
    }, [time]);
  time+=20;
}
//$(document).ready(function(){
//  $('#login_form').on('click',function() { 
window.onload = function() {
    showMouse();
    mouseMoveTitle();
    for (i=1; i<250; i++) {
    animate();
    }
    leftPos = 2200;
    mouseMoveTitle();
};  
