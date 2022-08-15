function initTyping() {
    let letter = 0;
    const text = '     Kalel Matheus';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".nome").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
}
initTyping();
