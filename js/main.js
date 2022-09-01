document.addEventListener('DOMContentLoaded', () => {
   // Scroll Reveal
    const sr = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 1000,
        reset: true
    });

    sr.reveal('.projects, .project, .skills, .skill_card')

})