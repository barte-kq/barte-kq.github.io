document.getElementById('colorButton').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Funkcjonalność dla przycisków preset kolorów
const presetButtons = document.querySelectorAll('.preset-color');
presetButtons.forEach(button => {
    button.addEventListener('click', function() {
        document.body.style.backgroundColor = this.style.backgroundColor;
    });
});

// Funkcjonalność dla zmiany tła na obrazek
document.getElementById('imageBackgroundButton').addEventListener('click', function() {
    const imageUrl = prompt("Podaj URL do obrazka, który chcesz ustawić jako tło:");
    if (imageUrl) {
        document.body.style.backgroundImage = `url('${imageUrl}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    }
});

// Obsługa formularza kontaktowego
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Proszę wypełnić wszystkie pola!");
        return;
    }

    document.getElementById('confirmationMessage').innerText = "Dziękujemy za kontakt, " + name + "! Twoja wiadomość została wysłana.";
    document.getElementById('confirmationMessage').classList.remove('hidden');
    document.getElementById('contactForm').reset();
});

// Obsługa formularza opinii
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony

    const userName = document.getElementById('userName').value.trim();
    const userFeedback = document.getElementById('userFeedback').value.trim();

    if (!userName || !userFeedback) {
        alert("Proszę wypełnić wszystkie pola!");
        return;
    }

    const feedback = document.getElementById('feedbackList');
    
    // Tworzenie nowego elementu opinii
    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');
    feedbackItem.innerHTML = `<strong>${userName}</strong>: ${userFeedback}`;
    
    // Dodanie opinii do listy
    feedbackList.appendChild(feedbackItem);
    
    // Resetowanie formularza
    document.getElementById('feedbackForm').reset();
});