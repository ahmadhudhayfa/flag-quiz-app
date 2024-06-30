function startQuiz() {
  const guess = prompt("What does this ✅ stands for?");

  if (guess.toLowerCase()==='tick') {
    alert('You guessed correctly!');
  } else {
    alert('Sorry, the correct answer was Tick.');
  }
}