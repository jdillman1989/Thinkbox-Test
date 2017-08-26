$(document).ready(function(){

	var searchIcon = $('#searchIcon');
	var searchForm = $('#searchForm');
	var searchOpenState = false;

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

	var mobileOpenState = false;
	var mobileNav = $('#mobileNav');
	var sideMenu = $('#sideMenu');

	mobileNav.click(function() {
		if (mobileOpenState) {
			sideMenu.css({"transform":"translate(0px, 0px)"});
			mobileNav.removeClass('open');
			mobileOpenState = false;
		} 
		else{
			sidebarContent('#mainNav');
			sideMenu.css({"transform":"translate(" + (sideMenu.outerWidth()) + "px, 0px)"});
			mobileNav.addClass('open');
			mobileOpenState = true;
		};
	});

	function sidebarContent(element) {
		sideMenu.html($(element).clone()).html();
	}
});