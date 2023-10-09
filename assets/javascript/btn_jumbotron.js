var tombol = document.getElementById('scroll');
        var tujuan = document.getElementById('kualitas');

        tombol.addEventListener('click', function() {
        tujuan.scrollIntoView({ behavior: 'smooth' });
    });