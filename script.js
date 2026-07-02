// ===============================
// Typing Animation
// ===============================

const texts = [
    "AI & Data Science Student",
    "Java Developer",
    "Web Designer",
    "AI Enthusiast",
    "Problem Solver",
    "Quick Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            erase();

        }, 1500);

    } else {

        setTimeout(type, 120);

    }

})();

function erase() {

    letter = currentText.slice(0, --index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === 0) {

        count++;

        setTimeout(type, 400);

    } else {

        setTimeout(erase, 70);

    }

}

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";

    } else {

        nav.style.boxShadow = "none";

    }

});

// ===============================
// Hero Fade-In Animation
// ===============================

window.addEventListener("load", () => {

    document.querySelector(".content").style.opacity = "1";
    document.querySelector(".content").style.transform = "translateY(0)";

    document.querySelector(".image").style.opacity = "1";
    document.querySelector(".image").style.transform = "translateX(0)";

});