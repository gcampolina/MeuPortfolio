document.addEventListener("DOMContentLoaded", function() {
    const text = "Olá, meu nome é Gabriel.";
    const typingElement = document.getElementById('typing');
    const cursorElement = document.getElementById('cursor');
    
    let index = 0;
    
    function typeLetter() {
        if (index < text.length) {
            cursorElement.before(text.charAt(index));
            index++;
            setTimeout(typeLetter, 50);
        } 
    }

    typeLetter();
});


document.addEventListener("DOMContentLoaded", function() {
    const navbarHeight = document.querySelector('.navbar-box').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


