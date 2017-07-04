		$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#f9f9fa', '#fcfcfc', '#fafafa', '#fff'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage'],
				menu: '#menu',
                // verticalCentered:false,
				scrollingSpeed: 1000
			});

            $("#owl-demo").owlCarousel({
 stopOnHover:true,
      autoPlay: 6000, 
      items : 5,
      itemsDesktop : [1200,3],
        itemsTablet: [800, 2] ,
        itemsTabletSmall :[736, 5],
        itemsMobile : [414, 1],

  });
            
        $("#owl-demo2").owlCarousel({
            stopOnHover:true,
    autoPlay: 6000, 
      items : 5,
      itemsDesktop : [1200,3],
        itemsTablet: [800, 2] ,
        itemsTabletSmall :[736, 5],
        itemsMobile : [414, 1],
 
  });
        $("#owl-demo3").owlCarousel({
 stopOnHover:true,
     autoPlay: 6000, 
      items : 5,
      itemsDesktop : [1200,3],
        itemsTablet: [800, 2] ,
        itemsTabletSmall :[736, 5],
        itemsMobile : [414, 1],
 
  });
        $("#owl-demo4").owlCarousel({
 stopOnHover:true,
    autoPlay: 6000, 
      items : 5,
      itemsDesktop : [1200,3],
        itemsTablet: [800, 2] ,
        itemsTabletSmall :[736, 5],
        itemsMobile : [414, 1],
 
  });
             $("#owl-demo5").owlCarousel({
 stopOnHover:true,
      autoPlay: 6000, 
      items: 5,
      itemsDesktop : [1200,3],
        itemsTablet: [800, 2] ,
        itemsTabletSmall :[736, 4.5],
        itemsMobile : [414, 1],
        
  });

            $("#owl-shop-item").owlCarousel({
                navigation : true,
                slideSpeed : 800,
                paginationSpeed : 500,
                singleItem:true,
                autoPlay: false
            });
            
               $(".uk-lang").click(function(){
               $(".uk-lang").addClass("active-lang");  
               $(".ru-lang").removeClass("active-lang");  
               $(".en-lang").removeClass("active-tab");  
            }); 
            $(".ru-lang").click(function(){
               $(".ru-lang").addClass("active-lang");  
               $(".uk-lang").removeClass("active-lang");  
               $(".en-lang").removeClass("active-lang");  
            }); 
            $(".en-lang").click(function(){
               $(".en-lang").addClass("active-lang");  
               $(".ru-lang").removeClass("active-lang");  
               $(".uk-lang").removeClass("active-lang");  
            }); 
            
               $(".cd-nav-trigger").click(function(){
               $(".cd-slideshow-nav").toggleClass("nav-open");
            }); 
            
                $(".dec-li").click(function(){ 
                $("#ul-tab").children().removeClass("active-li");
               $(this).addClass("active-li");  
 
            });
            $(".pag-li").click(function(){
                $("#pag-ul").children().removeClass("active-li");
                $(this).addClass("active-li");

            });

            $('#tabs').tabs({
                hide: {
                    effect: "slide",
                    duration: 350,
 
                },
                show: {
                    effect: "slide",
                    duration:350,
                    direction:'right'   
                }
            });

            setTimeout(function () {
                $('#section0').css("margin-top" , "-1px");
            }, 1);

                $( "#phoneform" ).click(function() {

                if ( $("#phoneform").val().length<1)
                $("#phoneform").val('+');
            });

            $(".search-nav").click(function(){
                $(".search-inner").toggleClass('search-op');
            });

            // $(document).mouseup(function (e){ // событие клика по веб-документу
            //     var div = $(".search-inner"); // тут указываем ID элемента
            //     if (!div.is(e.target) // если клик был не по нашему блоку
            //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
            //         div.hide(); // скрываем его
            //     }
            // });

            $(".dropdown-date").click(function(){
                    $(".dropdown-content").toggle();
            });

            $(document).mouseup(function (e){ // событие клика по веб-документу
                var div = $(".dropdown-content"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    div.hide(); // скрываем его
                }
            });


            $('.act-drop').click(function(e){
                var text = $(this).text();
                $('#drop-text').text(text);
            });

            $(".dropdown-xs").click(function(){
                $(".dropdown-xs-content").toggle();
            });

            $(document).mouseup(function (e){ // событие клика по веб-документу
                var div = $(".dropdown-xs-content"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    div.hide(); // скрываем его
                }
            });


            $('.act-drop2').click(function(e){
                var text = $(this).text();
                $('#drop-text2').text(text);
            });

            $('.act-drop3').click(function(e){
                var text = $(this).text();
                $('#droptext3').text(text);
            });



            $('.item-btn-buy').click(function () {
                $('.item-btn-buy').hide();
                $('.check').css({
                    'transition': '0.7s ease-in-out',
                    'stroke-dashoffset': 0,
                });
                $('.added-item').css({
                    'color':'#000',
                    'transition': '0.5s ease-in-out'
                });
            });


            $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });


            // $.validator.setDefaults({
            //     submitHandler: function() {
            //         alert("submitted!");
            //     }
            // });
                // validate signup form on keyup and submit
                $("#signupForm").validate({
                    rules: {

                        country:"required",
                        city:"required",
                        region:"required",
                        index: {
                            required: true,
                            minlength: 4
                        },
                        address:"required",
                        email: {
                            required: true,
                            email: true
                        },
                        phoneform:"required",
                        firstname: "required",
                        lastname: "required",
                        droptext3:"required",
                        address_department: "required"

                    },
                    messages: {
                        country: "Це поле обов'язкове. Ввведіть країну",
                        city: "Це поле обов'язкове. Введіть місто",
                        region: "Це поле обов'язкове. Введіть область",
                        index: "Це поле обов'язкове. Введіть індекс",
                        address: "Це поле обов'язкове. Введіть адресу",
                        email: "Це поле обов'язкове. Введіть адресу вірно",
                        phoneform: "Це поле обов'язкове. Введіть телефон в форматі +38 (032) 12 12 865",
                        firstname: "Це поле обов'язкове. Введіть ім'я",
                        lastname: "Це поле обов'язкове. Введіть прізвище",
                        droptext3: "Це поле обов'язкове. Оберіть службу доставки",
                        address_department: "Це поле обов'язкове. Введіть адресу відділеня"
                    }
                });

            $("#simple3D").simple3D({
                moveX:1,
                moveY:1,
                bgImage:true,
                targetAll:true,
                reverseX: true,
                reverseY: true
            });

		});