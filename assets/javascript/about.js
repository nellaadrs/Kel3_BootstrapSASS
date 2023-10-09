// tombol jumbotron
var tombol = document.getElementById('scroll');
        var tujuan = document.getElementById('kualitas');

        tombol.addEventListener('click', function() {
        tujuan.scrollIntoView({ behavior: 'smooth' });
    });

// 

// baca selengkapnya
document.getElementById('read-more-mobile').addEventListener('click', function() {
    var moreText = document.getElementById('more-mobile');
    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        this.innerHTML = 'Tutup';
    } else {
        moreText.style.display = 'none';
        this.innerHTML = 'Baca Selengkapnya';
    }
    });
    

    // slider gambar
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
