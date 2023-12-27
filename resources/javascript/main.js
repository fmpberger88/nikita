document.addEventListener('DOMContentLoaded', function() {
    function createBubble() {
        const sectionIntro = document.querySelector('.intro');
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.random() * 60 + 20; // Bubble size between 20px and 80px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;

        bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position

        sectionIntro.appendChild(bubble);

        // Remove bubble after it animates out
        setTimeout(() => {
            bubble.remove();
        }, 5000); // Assuming animation takes 5 seconds
    }

    // Create a new bubble every 500 milliseconds
    setInterval(createBubble, 500);

    // You might want to add a limit on how many bubbles can exist at the same time
});

document.addEventListener('DOMContentLoaded', function() {
    var cookiePopup = document.getElementById('cookiePopup');
    var acceptCookies = document.getElementById('acceptCookies');

    acceptCookies.onclick = function() {
        cookiePopup.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    };

    if (!localStorage.getItem('cookiesAccepted')) {
        cookiePopup.style.display = 'block';
    }
});

