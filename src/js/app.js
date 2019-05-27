$(document).ready(function() {
    $('.partners__slide').slick({
        infinite: false
    });
    new WOW().init();

    function countup(className){ //className - имя класса, в котором есть число
        var countBlockTop = $("."+className).offset().top; //смещение блока с числом относительно верхнего края	
        var windowHeight = window.innerHeight;//высота окна браузера
	    var show = true;// отвечает, что если один раз счетчик сработает, больше не срабатывал
					
        $(window).scroll( function (){
            if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
                show = false; //если мы видим число, то больше его не надо показывать
                            
                $('.'+className).spincrement({ //вызов плагина с параметрами 
                    from: 1,               //начинать с 1
                    duration: 4000,        //задержка счетчика
                });
            }
        })	
    }

    $(function() {
        countup("about__num");
    });

    const scroll = {
        offset: 70
    }

    var header = new Headhesive('.top-header', scroll);
});