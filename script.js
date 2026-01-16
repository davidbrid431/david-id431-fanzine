// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize animations
    initAnimations();

    // Handle image errors
    handleImageErrors();
});

function initAnimations() {
    // Animate cover elements on load
    const tl = gsap.timeline();

    tl.from('.title-main', {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: 0.5
    })
        .from('.title-sub', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.5")
        .from('.cover-line', {
            duration: 0.8,
            scaleX: 0,
            transformOrigin: "left center",
            ease: "power2.out"
        }, "-=0.3")
        .from('.cover-quote', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.2")
        .from('.cover-image', {
            duration: 1,
            scale: 0.8,
            opacity: 0,
            rotation: -10,
            ease: "back.out(1.7)"
        }, "-=0.5")
        .from('.stamp', {
            duration: 0.5,
            scale: 0,
            rotation: -180,
            ease: "back.out(1.7)"
        }, "-=0.3");
}

    // Parallax effect on cover image
    gsap.to('.cover-img', {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: '.cover-page',
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Animate page entries
    gsap.utils.toArray('.content-page').forEach((page, index) => {
        // Stagger animation for page elements
        gsap.from(page.querySelectorAll)('.headline-box, .text-block, .image-frame, .quote-box, .stats-box, .equation-box, .warning-box, .principle-list, .philosophy-points'), {
            scrollTrigger: {
                trigger: page,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }
        });

        // Animate page number
        gsap.from(page.querySelector)('.page-number'), {
            scrollTrigger: {
                trigger: page,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            scale: 0,
            rotation: 180,
        }
