const questions = document.querySelectorAll(".question-answer-section");
const text = document.querySelector(".ques-text");


questions.forEach((question) => {
    question.addEventListener("click", () => {
        // question.classList.toggle("active");
        if (question.classList.contains("active")) {
            question.classList.remove("active");
        } else {
            const questionActive = document.querySelectorAll(".active");
            questionActive.forEach((activeQuestion) => {
                activeQuestion.classList.remove("active");
            })
            question.classList.add("active");
            
        }
        
    })
})