document.querySelectorAll('.main-link, .link-button').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        link.classList.add('clicked');
        setTimeout(() => {
            window.open(link.href, '_blank');
            link.classList.remove('clicked');
        }, 300);
    });
});