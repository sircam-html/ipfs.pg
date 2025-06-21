function scrollToTopFast(duration = 200) { // duration in ms
    const start = window.scrollY || window.pageYOffset;
    const startTime = performance.now();

    function scroll() {
        const now = performance.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease out cubic

        window.scrollTo(0, start * (1 - easeProgress));

        if (progress < 1) {
            requestAnimationFrame(scroll);
        }
    }

    requestAnimationFrame(scroll);
}

document.addEventListener('keydown', function(e) {
    const active = document.activeElement;
    const isEditable = active && (
        active.tagName === 'INPUT' ||
        active.tagName === 'TEXTAREA' ||
        active.isContentEditable
    );

    if (e.key === 'Home' && !e.ctrlKey && !isEditable) {
        e.preventDefault();
        scrollToTopFast(200); // scroll to top in 200ms
    }
});
