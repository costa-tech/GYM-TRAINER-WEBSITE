document.addEventListener('DOMContentLoaded', function() {
    // Splash screen functionality
    const splashScreen = document.getElementById('splash-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Simulate loading process
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        
        loadingProgress.style.width = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(loadingInterval);
            // Hide splash screen after loading completes
            setTimeout(() => {
                splashScreen.classList.add('splash-hidden');
                // Enable scroll after splash screen is hidden
                document.body.style.overflow = 'auto';
                
                // Trigger entrance animations for hero content
                document.querySelectorAll('.hero-content > *').forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('fade-in-up');
                    }, index * 200);
                });
            }, 500);
        }
    }, 200);
    
    // Disable scroll while splash screen is active
    document.body.style.overflow = 'hidden';
    
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section, .class-card, .trainer-card, .testimonial-card, .card');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    // Initialize intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                
                // Add extra animation for cards when they come into view
                if (entry.target.classList.contains('card')) {
                    const delay = 150;
                    entry.target.querySelectorAll('.card-body > *').forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('fade-in-up');
                        }, index * delay);
                    });
                }
            }
        });
    }, { threshold: 0.15 });

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Smoother scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Futuristic hover effect for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--x-pos', `${x}px`);
            this.style.setProperty('--y-pos', `${y}px`);
        });
    });

    // Add animated link class to appropriate elements
    document.querySelectorAll('nav a, .footer a').forEach(link => {
        link.classList.add('animated-link');
    });

    // Add featured class to special elements
    document.querySelectorAll('.pricing-plan.premium, .special-offer').forEach(element => {
        element.classList.add('featured');
    });

    // Add pulse effect to main CTA buttons
    document.querySelectorAll('.hero .btn-primary').forEach(button => {
        button.classList.add('cta-btn');
    });

    // Enhanced parallax effect
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                // Only apply parallax if element is in viewport
                const rect = element.getBoundingClientRect();
                const isInViewport = (
                    rect.top <= window.innerHeight &&
                    rect.bottom >= 0
                );
                
                if (isInViewport) {
                    const speed = element.getAttribute('data-speed') || 0.5;
                    const yPos = -(scrollPosition * speed);
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            });
        }, {passive: true}); // Improved performance with passive listener
    }

    // Tilt effect for cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const tiltX = (centerY - y) / 10;
            const tiltY = (x - centerX) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Fix height issues and smooth scrolling
    function adjustDocumentHeight() {
        const docHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        
        document.documentElement.style.minHeight = docHeight + 'px';
    }
    
    window.addEventListener('resize', adjustDocumentHeight);
    adjustDocumentHeight();

    // Interactive cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Enhanced hover effect for interactive elements
    document.querySelectorAll('a, button, .card').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-active');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-active');
        });
    });
    
    // Add magnetic effect to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
            
            if (distance < maxDistance) {
                const pull = 0.15; // Magnetic pull strength
                const moveX = (x - centerX) * pull;
                const moveY = (y - centerY) * pull;
                
                this.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
});
