/* ===========================
   TYPING ANIMATION
=========================== */

const typingText = [
    "Full Stack Developer",
    "Flutter Developer",
    "Laravel Developer",
    "UI / UX Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function type() {

    const currentText = typingText[textIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex++);

        if (charIndex > currentText.length) {

            isDeleting = true;

            setTimeout(type, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex >= typingText.length)
                textIndex = 0;

        }

    }

    setTimeout(type, isDeleting ? 50 : 100);

}

type();



/* ===========================
   NAVBAR SHADOW
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#0f172a";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "#111827";
        navbar.style.boxShadow = "none";

    }

});



/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* ===========================
   FADE-IN ANIMATION
=========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
