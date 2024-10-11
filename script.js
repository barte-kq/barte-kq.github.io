document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById('formResponse').innerHTML = `
        <p>Dziękujemy, ${name}! Twoja wiadomość została wysłana.</p>
        <p>Email: ${email}</p>
        <p>Wiadomość: ${message}</p>
    `;
    
    // Resetowanie formularza
    event.target.reset();
});

// Wyszukiwanie w galerii
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const images = document.querySelectorAll('.gallery-image');

    images.forEach(img => {
        const altText = img.alt.toLowerCase();
        if (altText.includes(query)) {
            img.style.display = '';
        } else {
            img.style.display = 'none';
        }
    });
});

// System oceniania projektów
const rateButtons = document.querySelectorAll('.rate-btn');
rateButtons.forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const ratingElement = document.getElementById(`rating-${projectId}`);
        let currentRating = ratingElement.innerHTML.includes('Ocen') ? 0 : parseInt(ratingElement.innerHTML) || 0;
        currentRating++;
        ratingElement.innerHTML = `${currentRating} ocen`;
    });
});

// Modal do wyświetlania obrazków
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");

document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
