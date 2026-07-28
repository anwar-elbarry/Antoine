document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Fade up animations for section headers
    gsap.utils.toArray('.secrets__header, .temoignages__header, .biography__content').forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%", 
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Staggered fade up for Secrets Cards
    gsap.from('.secrets__card', {
        scrollTrigger: {
            trigger: '.secrets__cards',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Fade up for Biography Image
    gsap.from('.biography__img', {
        scrollTrigger: {
            trigger: '.biography__container',
            start: "top 70%",
            toggleActions: "play none none none"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});
