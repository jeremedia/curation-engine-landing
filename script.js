/**
 * Curation Engine Landing Page
 * Scroll Animations and Micro-interactions
 */

// Smooth Scroll Animation Observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initFormHandling();
    initNavBehavior();
});

/**
 * Initialize scroll-triggered reveal animations
 */
function initScrollAnimations() {
    // Add reveal class to sections and key elements
    const revealElements = [
        '.about',
        '.about-visual',
        '.about-content',
        '.how',
        '.step',
        '.mission',
        '.cta'
    ];

    revealElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    });

    // Stagger animation for steps
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.1}s`;
    });

    // Nested frame parallax effect on scroll
    window.addEventListener('scroll', handleParallax);
}

/**
 * Parallax effect for nested frames
 */
function handleParallax() {
    const scrolled = window.pageYOffset;
    const nestedFrames = document.querySelectorAll('.nested-frame');

    nestedFrames.forEach((frame, index) => {
        const speed = (index + 1) * 0.02;
        const yPos = scrolled * speed;
        frame.style.transform = `translateY(${yPos}px)`;
    });

    // Hero frames subtle rotation on scroll
    const heroFrames = document.querySelectorAll('.hero-frame');
    heroFrames.forEach((frame, index) => {
        const rotation = scrolled * 0.01 * (index + 1);
        frame.style.transform = `scale(1) rotate(${rotation}deg)`;
    });
}

/**
 * Navigation behavior on scroll
 */
function initNavBehavior() {
    let lastScroll = 0;
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.08)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

/**
 * Form handling for waitlist signup
 */
function initFormHandling() {
    const form = document.querySelector('.cta-form');

    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

/**
 * Handle waitlist form submission
 */
function handleFormSubmit(e) {
    e.preventDefault();

    const emailInput = e.target.querySelector('.cta-input');
    const submitButton = e.target.querySelector('.btn-primary');
    const email = emailInput.value;

    // Validate email
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }

    // Disable form during submission
    emailInput.disabled = true;
    submitButton.disabled = true;
    submitButton.textContent = 'Joining...';

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Success state
        submitButton.textContent = '✓ Joined!';
        submitButton.style.background = '#22c55e';
        emailInput.value = '';

        showMessage('Welcome! You\'ll hear from us soon about Curation Engine v1.0.', 'success');

        // Reset form after delay
        setTimeout(() => {
            emailInput.disabled = false;
            submitButton.disabled = false;
            submitButton.textContent = 'Join Waitlist';
            submitButton.style.background = '';
        }, 3000);
    }, 1500);
}

/**
 * Email validation
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Show user feedback message
 */
function showMessage(text, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const message = document.createElement('div');
    message.className = `form-message form-message-${type}`;
    message.textContent = text;

    // Style the message
    Object.assign(message.style, {
        position: 'fixed',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '1rem 2rem',
        background: type === 'success' ? '#22c55e' : '#ef4444',
        color: 'white',
        borderRadius: '4px',
        fontWeight: '700',
        fontSize: '1rem',
        zIndex: '10000',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        animation: 'slideDown 0.3s ease-out'
    });

    document.body.appendChild(message);

    // Remove after delay
    setTimeout(() => {
        message.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => message.remove(), 300);
    }, 3000);
}

// Add keyframes for message animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

/**
 * Easter egg: Konami code for "curator mode"
 */
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateCuratorMode();
    }
});

function activateCuratorMode() {
    document.body.style.animation = 'rainbow 3s linear infinite';

    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    showMessage('🎨 Curator Mode Activated! Worthy of eight years.', 'success');

    setTimeout(() => {
        document.body.style.animation = '';
    }, 3000);
}
