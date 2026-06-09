// FAQ

const faqButtons =
document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer =
        button.nextElementSibling;

        answer.classList.toggle("show");

    });

});

// MODO OSCURO

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});