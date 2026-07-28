document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.temoignages__slide');
    const dots = document.querySelectorAll('.temoignages__dot');
    
    
    let currentIndex = slides.length > 1 ? 1 : 0;
    
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.className = 'temoignages__slide'; 
            
            if (index === currentIndex) {
                slide.classList.add('temoignages__slide--active');
            } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                slide.classList.add('temoignages__slide--prev');
            } else if (index === (currentIndex + 1) % slides.length) {
                slide.classList.add('temoignages__slide--next');
            }
        });

        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('temoignages__dot--active');
            } else {
                dot.classList.remove('temoignages__dot--active');
            }
        });
    }

    updateSlider();

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index < slides.length) {
                currentIndex = index;
                updateSlider();
            }
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 5000);

    // ============================================
    // BRAND LOGOS GSAP MARQUEE
    // ============================================
    const brandTrack = document.querySelector('.hero__brands-track');
    if (brandTrack && window.gsap) {
        setTimeout(() => {
            const sets = brandTrack.querySelectorAll('.hero__brands-set');
            if (sets.length > 1) {
             
                const distanceToShift = sets[1].offsetLeft - sets[0].offsetLeft;
                
                const marqueeTween = gsap.to(brandTrack, {
                    x: -distanceToShift,
                    duration: 15,
                    ease: "none",
                    repeat: -1
                });

                brandTrack.addEventListener('mouseenter', () => marqueeTween.pause());
                brandTrack.addEventListener('mouseleave', () => marqueeTween.play());
            }
        }, 500);
    }
});
