define(["jquery"], function($) {

  // Scroll LINK
  
  $('a[href^="#"].scroll').click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });
  
  
// Scroll BAR

$(window).scroll(function() {

    // calculate the percentage the user has scrolled down the page
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

    $('.bar-long').css('width', scrollPercent + "%");

  });



$(this).find('.select__input').addClass("open"); 



// Первый слайдер блок 5

$( document ).ready(function() {
 var $slider__block__5 = $('.slider__block__5');

 $slider__block__5.on('init', function(event, slick){
   slideCount = slick.slideCount;
   setSlideCount();
   setCurrentSlideNumber(slick.currentSlide);
 });

 $slider__block__5.on('beforeChange', function(event, slick, currentSlide, nextSlide){
   setCurrentSlideNumber(nextSlide);
 });

 function setSlideCount() {
   var $el = $('.bignamber').find('.total');
   var $el2 = $('.s1').find('.total');
   $el.text(slideCount);
   $el2.text(slideCount);
 }

 function setCurrentSlideNumber(currentSlide) {
   var $el = $('.bignamber').find('.current');
   var $el2 = $('.s1').find('.current');
   $el.text(currentSlide + 1);
   $el2.text(currentSlide + 1);
 } 
 
 $('.slick5__arrow__next').click(function() {
   $slider__block__5.slick('slickNext');
 });
 
 $('.slick5__arrow__prev').click(function() {
   $slider__block__5.slick('slickPrev');
 });  


 $slider__block__5.slick({
  prevArrow: '.slick5__arrow__prev',
  nextArrow: '.slick5__arrow__next',
  arrows: false,


  fade: false,
  dots: false,
  arrows: false,

  infinite: true,

  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

 
});

// Первый слайдер блок 7

$( document ).ready(function() {

  var $slider__block__7 = $('.slider__block__7');

  $slider__block__7.on('init', function(event, slick){
    console.log('init');
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
  });

  $slider__block__7.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    setCurrentSlideNumber(nextSlide);
  });

  function setSlideCount() {
    var $el = $('.s2').find('.total');
    var $el2 = $('.s22').find('.total');
    $el.text(slideCount);
    $el2.text(slideCount);
    
  }

  function setCurrentSlideNumber(currentSlide) {
    var $el = $('.s2').find('.current');
    var $el2 = $('.s22').find('.current');
    $el.text(currentSlide + 1);
    $el2.text(currentSlide + 1);
  } 

  $('.slick7__arrow__next').click(function() { 
    $slider__block__7.slick('slickNext');
  });
  
  $('.slick7__arrow__prev').click(function() {
    $slider__block__7.slick('slickPrev');
  });

  

  $slider__block__7.slick({
    prevArrow: '.slick7__arrow__prev',
    nextArrow: '.slick7__arrow__next',
    arrows: false,


    fade: false,
    dots: false,
    arrows: false,

    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  
});


// Первый слайдер блок 11

$( document ).ready(function() {
 var $slider__block__11 = $('.slider__block__11');


 $slider__block__11.on('init', function(event, slick){
   slideCount = slick.slideCount;
   setSlideCount();
   setCurrentSlideNumber(slick.currentSlide);
 });

 $slider__block__11.on('beforeChange', function(event, slick, currentSlide, nextSlide){
   setCurrentSlideNumber(nextSlide);
 });

 function setSlideCount() {
   var $el = $('.s3').find('.total');
   var $el2 = $('.s33').find('.total');
   $el.text(slideCount);
   $el2.text(slideCount);
   
 }

 function setCurrentSlideNumber(currentSlide) {
   var $el = $('.s3').find('.current');
   var $el2 = $('.s33').find('.current');
   $el.text(currentSlide + 1);
   $el2.text(currentSlide + 1);
 }    


 $('.slick11__arrow__next').click(function() {
   $slider__block__11.slick('slickNext');
 });
 
 $('.slick11__arrow__prev').click(function() {
   $slider__block__11.slick('slickPrev');
 });


 $slider__block__11.slick({
  
  prevArrow: '.slick11__arrow__prev',
  nextArrow: '.slick11__arrow__next',
  arrows: false,

  fade: false,
  dots: false,
  arrows: false,

  infinite: true,

  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

 
});


$('.slick12__arrow__next').click(function() { 
  $twenenarrow.slick('slickNext');
});

$('.slick12__arrow__prev').click(function() {
  $twenenarrow.slick('slickPrev');
});

$twenenarrow = $('.slider__block__12').slick({

//        nextArrow: '<i class="next-arrow ion-arrow-right-c uslide-arrow"></i>',
//        prevArrow: '<i class="prev-arrow ion-arrow-left-c uslide-arrow"></i>',

prevArrow: '.slick12__arrow__prev',
nextArrow: '.slick12__arrow__next',
arrows: false,
adaptiveHeight: true,


fade: false,
dots: false,
arrows: false,
//        autoplaySpeed: 1500,
//        autoplay: true,
infinite: true,


slidesToShow: 1,
slidesToScroll: 1,
speed: 500,
fade: true,
cssEase: 'linear'

}); 



// Карта в футере

$(document).ready(function(){

  google.charts.load('current', {'packages':['geochart']});
  google.charts.setOnLoadCallback(drawRegionsMap1);
  //      google.charts.setOnLoadCallback(drawRegionsMap2);

  
        //First Map
        function drawRegionsMap1() {

          var data = google.visualization.arrayToDataTable([
            ['State', ''],
            ['Michigan', 107],
            ['Missouri', 94.8],
            ['Illinois', 67.9],
            ['Indiana', 109.1],
            ['Ohio', 100.1],
            ['Pennsylvania', 88.2],
            ['Arkansas', 115.8],
            ['Kentucky', 128.4],
            ['Tennessee', 142.8],
            ['Mississippi', 120.3],
            ['Alabama', 142.9],
            
            ]);

          var options = {
            region: 'US',
            displayMode: 'region',
            resolution: 'provinces',
            width: '100%',
            height: '100%', 

            
  //            datalessRegionColor:'#FFC700',
  backgroundColor: '#a2a8a8',
  colorAxis: {colors: [ '#FFC700' ,'#FFC700']}
};

var chart = new google.visualization.GeoChart(document.getElementById('map2')); // GeoChart карта. От Google

chart.draw(data, options);
}   

setTimeout(function() { drawRegionsMap1(); }, 2000);


window.onresize = function(event) {
  drawRegionsMap1();
};


});



// Открытие меню

$('.mobile__button').click(function() {
  $('nav.menu ul').toggleClass('open');
});
$('nav.menu ul li a').click(function() {
  $('nav.menu ul').removeClass('open');
});  

$('.section__10 .sidebar ul li').click(function() {
  
//    $('.section__10 .sidebar ul li .edriver__information').removeClass("open");
//    $('.section__10 .sidebar ul li .edriver__information').addClass("no-open");

$('this').find('.section__10 .sidebar ul li .edriver__information').toggleClass("open no-open");
//          $('this').find('.select').toggleClass("back no-back");




//        $('this').find('.section__10 .sidebar ul li').addClass('open');

});


$( ".section__10 .sidebar ul li").on('click', function() {
  
  var activeAdd = $(this).data('minactive');
  
//        if ($('.edriver__information').hasClass("open")) {
//            
//            $('.edriver__information').removeClass("open");
//            $('.edriver__information').addClass("no-open");
// 
//
//        }



$(this).find('.edriver__information').toggleClass('open no-open');

$(this).find(".maper .mapcode").addClass('open');

$("[class*='mapcode']").removeClass('open');

$(this).find('.select').toggleClass("back no-back");


});



// Акардион с драйверами

var iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
var event = "click";

if(iOS != null)
    event = "touchstart";


// Переключение драйверов / открытие карты / закрытие карты

$(function() {
  $(".section__10 .sidebar ul li:nth-child(1)").on(event, function() {
    
            $('.section__10 .sidebar ul li:nth-child(2) a').removeClass('back');
            $('.section__10 .sidebar ul li:nth-child(2) a').addClass('no-back');
            $('.section__10 .sidebar ul li:nth-child(3) a').removeClass('back');
            $('.section__10 .sidebar ul li:nth-child(3) a').addClass('no-back');
            
            
            $(".mapcode1").removeClass('open');
            $(".mapcode1").addClass('open');


           $(".section__10 .sidebar ul li:nth-child(2) .edriver__information").removeClass('open');
           $(".section__10 .sidebar ul li:nth-child(3) .edriver__information").removeClass('open');
           
         });    

  $(".section__10 .sidebar ul li:nth-child(2)").on(event, function() {
     
            $('.section__10 .sidebar ul li:nth-child(1) a').removeClass('back');
            $('.section__10 .sidebar ul li:nth-child(1) a').addClass('no-back');
            $('.section__10 .sidebar ul li:nth-child(3) a').removeClass('back');
            $('.section__10 .sidebar ul li:nth-child(3) a').addClass('no-back');
            
            $(".mapcode2").removeClass('open');
            $(".mapcode2").addClass('open');


            $(".section__10 .sidebar ul li:nth-child(1) .edriver__information").removeClass('open');
            $(".section__10 .sidebar ul li:nth-child(3) .edriver__information").removeClass('open');
            
          });   

  $(".section__10 .sidebar ul li:nth-child(3)").on(event, function() {
      
                $('.section__10 .sidebar ul li:nth-child(1) a').removeClass('back');
                $('.section__10 .sidebar ul li:nth-child(1) a').addClass('no-back');
                $('.section__10 .sidebar ul li:nth-child(2) a').removeClass('back');
                $('.section__10 .sidebar ul li:nth-child(2) a').addClass('no-back');
                
                $(".mapcode3").removeClass('open');
                $(".mapcode3").addClass('open');


           $(".section__10 .sidebar ul li:nth-child(1) .edriver__information").removeClass('open');
           $(".section__10 .sidebar ul li:nth-child(2) .edriver__information").removeClass('open');
           
         });   
});

});



// Маска для input

$(document).ready(function(){
  $('[type="tel"]').inputmask("+1 (999) 999-99-99");
  $('[name="zipcode"]').inputmask('99999'); 
  $('[name="ferstname"]').inputmask({ "placeholder": "" });
  $('[name="lastname"]').inputmask({ "placeholder": "" });
});

// Переворот стрелки в input

$(document).ready(function(){
  
  $('span.ion-arrow-right-b').hover(function(){
    $(this).toggleClass('ion-arrow-right-b ion-arrow-down-b');
  });    
});   



$(document).ready(function(){ 
  
  $('[type="checkbox"]').click(function(){

    if ($(this).val() === '') {
      $(this).val("chek");
    } else if ($(this).val() === 'chek') {
      $(this).val("");
    };

  });


});






// BEGIN JIVOSITE CODE {literal} 

//(function(){ var widget_id = 'sN8H6wLwuv';var d=document;var w=window;function l(){
//var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

// END BEGIN JIVOSITE CODE {literal} 



