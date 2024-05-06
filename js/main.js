


(function($){
    'use strict';

    // code start

    $('.main-icon i.fa-bars').on('click', function(){
        $('.main-menu').slideDown();
        $('.main-icon i.fa-times').show();
        $(this).hide();
    });

    $('.main-icon i.fa-times').on('click', function(){
        $('.main-menu').slideUp();
        $('.main-icon i.fa-bars').show();
        $(this).hide();
    });



    // scroll-method
    var






}) (jQuery);
























// (function($){
// 	'use strict';

// 	// code starts

// 	$('.january').addClass('april');
// 	$('.january').removeClass('may');

// 	$('#view-post').on('click', function(){
// 		$('.june p').show(1000);
// 	});

// 	$('#hide-post').on('click', function(){
// 		$('.june p').hide(1000);
// 	});
	



// 	// photo
// 	$('.january span').on('click', function(){
// 		$('.photo').fadeIn();
// 	});

// 	$('.photo span').on('click', function(){
// 		$('.photo').fadeOut();
// 	});




// 	// parent-children method

// 	$('.july').children('a').css({
// 		color: '#d63031'
// 	});

// 	$('p').parent('.july').css({
// 		background: '#2d3436',
// 		color: '#ffffff'
// 	});



// 	/*$('.july').animate({
// 		width: '30%'
// 	}, 5000);*/


	
// 	// sidebar

// 	$('.july').children('a').on('click', function(){
// 		$('.sidebar').animate({
// 			left: 0
// 		});
// 	})


// 	$('.sidebar-close i').on('click', function(){
// 		$('.sidebar').animate({
// 			left: -250
// 		})
// 	})



// }) (jQuery);