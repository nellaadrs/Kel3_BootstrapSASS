var owl = $(".owl-carousel");
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

// Tambahkan fungsi untuk tombol sebelumnya dan selanjutnya
$(".custom-next-btn").click(function(){
    owl.trigger("next.owl.carousel");
});
$(".custom-prev-btn").click(function(){
    owl.trigger("prev.owl.carousel");
});