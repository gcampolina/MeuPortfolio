document.addEventListener("DOMContentLoaded", function() {
    const text = "Olá, meu nome é Luís Fernando.";
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

