// "Yeter" butonuna tıklanıldığında index.html'ye yönlendirme
document.getElementById('Yeter').addEventListener('click', () => {
    window.location.href = 'index.html';  // Sayfa yönlendirmesi
});

// İlk video bittiğinde ikinci videoyu başlatma işlemi
document.getElementById("backgroundVideo").addEventListener("ended", function() {
    var firstVideo = document.getElementById("backgroundVideo");
    var secondVideo = document.getElementById("secondVideo");

    // İlk videoyu gizle
    firstVideo.style.display = "none";

    // İkinci videoyu göster
    secondVideo.style.display = "block";

    // İkinci videoyu oynat
    secondVideo.play();
});
