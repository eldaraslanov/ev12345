// $(".btnNext").click(function(){
//     nextSlide()
// })
// $(".btnPrev").click(function(){
//     prevSlide();
// })
// var imgArray=[
//     "http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/bgn-home-slider-01.jpg",
//     "http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/bgn-home-slider-02.jpg",
//     "http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/bgn-home-slider-03.jpg"

// ]
// $('.slide1').css('background-image', 'url(' + imgArray[0] + ')');
// var slideItem=$(".slide1").children()
// $(".slide-item").eq(0).show(1000)
// var pos=1;
// function nextSlide(){
//    console.log(imgArray.length)
//   var slideImg=  $(".slide1").css("backgroundImage");
//   slideImg=imgArray[pos]
//   $('.slide1').css('background-image', 'url(' + slideImg + ')');
//   $(".slide-item").eq(pos-1).hide()

//   $(".slide-item").eq(pos).show(1000)

//   pos++
//   if(pos>=imgArray.length){
//       pos=0;
//   }

// }
// function prevSlide(){
//    var slideImg=  $(".slide1").css("backgroundImage");
//    slideImg=imgArray[pos]

//    $('.slide1').css('background-image', 'url(' + slideImg + ')');
//    $(".slide-item").find(".slide-item").hide()

//    $(".slide-item").eq(pos).show(1000)
//    pos--
//   if(pos==-1){
//       pos=imgArray.length-1
//   }
 
//  }
 $('.mainSlider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });