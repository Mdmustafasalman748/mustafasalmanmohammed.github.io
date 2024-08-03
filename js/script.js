document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {
            const answer = item.querySelector(".faq-answer");
            const isVisible = answer.style.display === "block";

            if (isVisible) {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});