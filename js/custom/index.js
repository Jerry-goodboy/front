function sectionAfterLoad(anchorLink, index){
    if(index == 1){
        $('.cs-section1-slide1-img1 img').addClass('animated fadeInDown');
        $('.cs-section1-slide1-img2 img').addClass('animated fadeIn');
        $('.cs-section1-slide1-img3 img').addClass('animated fadeInRight');
        $('.cs-section1-slide1-img4 img').addClass('animated fadeInLeft');
        $('.cs-section1-slide1-img5 img').addClass('animated fadeInLeft');
    }else if(index == 2){
        if(typeof timeout_section2_img1 != 'undefined' && typeof timeout_section2_img1 == 'number' ){
            clearTimeout(timeout_section2_img1);
        }
        if(typeof timeout_section2_img1 != 'undefined' && typeof timeout_section2_img1 == 'number' ){
            clearTimeout(timeout_section2_img2);
        }
        if(typeof timeout_section2_img1 != 'undefined' && typeof timeout_section2_img1 == 'number' ){
            clearTimeout(timeout_section2_img3);
        }
        if(typeof timeout_section2_img1 != 'undefined' && typeof timeout_section2_img1 == 'number' ){
            clearTimeout(timeout_section2_img4);
        }
        if(typeof timeout_section2_img1 != 'undefined' && typeof timeout_section2_img1 == 'number' ){
            clearTimeout(timeout_section2_img5);
        }
        if(typeof timeout_section2_img1 != 'undefined' && typeof timeout_section2_img1 == 'number' ){
            clearTimeout(timeout_section2_img6);
        }
        if(typeof timeout_section2_img1 != 'undefined' && typeof timeout_section2_img1 == 'number' ){
            clearTimeout(timeout_section2_img7);
        }
        if(typeof timeout_section2_img1 != 'undefined' && typeof timeout_section2_img1 == 'number' ){
            clearTimeout(timeout_section2_img8);
        }

        $('.cs-section2-img1 img').addClass('animated cs-flipInY');
        $('.cs-section2-img2 img').addClass('animated cs-flipInY');
        $('.cs-section2-img3 img').addClass('animated cs-flipInY');
        $('.cs-section2-img4 img').addClass('animated cs-flipInY');
        $('.cs-section2-img5 img').addClass('animated cs-flipInY');
        $('.cs-section2-img6 img').addClass('animated cs-flipInY');
        $('.cs-section2-img7 img').addClass('animated cs-flipInY');
        $('.cs-section2-img8 img').addClass('animated cs-flipInY');
        $('.cs-section2-img9 img').addClass('animated cs-bounceInRight');
        $('.cs-section2-img10 img').addClass('animated cs-bounceInRight');

        timeout_section2_img1 = setTimeout(function(){
            $(".cs-section2-img1 .cs-section2-img1-content p").addClass('cs-section2-img1-content-hover');
        }, 500);
        timeout_section2_img2 = setTimeout(function(){
            $(".cs-section2-img2 .cs-section2-img1-content p").addClass('cs-section2-img1-content-hover');
        }, 1000);
        timeout_section2_img3 = setTimeout(function(){
            $(".cs-section2-img3 .cs-section2-img1-content p").addClass('cs-section2-img1-content-hover');
        }, 1500);
        timeout_section2_img4 = setTimeout(function(){
            $(".cs-section2-img4 .cs-section2-img1-content p").addClass('cs-section2-img1-content-hover');
        }, 2000);
        timeout_section2_img5 = setTimeout(function(){
            $(".cs-section2-img5 .cs-section2-img1-content p").addClass('cs-section2-img1-content-hover');
        }, 2500);
        timeout_section2_img6 = setTimeout(function(){
            $(".cs-section2-img6 .cs-section2-img1-content p").addClass('cs-section2-img1-content-hover');
        }, 3000);
        timeout_section2_img7 = setTimeout(function(){
            $(".cs-section2-img7 .cs-section2-img1-content p").addClass('cs-section2-img1-content-hover');
        }, 3500);
        timeout_section2_img8 = setTimeout(function(){
            $(".cs-section2-img8 .cs-section2-img1-content p").addClass('cs-section2-img1-content-hover');
        }, 4000);

    }else if(index == 3){
        $('#id_section3_text1 .cs-section3-text-p-box').addClass('cs-zoomTitle');
        $('#id_section3_text2 .cs-section3-text-p-box').addClass('cs-zoomTitle');
        $('#id_section3_text3 .cs-section3-text-p-box').addClass('cs-zoomTitle');
        $('#id_section3_text4 .cs-section3-text-p-box').addClass('cs-zoomTitle');
        $('#id_section3_text5 .cs-section3-text-p-box').addClass('cs-zoomTitle');
        $('#id_section3_text6 .cs-section3-text-p-box').addClass('cs-zoomTitle');

        $('#id_section3_text1 .cs-section3-text-span1').addClass('cs-spanColor');
        $('#id_section3_text2 .cs-section3-text-span1').addClass('cs-spanColor');
        $('#id_section3_text3 .cs-section3-text-span1').addClass('cs-spanColor');
        $('#id_section3_text4 .cs-section3-text-span1').addClass('cs-spanColor');
        $('#id_section3_text5 .cs-section3-text-span1').addClass('cs-spanColor');
        $('#id_section3_text6 .cs-section3-text-span1').addClass('cs-spanColor');

        $('.cs-section3-img8 img').addClass('animated cs-zoomInUp');
        $('.cs-section3-img9 img').addClass('animated cs-zoomInUp');

        $('.cs-section3-img2').addClass('cs-slideImg-1');
        $('.cs-section3-img3').addClass('cs-slideImg-2');
        $('.cs-section3-img4').addClass('cs-slideImg-3');
        $('.cs-section3-img5').addClass('cs-slideImg-4');
        $('.cs-section3-img6').addClass('cs-slideImg-5');
        $('.cs-section3-img7').addClass('cs-slideImg-6');

    }else if(index == 4){
        $('.cs-section4-img5 img').addClass('animated rubberBand');
        $('.cs-section4-img6 img').addClass('animated rubberBand');

        $('.cs-section4-img1 img').addClass('animated section4-bounceInRight');
        $('.cs-section4-img2 img').addClass('animated section4-bounceInRight');
        $('.cs-section4-img3 img').addClass('animated section4-bounceInRight');
        $('.cs-section4-img4 img').addClass('animated section4-bounceInRight');

        $('.cs-section4-p1 p').addClass('animated section4-bounceInUp');
        $('.cs-section4-p2 p').addClass('animated section4-bounceInUp');
        $('.cs-section4-p3 p').addClass('animated section4-bounceInUp');
        $('.cs-section4-p4 p').addClass('animated section4-bounceInUp');

    }else if(index == 5){
        $('.cs-section5-img3 img').addClass('animated rotateInDownLeft');
        $('.cs-section5-img4 img').addClass('animated rotateInDownLeft');

        $('.cs-section5-img1 img').addClass('animated slideInRight');
        $('.cs-section5-img2 img').addClass('animated slideInRight');

        $('.cs-section5-p1 p').addClass('animated rotateIn');
        $('.cs-section5-p2 p').addClass('animated rotateIn');
        $('.cs-section5-p3 p').addClass('animated rotateIn');

    }
}
function sectionOnLeave(index, nextIndex, direction){

}
function slideAfterLoad(anchorLink, index, slideAnchor, slideIndex){
    var loadedSlide = $(this);

    //first slide of the first section
    if(index == 1 && slideIndex == 0){
        clearInterval(slideInterval);
        slideInterval = setInterval(function(){
              $.fn.fullpage.moveSlideRight();
            }, 7000);
        $('.cs-section1-slide2-img1 img').removeClass('animated bounceIn');
        $('.cs-section1-slide2-img2 img').removeClass('animated fadeIn');
        $('.cs-section1-slide2-img3 img').removeClass('animated cs-zoomOutRightDown');
        $('.cs-section1-slide2-img4 img').removeClass('animated cs-zoomOutLeftDown');
        $('.cs-section1-slide2-img5 img').removeClass('animated cs-zoomOutRightUp');
        $('.cs-section1-slide2-img6 img').removeClass('animated cs-zoomOutLeftUp');

        $('.cs-section1-slide3-img1 img').removeClass('animated cs-lightSpeedIn');
        $('.cs-section1-slide3-img2 img').removeClass('animated cs-lightSpeedIn');
        $('.cs-section1-slide3-img3 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img4 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img5 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img6 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img7 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img8 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img9 img').removeClass('animated cs-slideInRight');
        $('.cs-section1-slide3-img10 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img11 img').removeClass('animated cs-zoomIn');

        $('.cs-section1-slide1-img1 img').addClass('animated fadeInDown');
        $('.cs-section1-slide1-img2 img').addClass('animated fadeIn');
        $('.cs-section1-slide1-img3 img').addClass('animated fadeInRight');
        $('.cs-section1-slide1-img4 img').addClass('animated fadeInLeft');
        $('.cs-section1-slide1-img5 img').addClass('animated fadeInLeft');
    }else if(index == 1 && slideIndex == 1){
        clearInterval(slideInterval);
        slideInterval = setInterval(function(){
              $.fn.fullpage.moveSlideRight();
            }, 7000);
        $('.cs-section1-slide1-img1 img').removeClass('animated fadeInDown');
        $('.cs-section1-slide1-img2 img').removeClass('animated fadeIn');
        $('.cs-section1-slide1-img3 img').removeClass('animated fadeInRight');
        $('.cs-section1-slide1-img4 img').removeClass('animated fadeInLeft');
        $('.cs-section1-slide1-img5 img').removeClass('animated fadeInLeft');

        $('.cs-section1-slide3-img1 img').removeClass('animated cs-lightSpeedIn');
        $('.cs-section1-slide3-img2 img').removeClass('animated cs-lightSpeedIn');
        $('.cs-section1-slide3-img3 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img4 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img5 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img6 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img7 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img8 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img9 img').removeClass('animated cs-slideInRight');
        $('.cs-section1-slide3-img10 img').removeClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img11 img').removeClass('animated cs-zoomIn');

        $('.cs-section1-slide2-img1 img').addClass('animated bounceIn');
        $('.cs-section1-slide2-img2 img').addClass('animated fadeIn');
        $('.cs-section1-slide2-img3 img').addClass('animated cs-zoomOutRightDown');
        $('.cs-section1-slide2-img4 img').addClass('animated cs-zoomOutLeftDown');
        $('.cs-section1-slide2-img5 img').addClass('animated cs-zoomOutRightUp');
        $('.cs-section1-slide2-img6 img').addClass('animated cs-zoomOutLeftUp');

    }else if(index == 1 && slideIndex == 2){
        clearInterval(slideInterval);
        slideInterval = setInterval(function(){
              $.fn.fullpage.moveSlideRight();
            }, 7000);
        $('.cs-section1-slide1-img1 img').removeClass('animated fadeInDown');
        $('.cs-section1-slide1-img2 img').removeClass('animated fadeIn');
        $('.cs-section1-slide1-img3 img').removeClass('animated fadeInRight');
        $('.cs-section1-slide1-img4 img').removeClass('animated fadeInLeft');
        $('.cs-section1-slide1-img5 img').removeClass('animated fadeInLeft');

        $('.cs-section1-slide2-img1 img').removeClass('animated bounceIn');
        $('.cs-section1-slide2-img2 img').removeClass('animated fadeIn');
        $('.cs-section1-slide2-img3 img').removeClass('animated cs-zoomOutRightDown');
        $('.cs-section1-slide2-img4 img').removeClass('animated cs-zoomOutLeftDown');
        $('.cs-section1-slide2-img5 img').removeClass('animated cs-zoomOutRightUp');
        $('.cs-section1-slide2-img6 img').removeClass('animated cs-zoomOutLeftUp');

        $('.cs-section1-slide3-img1 img').addClass('animated cs-lightSpeedIn');
        $('.cs-section1-slide3-img2 img').addClass('animated cs-lightSpeedIn');
        $('.cs-section1-slide3-img3 img').addClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img4 img').addClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img5 img').addClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img6 img').addClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img7 img').addClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img8 img').addClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img9 img').addClass('animated cs-slideInRight');
        $('.cs-section1-slide3-img10 img').addClass('animated cs-zoomIn');
        $('.cs-section1-slide3-img11 img').addClass('animated cs-zoomIn');
    }
}
function slideOnLeave(anchorLink, index, slideIndex, direction, nextSlideIndex){
    var leavingSlide = $(this);

    if((index == 1 && slideIndex == 0 && direction == 'right') || (index == 1 && slideIndex == 0 && direction == 'left')){
        
    }
}