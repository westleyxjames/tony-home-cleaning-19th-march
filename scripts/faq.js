// FAQ page specific JavaScript

// Initialize FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');
const faqQuestions = document.querySelectorAll('.faq-question');

// Open first FAQ by default
if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
}

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
        
        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });
});

// Allow keyboard navigation
faqQuestions.forEach((question, index) => {
    question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
        }
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (index + 1) % faqQuestions.length;
            faqQuestions[nextIndex].focus();
        }
        
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (index - 1 + faqQuestions.length) % faqQuestions.length;
            faqQuestions[prevIndex].focus();
        }
    });
});
