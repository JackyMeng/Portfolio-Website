$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['portfolio', 'about'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['portfolio', 'about'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#f4f4f4', '#f4f4f4'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 1000,
		responsiveHeight: 850,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});
$(document).ready(function() {
	// var load_screen = document.getElementById("load_screen");
	// document.body.removeChild(load_screen);
	$('.preload').delay(100).fadeOut('slow')
});

   $( ".hamburger" ).click(function() {
	  $('.menu').toggle("slide", { direction: "right" }, 500,'easeInOutQuart');
	  $(".hamburger").toggleClass("is-active");

});

	$( "#project1" ).hover(function() {
	  $( ".work2,.work3,.work4,.work5,.work6,.work7,.work8,.work9").toggleClass("fade");
	});
	$( "#project2" ).hover(function() {
	  $( ".work1,.work3,.work4,.work5,.work6,.work7,.work8,.work9").toggleClass("fade");
	});
	$( "#project3" ).hover(function() {
	  $( ".work2,.work1,.work4,.work5,.work6,.work7,.work8,.work9").toggleClass("fade");
	});
	$( "#project4" ).hover(function() {
	  $( ".work1,.work3,.work2,.work5,.work6,.work7,.work8,.work9").toggleClass("fade");
	});
	$( "#project5" ).hover(function() {
	  $( ".work2,.work1,.work4,.work3,.work6,.work7,.work8,.work9").toggleClass("fade");
	});
	$( "#project6" ).hover(function() {
	  $( ".work1,.work3,.work2,.work5,.work4,.work7,.work8,.work9").toggleClass("fade");
	});
	$( "#project7" ).hover(function() {
	  $( ".work1,.work3,.work2,.work5,.work6,.work4,.work8,.work9").toggleClass("fade");
	});
	$( "#project8" ).hover(function() {
	  $( ".work2,.work1,.work4,.work3,.work6,.work7,.work5,.work9").toggleClass("fade");
	});
	$( "#project9" ).hover(function() {
	  $( ".work1,.work3,.work2,.work5,.work4,.work7,.work8,.work6").toggleClass("fade");
	});
	$( "#uiux" ).hover(function() {
	  $( ".work7,.work6,.work4,.work8,.work9").toggleClass("fade");
	});
	$( "#web" ).hover(function() {
	  $( ".work1,.work2,.work3,.work4,.work5,.work8,.work9").toggleClass("fade");
	});
	$( "#type" ).hover(function() {
	  $( ".work1,.work3,.work2,.work5,.work4,.work7,.work9,.work6").toggleClass("fade");
	});
	$( "#photography" ).hover(function() {
	  $( ".work1,.work2,.work3,.work4,.work5,.work6,.work7,.work8").toggleClass("fade");
	});
	$( "#visual" ).hover(function() {
	  $( ".work1,.work2,.work3,.work5,.work6,.work7,.work8,.work9").toggleClass("fade");
	});

	var $document = $(document),
    $element = $('#some-element'),
    className = 'hasScrolled';

$document.scroll(function() {
  if ($document.scrollTop() >= 50) {
    // user scrolled 50 pixels or more;
    // do stuff
    $("nav").addClass("navScroll");
  } else {
     $("nav").removeClass("navScroll");
  }
});