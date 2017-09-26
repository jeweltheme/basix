$.noConflict();

jQuery(document).ready(function($) {

	"use strict";	

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
		new SelectFx(el);
	} );

	jQuery('.selectpicker').selectpicker;


	$('.menu-item-has-children>a').on('click', function(event) {
		event.preventDefault(); 
		event.stopPropagation(); 
		// $(this).parent().siblings().removeClass('open');
		// $(this).parent().toggleClass('open');
		var link = jQuery(this);
		$(this).parent().find("ul.sub-menu").slideToggle('slow', function(){
			if (jQuery(this).is(':visible')){
				link.parent().siblings().removeClass('open');
			} else {
				link.parent().toggleClass('open');
			}
		});
	});


	$('#menuToggle').on('click', function(event) {
		event.preventDefault(); 
		event.stopPropagation(); 
		$('body').parent().siblings().removeClass('open');
		$('body').parent().toggleClass('open');
	});

	// $('.user-area> a').on('click', function(event) {
	// 	event.preventDefault(); 
	// 	event.stopPropagation(); 
	// 	$('.user-menu').parent().removeClass('open');
	// 	$('.user-menu').parent().toggleClass('open');
	// });


});