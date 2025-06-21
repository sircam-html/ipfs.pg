// scroll-home.js
document.addEventListener('keydown', function(e) {
    const active = document.activeElement;
    const isEditable = active && (
        active.tagName === 'INPUT' ||
        active.tagName === 'TEXTAREA' ||
        active.isContentEditable
    );

    if (e.key === 'Home' && !e.ctrlKey && !isEditable) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
