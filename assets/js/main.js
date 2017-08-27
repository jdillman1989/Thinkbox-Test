$(document).ready(function(){

	// Search form animation
	var searchIcon = $('#searchIcon'),
		searchForm = $('#searchForm'),
		searchOpenState = false;

	searchIcon.click(function(e) {
		e.preventDefault();
		if (searchOpenState) {
			searchForm.css({"transform":"translate(0px, 0px)"});
			searchIcon.removeClass('active');
			searchOpenState = false;
		} 
		else{
			searchForm.css({"transform":"translate(" + -1 * (searchForm.outerWidth()) + "px, 0px)"});
			searchIcon.addClass('active');
			searchOpenState = true;
		};
	});

	// Mobile menu animation
	var mobileOpenState = false,
		mobileNav = $('#mobileNav'),
		sideMenu = $('#sideMenu');

	mobileNav.click(function() {
		if (mobileOpenState) {
			sideMenu.css({"transform":"translate(0px, 0px)"});
			mobileNav.removeClass('open');
			mobileOpenState = false;
		} 
		else{
			sideMenu.html($('#mainNav').clone()).html();
			sideMenu.css({"transform":"translate(" + (sideMenu.outerWidth()) + "px, 0px)"});
			mobileNav.addClass('open');
			mobileOpenState = true;
		};
	});

	// Lightbox overlay
	var lightboxButtons = $('.lightbox'),
		overlay = $('.overlay'),
		lightboxContainer = $('.lightbox-container'),
		lightboxContent = $('.lightbox-content'),
		closeButton = $('.close svg'),
		overlayGrid = $('.overlay-animation');

	lightboxReset();

	overlay.click(function() {
		lightboxReset();
	});

	closeButton.click(function() {
		lightboxReset();
	});

	lightboxButtons.on('click', function(e) {
		e.preventDefault();
		var button = $(this);
		var lightboxData = button.data("lb");
		overlay.fadeIn();
		overlayAnimate();
		lightboxDisplay(lightboxData);
	});

	function lightboxReset() {
		overlay.fadeOut();
		lightboxContainer.fadeOut();
		lightboxContainer.css({"height": "auto"});
		var maxAnimation = 1200,
			minAnimation = 500,
			maxOpacity = 85,
			minOpacity = 75;

		overlayGrid.each(function() {
			var animTime = Math.floor(Math.random() * (maxAnimation - minAnimation + 1)) + minAnimation;
			var opacityRange = Math.floor(Math.random() * (maxOpacity - minOpacity + 1)) + minOpacity;

			$(this).css({
				"-webkit-transition": "-webkit-transform " + animTime + "ms ease",
				"-moz-transition": "-moz-transform " + animTime + "ms ease",
				"-o-transition": "-o-transform " + animTime + "ms ease",
				"transition": "transform " + animTime + "ms ease",
				"-webkit-transform": "translate(0, 100vh)",
				"-moz-transform": "translate(0, 100vh)",
				"-ms-transform": "translate(0, 100vh)",
				"-o-transform": "translate(0, 100vh)",
				"transform": "translate(0, 100vh)",
				"background-color": "rgba(35,31,32," + opacityRange / 100 + ")"
			});
		});
	};

	function overlayAnimate() {
		overlayGrid.each(function() {
			$(this).css({
				"-webkit-transform": "translate(0, 0vh)",
				"-moz-transform": "translate(0, 0vh)",
				"-ms-transform": "translate(0, 0vh)",
				"transform": "translate(0, 0vh)"
			});
		});
	};

	function lightboxDisplay(content) {
		var windowHeight = $(window).height();
		lightboxContent.html($('#' + content).clone()).html();
		setTimeout(function(){
			lightboxContainer.fadeIn();
			var lightboxContainerHeight = lightboxContainer.outerHeight();
			if (lightboxContainerHeight > windowHeight - 30) {
				lightboxContainer.css({
					"height": windowHeight - 30,
					"margin-top": 15
				});
			}
			else {
				lightboxContainer.css({
					"margin-top": (windowHeight / 2) - (lightboxContainerHeight / 2)
				});
			};
		}, 600);
	};

	var rellax = new Rellax('.rellax');
	AOS.init();
});