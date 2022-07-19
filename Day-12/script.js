const cards = document.querySelectorAll(".card");
const cardContent = document.querySelectorAll(".card-content");
const faqToggle = document.querySelectorAll(".faq-toggle");
for (let i = 0; i < faqToggle.length; i++) {
    faqToggle[i].addEventListener('click', () => {
        cards[i].classList.toggle("card-active");
        cardContent[i].classList.toggle("card-content-active");
        faqToggle[i].classList.toggle("faq-toggle-active");
    })
}
faqToggle[0].click();