// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing Effect
const text = "Computer Science Student | Software Developer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}

typing();

// Contact Info Display
function showInfo(type) {
    const infoBox = document.getElementById("info-box");
    const infoText = document.getElementById("info-text");

    let content = "";

    if (type === "github") {
        content = "https://github.com/enockchisenga";
    } 
    else if (type === "linkedin") {
        content = "https://linkedin.com/in/Enock_Chisenga";
    } 
    else if (type === "twitter") {
        content = "Chisenga@27";
    } 
    else if (type === "email") {
        content = "chisengaenockbwalya@gmail.com";
    }

    infoText.innerHTML = content;
    infoBox.style.display = "block";
}