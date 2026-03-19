// Home page specific JavaScript

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
        }
    }, 16);
}

// Trigger counter animation when stats are in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                stat.textContent = '0';
                animateCounter(stat, number);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Service card hover effects - already handled by CSS

// Testimonial slider (if you want to add auto-rotation)
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    if (testimonialCards.length <= 3) return; // Don't rotate if showing all cards
    
    testimonialCards.forEach((card, index) => {
        card.style.display = 'none';
    });
    
    for (let i = 0; i < 3; i++) {
        const index = (currentTestimonial + i) % testimonialCards.length;
        testimonialCards[index].style.display = 'block';
    }
    
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
}

// Uncomment to enable auto-rotation
// setInterval(rotateTestimonials, 5000);
