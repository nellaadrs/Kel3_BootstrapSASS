const lihat = document.getElementById("lihat");
const lihatSection = document.getElementById("lihatSection");

lihat.addEventListener("click", function () {
	var headerOffset = 65;
	var elementPosition = lihatSection.getBoundingClientRect().top;
	var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

	if (window.innerWidth < 1000) {
		window.scrollTo({
			top: offsetPosition - 40,
			behavior: "smooth",
		});
	} else {
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}
});

$(document).ready(function () {
	var owl = $(".owl-carousel");
	owl.owlCarousel({
		items: 3,
		loop: false,
		margin: 35,
		autoplay: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				loop: true,
			},
			810: {
				items: 2,
				loop: true,
			},
			1280: {
				items: 3,
			},
		},
	});

	$(".custom-next-btn").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".custom-prev-btn").click(function () {
		owl.trigger("prev.owl.carousel");
	});
});

if (window.innerWidth < 400 && window.innerHeight < 820) {
	$("#floatblock").css("margin-bottom", "150px");
} else {
	$("#floatblock").css("margin-bottom", "0px");
}
