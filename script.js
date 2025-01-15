const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const berkantImage = document.getElementById('berkantImage');
const yeterImage = document.getElementById('yeterImage');
const backgroundMusic = document.getElementById('backgroundMusic');
const container = document.getElementById('container');

// Handle 'Hayır' button click
noButton.addEventListener('click', () => {
    noButton.style.display = 'none';
});

// Handle 'Evet' button click
yesButton.addEventListener('click', () => {
    berkantImage.style.display = 'block';
    yeterImage.style.display = 'block';

    let berkantPos = -50; // Berkant solda başlayacak
    let yeterPos = 100;  // Yeter sağda başlayacak
    const interval = setInterval(() => {
        if (berkantPos >= 50 && yeterPos <= 50) {
            clearInterval(interval);
            backgroundMusic.play(); // Play music when ready
            document.body.style.backgroundColor = 'pink';

            // Create random moving hearts
            for (let i = 0; i < 10; i++) {
                createHeart();
            }
        } else {
            berkantPos += 2;
            yeterPos -= 2;
            berkantImage.style.left = `${berkantPos}%`;
            yeterImage.style.right = `${yeterPos}%`;
        }
        // Kalp oluşturma için bir örnek
    for (let i = 0; i < 3; i++) { // 5 kalp oluşturulacak
        createHeart();
}
    }, 50);

    // Hide text and buttons smoothly with fade-out
    document.querySelector('h1').style.opacity = '0';
    yesButton.style.opacity = '0';
    noButton.style.opacity = '0';
    
    // After 1 second, hide them completely
    setTimeout(() => {
        document.querySelector('h1').style.display = 'none';
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
    }, 1000);

    // Kalp oluşturma fonksiyonunu çağır
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('img');
    heart.src = `kalp${Math.floor(Math.random() * 3) + 1}.png`; // 3 farklı kalp resmi
    heart.classList.add('heart');
    document.body.appendChild(heart);

    const heartSize = 30; // Kalp boyutu
    heart.style.width = `${heartSize}px`;
    heart.style.height = `${heartSize}px`;

    // Ekranın tam ortasında başlasın
    const screenCenterX = window.innerWidth / 2;
    const screenCenterY = window.innerHeight / 2;

    // Başlangıç pozisyonu (kalp ekranın ortasında olacak)
    const startX = screenCenterX + (Math.random() - 0.5) * 100; // 100px'lik rastgele bir yayılım
    const startY = screenCenterY + (Math.random() - 0.5) * 100; // 100px'lik rastgele bir yayılım

    // Başlangıç pozisyonlarını ayarla
    heart.style.position = 'absolute';
    heart.style.left = `${startX - heartSize / 2}px`;
    heart.style.top = `${startY - heartSize / 2}px`;

    // Hareket yönü ve hızı (rastgele değerler)
    let speedX = (Math.random() - 0.5) * 4; // -2 ile 2 arasında hız (x ekseni)
    let speedY = (Math.random() - 0.5) * 4; // -2 ile 2 arasında hız (y ekseni)

    // Kalp hareket fonksiyonu
    function moveHeart() {
        const currentX = parseFloat(heart.style.left);
        const currentY = parseFloat(heart.style.top);

        // Yeni pozisyonları hesapla
        let newX = currentX + speedX;
        let newY = currentY + speedY;

        // Ekran sınırlarını kontrol et ve çarptığında yön değiştir
        if (newX <= 0 || newX >= window.innerWidth - heartSize) {
            speedX *= -1; // Yatay yön değiştir
        }
        if (newY <= 0 || newY >= window.innerHeight - heartSize) {
            speedY *= -1; // Dikey yön değiştir
        }

        // Yeni pozisyonları güncelle
        heart.style.left = `${Math.max(0, Math.min(window.innerWidth - heartSize, newX))}px`;
        heart.style.top = `${Math.max(0, Math.min(window.innerHeight - heartSize, newY))}px`;
    }

    // Kalp hareketini sürekli güncelle
    setInterval(moveHeart, 10);
}

ebrar.addEventListener('click', () => {
    window.location.href = 'sayfa1.html';
});

mercimek.addEventListener('click', () => {
    window.location.href = 'sayfa2.html';
});