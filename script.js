const correctAnswers = ["C", "A", "A", "A", "B"];
const form = document.querySelector(".quiz-form");
const resultSpan = document.querySelector(".resultSpan");
const subHead = document.querySelector(".subHead");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });
  window.scrollTo(0, 0);
  result.classList.remove("d-none");
  subHead.textContent = "Your Result : ";
  //   resultSpan.textContent = `You scored ${score}%`;
  let output = 0;
  const timer = setInterval(() => {
    resultSpan.textContent = `You scored ${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 50);
});
