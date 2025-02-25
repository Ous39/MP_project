document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('hidden', window.scrollY < 500);
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Accessibility features
document.getElementById('font-increase').addEventListener('click', () => {
    document.documentElement.style.fontSize = 
        `${parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.1}px`;
});

document.getElementById('font-decrease').addEventListener('click', () => {
    document.documentElement.style.fontSize = 
        `${parseFloat(getComputedStyle(document.documentElement).fontSize) * 0.9}px`;
});

document.getElementById('high-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Loader
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
});



    // Dynamic Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Accessibility Features
    document.getElementById('font-increase').addEventListener('click', () => {
        document.documentElement.style.fontSize = 
            `${parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.1}px`;
    });

    document.getElementById('font-decrease').addEventListener('click', () => {
        document.documentElement.style.fontSize = 
            `${parseFloat(getComputedStyle(document.documentElement).fontSize) * 0.9}px`;
    });

    document.getElementById('high-contrast').addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // Back to Top
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('back-to-top');
        btn.classList.toggle('hidden', window.scrollY < 500);
    });

    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });