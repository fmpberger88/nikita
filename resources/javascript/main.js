let imageBox = document.querySelector('.image-box')

imageBox.addEventListener('touchstart', function () {
    imageBox.style.transform = 'scale(1.5)';
    imageBox.style.transform = 'transform 0.3s ease-in-out';
});

imageBox.addEventListener('touchend', function() {
    imageBox.style.transform = 'scale(1)';
    imageBox.style.transition = 'transform 0.3s ease-in-out';
});