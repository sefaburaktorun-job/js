textReveal({target:"#heroHeading",repeat:false,intervalSpeed:50,transitionSpeed:2,offsetShow:100,selection:"word"});textReveal({target:".heading_2",repeat:false,intervalSpeed:50,transitionSpeed:1,offsetShow:100,selection:"word"});textReveal({target:".heading4-kontakt",repeat:false,intervalSpeed:50,transitionSpeed:1,offsetShow:100,selection:"word"});textReveal({target:".long_heading2",repeat:false,intervalSpeed:50,transitionSpeed:1,offsetShow:100,selection:"word"});$(document).ready(function(){referenzenSwiper=new Swiper(".referenzen__collection__container",{wrapperClass:"referenzen__collection__wrapper",slideClass:"referenzen__collection__item",navigation:{nextEl:".arrow-right-referenz",prevEl:".arrow-left-referenz"},slidesPerView:"auto",direction:"horizontal",spaceBetween:0,speed:500,touchStartPreventDefault:false,preventClicks:true,preventClicksPropagation:true,freeMode:true,grabCursor:true,mousewheel:{forceToAxis:true,invert:true}});if(globalViewportWidth<991){referenzenSwiper.params.freeMode=false}});$(".cms-link").click(function(e){if(drag===false){var cmsCard=$(".cms-referenzen__hero-bg-wrapper");var cardWidth=cmsCard.outerWidth();var cardHeight=cmsCard.outerHeight();var cardTop=cmsCard.offset().top;var cardLeft=cmsCard.offset().left;var itemTop=$(this).offset().top;var itemLeft=$(this).offset().left;var topPo=cardTop-itemTop;var leftPo=cardLeft-itemLeft;$("body").css("overflow","hidden");if(globalViewportWidth<480){cardHeight="100vh"}$(this).css({height:cardHeight,width:cardWidth,top:topPo,left:leftPo,"z-index":"1000"});$(".referenzen-section").css("z-index","95");$(".referenzen__collection__wrapper").css("z-index","1000");$(this).find(".referenzen__itembox").css("opacity","0");e.preventDefault();var moduleURL=$(this).attr("href");var el=$(this);setTimeout(function(){el.css({height:"100%",width:"100%",top:"0",left:"0","z-index":"1"});$(".referenzen-section").css("z-index","10");$(".referenzen__collection__wrapper").css("z-index","5");$("body").css("overflow","auto");el.find(".referenzen__itembox").css("opacity","1")},2200)}});