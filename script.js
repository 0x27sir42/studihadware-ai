// Main JavaScript file for STUDIHARDWARE website

document.addEventListener('DOMContentLoaded', function() {
    console.log('STUDIHARDWARE website loaded!');

    // ===== Navigation Menu Toggle =====
    const menuTrigger = document.getElementById('menuTrigger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuTrigger.addEventListener('click', function() {
        menuTrigger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuTrigger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnTrigger = menuTrigger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnTrigger && navMenu.classList.contains('active')) {
            menuTrigger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // ===== Smooth Scroll with Offset =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Parallax Effect for Hero Background =====
    const heroBackground = document.querySelector('.hero-background');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // ===== Floating Animation for Mathematical Symbols =====
    const mathSymbols = document.querySelectorAll('.math-symbol');
    
    mathSymbols.forEach((symbol, index) => {
        const randomDelay = Math.random() * 5;
        const randomDuration = 15 + Math.random() * 10;
        symbol.style.animationDelay = `${randomDelay}s`;
        symbol.style.animationDuration = `${randomDuration}s`;
    });

    // ===== Intersection Observer for Scroll Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for fade-in animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // ===== Neural Network Connections (SVG Lines) =====
    const structureBlocks = document.querySelectorAll('.structure-block');
    const neuralSvg = document.getElementById('neuralConnections');

    function drawConnections() {
        if (!neuralSvg || structureBlocks.length === 0) return;

        // Clear existing lines
        neuralSvg.innerHTML = '';

        const svgRect = neuralSvg.getBoundingClientRect();
        
        structureBlocks.forEach((block, index) => {
            if (index < structureBlocks.length - 1) {
                const nextBlock = structureBlocks[index + 1];
                const rect1 = block.getBoundingClientRect();
                const rect2 = nextBlock.getBoundingClientRect();

                const x1 = rect1.left + rect1.width / 2 - svgRect.left;
                const y1 = rect1.top + rect1.height / 2 - svgRect.top;
                const x2 = rect2.left + rect2.width / 2 - svgRect.left;
                const y2 = rect2.top + rect2.height / 2 - svgRect.top;

                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', x1);
                line.setAttribute('y1', y1);
                line.setAttribute('x2', x2);
                line.setAttribute('y2', y2);
                line.setAttribute('stroke', 'rgba(139, 92, 246, 0.3)');
                line.setAttribute('stroke-width', '2');
                line.style.transition = 'all 0.3s ease';

                neuralSvg.appendChild(line);
            }
        });
    }

    // Draw connections on load and resize
    if (neuralSvg) {
        drawConnections();
        window.addEventListener('resize', drawConnections);
    }

    // ===== Ecosystem Slider =====
    const ecosystemSlider = document.getElementById('ecosystemSlider');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');

    if (ecosystemSlider && sliderPrev && sliderNext) {
        let isDown = false;
        let startX;
        let scrollLeft;

        // Mouse drag functionality
        ecosystemSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            ecosystemSlider.style.cursor = 'grabbing';
            startX = e.pageX - ecosystemSlider.offsetLeft;
            scrollLeft = ecosystemSlider.scrollLeft;
        });

        ecosystemSlider.addEventListener('mouseleave', () => {
            isDown = false;
            ecosystemSlider.style.cursor = 'grab';
        });

        ecosystemSlider.addEventListener('mouseup', () => {
            isDown = false;
            ecosystemSlider.style.cursor = 'grab';
        });

        ecosystemSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - ecosystemSlider.offsetLeft;
            const walk = (x - startX) * 2;
            ecosystemSlider.scrollLeft = scrollLeft - walk;
        });

        // Touch drag functionality
        let touchStartX = 0;
        let touchScrollLeft = 0;

        ecosystemSlider.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX - ecosystemSlider.offsetLeft;
            touchScrollLeft = ecosystemSlider.scrollLeft;
        });

        ecosystemSlider.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - ecosystemSlider.offsetLeft;
            const walk = (x - touchStartX) * 2;
            ecosystemSlider.scrollLeft = touchScrollLeft - walk;
        });

        // Button controls
        sliderPrev.addEventListener('click', () => {
            ecosystemSlider.scrollBy({
                left: -430,
                behavior: 'smooth'
            });
        });

        sliderNext.addEventListener('click', () => {
            ecosystemSlider.scrollBy({
                left: 430,
                behavior: 'smooth'
            });
        });
    }

    // ===== Hover Glow Effects for Structure Blocks =====
    structureBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.5), 0 0 60px rgba(0, 217, 255, 0.4)';
        });

        block.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // ===== Active Navigation Link on Scroll =====
    const navLinksArray = Array.from(navLinks);
    const sectionsArray = Array.from(sections);

    window.addEventListener('scroll', () => {
        let current = '';
        
        sectionsArray.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinksArray.forEach(link => {
            link.style.borderBottomColor = 'transparent';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.borderBottomColor = 'var(--color-purple)';
            }
        });
    });

    // ===== Gradient Animation for Hero Title =====
    const gradientText = document.querySelector('.gradient-text');
    if (gradientText) {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            gradientText.style.filter = `hue-rotate(${hue}deg)`;
        }, 50);
    }

    // ===== Performance Optimization: Throttle Scroll Events =====
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(function() {
        // Scroll-based animations handled here
    }, 100));

    // ===== Add Loading Animation =====
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    console.log('All interactive features initialized successfully!');
});
