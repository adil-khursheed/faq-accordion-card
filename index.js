const questions = document.querySelectorAll(".question-answer-section");
const text = document.querySelector(".ques-text");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");
        // text.style.fontWeight = "700";
    })
})