$(document).ready(function(){
	$( ".navbar-toggle" ).click(function() {
		$( ".menu .listmenu" ).slideToggle( "slow" );
	});
	$("#list-newshot").owlCarousel({
		items : 3, //10 items above 1000px browser width
		itemsDesktop : [1024,3], //5 items between 1024px and 901px
		itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0;
		itemsMobile : [425,1],
		navigation : true,
		navigationText : ["<a class=\"flex-prev fa fa-angle-left\"></a>","<a class=\"flex-next fa fa-angle-right\"></a>"],
		slideSpeed : 500,
		pagination : false
	});
});