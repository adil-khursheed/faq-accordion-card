const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const arrowIcon = document.querySelectorAll(".arrow-icon");

question.forEach((e) => {
    e.addEventListener("click", () => {
        // console.log("clicked");
        answer.style.display = "block";
    })
})