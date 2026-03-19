// Contact page specific JavaScript

const contactForm = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
            consent: document.getElementById('consent').checked
        };
        
        // In a real application, this would send data to a backend
        console.log('Contact form submitted:', formData);
        
        // Show success message
        contactForm.style.display = 'none';
        contactSuccess.style.display = 'block';
        
        // Re-initialize Lucide icons for the success message
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Scroll to success message
        contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Reset form after 5 seconds
        setTimeout(() => {
            contactForm.style.display = 'block';
            contactSuccess.style.display = 'none';
            contactForm.reset();
        }, 5000);
    });
}

// Setup form validation
setupFormValidation('contactForm');
