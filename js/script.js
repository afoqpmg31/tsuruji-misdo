$(function(){
	laodedExp();
	if($('#page_top').length > 0){
	}
	smoothScroll();
	setupdateYear();
	setAcc();
});

$(window).on('load', function() {
});

/*--------------------------------------------------
laodedExp
----------------------------------------------------*/
function laodedExp(){
	$('html').addClass('loaded');
}

/* --------------------------------------------------
smoothScroll
-------------------------------------------------- */
function smoothScroll(){
	$('a[href^="#"]').not('a.noScrl[href^="#"], .noScrl a[href^="#"]').on('click', function(){
		var speed = 500;
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;

		$('body, html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
}

/*--------------------------------------------------
setupdateYear
----------------------------------------------------*/
function setupdateYear(){
	var $updateYearFull = $('#updateYearFull');
	var $updateYear = $('#updateYear');
	var today = new Date();
	var year = today.getFullYear();
	var data = year.toString().slice(-2);

	$updateYearFull.html(year);
	$updateYear.html(data);
}

/* --------------------------------------------------
accordion
----------------------------------------------------*/ 
function setAcc(){
	$('.js-acc').each(function(){
			var $accCnt = $(this).find('.js-acc_content');

			if($(this).hasClass('open')){
					$accCnt.show();
			}
	});

	$('body').on('click','.js-acc_trg', function(){
			var $accArea = $(this).closest('.js-acc');
			var $accCnt = $accArea.find('.js-acc_content');

			if($accArea.hasClass('open')){
					$accCnt
							.stop()
							.slideUp();
					$accArea
							.removeClass('open');
			}
			else{
					$accCnt
							.stop()
							.slideDown();
					$accArea
							.addClass('open');
			}
	});
}