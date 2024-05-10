//готовые проекты

//Обработка клика на стрелку вправо
$(document).on('click', ".s3 .carousel-button-right",function(){ 
    var carusel = $(this).parents('.carousel');
    right_carusel(carusel);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".s3 .carousel-button-left",function(){ 
    var carusel = $(this).parents('.carousel');
    left_carusel(carusel);
    return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   /* по 1 */
   /*
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   */
   /* по 3 */  
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove(); 
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   
  $(carusel).find(".carousel-items").css({"left":"-"+block_width*3+"px"});
    
    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
    
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   /*
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
      $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
   */
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width*3 +"px"}, 200, function(){
     
       
	   $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
	  	   $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
	  	   $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
	  
	  $(carusel).find(".carousel-items").css({"left":"0px"});
   });
   
}
 
$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
    auto_right('.s3 .carousel:first');
})
 
// Автоматическая прокрутка
function auto_right(carusel){
    setInterval(function(){
        if (!$(carusel).is('.hover'))
            right_carusel(carusel);
    }, 5000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})


///////////////////////////////////


//Обработка клика на стрелку вправо
$(document).on('click', ".s4 .carousel-button-right",function(){ 
    var carusel = $(this).parents('.carousel');
    right_carusel_s4(carusel);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".s4 .carousel-button-left",function(){ 
    var carusel = $(this).parents('.carousel');
    left_carusel_s4(carusel);
    return false;
});
function left_carusel_s4(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   /* по 1 */
  
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 

}
function right_carusel_s4(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
      $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
  
   
}
 
$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
   // auto_right_s4('.s4 .carousel:first');
})
 
// Автоматическая прокрутка
function auto_right_s4(carusel){
    setInterval(function(){
        if (!$(carusel).is('.hover'))
            right_carusel(carusel);
    }, 5000)
}


///////////////////////////////////


//Обработка клика на стрелку вправо
$(document).on('click', ".gal_okna .carousel-button-right",function(){ 
    var carusel = $(this).parents('.carousel');
    right_carusel_svet(carusel);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".gal_okna .carousel-button-left",function(){ 
    var carusel = $(this).parents('.carousel');
    left_carusel_svet(carusel);
    return false;
});
//Обработка клика на стрелку вправо
$(document).on('click', ".k_gal .carousel-button-right",function(){ 
    var carusel = $(this).parents('.carousel');
    right_carusel_svet(carusel);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".k_gal .carousel-button-left",function(){ 
    var carusel = $(this).parents('.carousel');
    left_carusel_svet(carusel);
    return false;
});

//Обработка клика на стрелку вправо
$(document).on('click', ".r_color .carousel-button-right",function(){ 
    var carusel = $(this).parents('.carousel');
    right_carusel_svet(carusel);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".r_color .carousel-button-left",function(){ 
    var carusel = $(this).parents('.carousel');
    left_carusel_svet(carusel);
    return false;
});
//Обработка клика на стрелку вправо
$(document).on('click', ".r_thing .carousel-button-right",function(){ 
    var carusel = $(this).parents('.carousel');
    right_carusel_svet(carusel);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".r_thing .carousel-button-left",function(){ 
    var carusel = $(this).parents('.carousel');
    left_carusel_svet(carusel);
    return false;
});

//Обработка клика на стрелку вправо
$(document).on('click', ".ul_menu_ .carousel-button-right",function(){ 
    var carusel = $(this).parents('.carousel');
    right_carusel_svet(carusel);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".ul_menu_ .carousel-button-left",function(){ 
    var carusel = $(this).parents('.carousel');
    left_carusel_svet(carusel);
    return false;
});


function left_carusel_svet(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   /* по 1 */
  
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 

}
function right_carusel_svet(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
      $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
  
   
}
 
$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
   // auto_right_svet('.svet .carousel:first');
})
 
// Автоматическая прокрутка
function auto_right_svet(carusel){
    setInterval(function(){
        if (!$(carusel).is('.hover'))
            right_carusel(carusel);
    }, 5000)
}
