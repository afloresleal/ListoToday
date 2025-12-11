// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button click handlers with visual feedback
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple styles dynamically
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add fade-in class styles
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(fadeInStyle);

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Download button handlers
const downloadButtons = document.querySelectorAll('.btn-primary, .btn-cta');
downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Open App Store in new tab
        window.open('https://apps.apple.com/us/app/listo-today/id6756390475', '_blank');
    });
});

// Learn More button handler
const learnMoreBtn = document.querySelector('.btn-secondary');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        const featuresSection = document.querySelector('#features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Get Started button handler
const getStartedBtn = document.querySelector('.btn-get-started');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
        // Open App Store in new tab
        window.open('https://apps.apple.com/us/app/listo-today/id6756390475', '_blank');
    });
}

// Footer download link handler
const footerDownloadLinks = document.querySelectorAll('a[href="#download"], a[href="#descargar"]');
footerDownloadLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Open App Store in new tab
        window.open('https://apps.apple.com/us/app/listo-today/id6756390475', '_blank');
    });
});

// Phone image hover effect - bring back image to front
const phone1 = document.querySelector('.phone-1');
const phone2 = document.querySelector('.phone-2');

if (phone1 && phone2) {
    // Add smooth transition styles
    phone1.style.transition = 'all 0.4s ease';
    phone2.style.transition = 'all 0.4s ease';

    // Set initial z-index values
    phone1.style.zIndex = '2';
    phone2.style.zIndex = '1';

    // Hover on phone 1 (front image)
    phone1.addEventListener('mouseenter', () => {
        phone1.style.transform = 'scale(1.05)';
    });

    phone1.addEventListener('mouseleave', () => {
        phone1.style.transform = '';
    });

    // Hover on phone 2 (back image) - bring it to front
    phone2.addEventListener('mouseenter', () => {
        phone2.style.zIndex = '3';
        phone2.style.transform = 'scale(1.05)';
    });

    phone2.addEventListener('mouseleave', () => {
        phone2.style.zIndex = '1';
        phone2.style.transform = '';
    });
}

// Add parallax effect to hero section (desktop only)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-right');
    const isDesktop = window.matchMedia('(min-width: 969px)').matches;

    if (hero && isDesktop) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    } else if (hero && !isDesktop) {
        // Reset transform on mobile to prevent any scroll animation
        hero.style.transform = '';
    }
});

// Console greeting
console.log('%c🚀 Welcome to Listo! ', 'font-size: 20px; font-weight: bold; color: #2626FF;');
console.log('%cBuilt with ❤️ for productivity enthusiasts', 'font-size: 12px; color: #666;');
