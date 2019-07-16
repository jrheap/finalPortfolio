$(document).ready(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
  });




  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 800 * i;
    }
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100000
  });

var marginLeft = 0;
setInterval(function () {
    $("#walking-manOne").css({ 'margin-left': marginLeft + 'px' })
    marginLeft = marginLeft + 1
    console.log(marginLeft)
    if (marginLeft === 1500) {
        console.log("reached")
        marginLeft = 0;
    }
}, 20)

setInterval(function () {
  $("#walking-manTwo").css({ 'margin-left': marginLeft + 'px' })
  marginLeft = marginLeft + 1
  console.log(marginLeft)
  if (marginLeft === 1500) {
      console.log("reached")
      marginLeft = 0;
  }
}, 20)


setInterval(function () {
  $("#walking-manThree").css({ 'margin-left': marginLeft + 'px' })
  marginLeft = marginLeft + 1
  console.log(marginLeft)
  if (marginLeft === 1500) {
      console.log("reached")
      marginLeft = 0;
  }
}, 20)
setInterval(function () {
  $("#walking-manFour").css({ 'margin-left': marginLeft + 'px' })
  marginLeft = marginLeft + 1
  console.log(marginLeft)
  if (marginLeft === 1500) {
      console.log("reached")
      marginLeft = 0;
  }
}, 20)








