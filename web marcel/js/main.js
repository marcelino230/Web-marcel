window.onscroll = function () {
	myFunction()
};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

//Gallery
const images = document.querySelector(".images");
const big = document.querySelector('.big');
const thumbs = document.querySelectorAll('.thumb');

images.addEventListener('click', function (e) {
	if (e.target.className == 'thumb') {
		big.src = e.target.src;
		big.classList.add('fade');
		setTimeout(function () {
			big.classList.remove('fade');
		}, 500);
		thumbs.forEach(function (thumb) {
			thumb.className = 'thumb';
		});
		e.target.classList.add('active');
	}
});

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}

$(function () {

	'use strict';

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#probootstrap-loader').length > 0) {
				$('#probootstrap-loader').removeClass('show');
			}
		}, 1);
	};
	loader();


	var controller = new ScrollMagic.Controller(),
		tl = new TimelineLite(),
		tl2 = new TimelineLite();

	tl2
		.from('.probootstrap-device-vertical-1', 1, {
			x: -100,
			autoAlpha: 0,
			ease: Power4.easeOut
		})
		.staggerFrom('.probootstrap-cover .probootstrap-stagger', 1, {
			autoAlpha: 0,
			x: -100,
			scale: 0.95,
			delay: 0.2,
			ease: Power4.easeOut
		}, 0.2, '-=.8')


	var scene = new ScrollMagic.Scene({
			triggerElement: '.probootstrap-scene-0',
			reverse: false
			// offset: 500
		})
		.setTween(tl2)
		// .addIndicators({name: "scene 1", colorEnd: "#F6A623"})
		.addTo(controller);


	tl
		.from('.probootstrap-device-center', .5, {
			autoAlpha: 0,
			y: 100,
			ease: Power4.easeIn
		}, )
		.from('.probootstrap-device-left', .5, {
			autoAlpha: 0,
			x: 200,
			delay: .2,
			ease: Power4.easeIn
		}, '-=.5')
		.from('.probootstrap-device-right', .5, {
			autoAlpha: 0,
			x: -200,
			delay: .2,
			ease: Power4.easeIn
		}, '-=.7')

	var scene = new ScrollMagic.Scene({
			triggerElement: '.probootstrap-scene-1',
			reverse: false
			// offset: 500
		})
		.setTween(tl)
		// .addIndicators({name: "scene 1", colorEnd: "#F6A623"})
		.addTo(controller);




});