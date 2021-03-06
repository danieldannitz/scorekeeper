function wholeProgram() {
  const p1Button = document.querySelector("#p1Button");
  const p2Button = document.querySelector("#p2Button");
  const resetButton = document.querySelector("#resetButton");
  const p1Score = document.querySelector("#p1Score");
  const p2Score = document.querySelector("#p2Score");
  let p1ChangeScore = 0;
  let p2ChangeScore = 0;

  p1Button.addEventListener("click", () => {
    while (p1ChangeScore <= 21) {
      return (p1Score.innerHTML = `${p1ChangeScore++}`);
    }
  });

  p2Button.addEventListener("click", () => {
    if (p2ChangeScore <= 21) {
      return (p2Score.innerHTML = `${p2ChangeScore++}`);
    }
  });

  resetButton.addEventListener("click", () => {
    return (
      (p1ChangeScore = 0),
      (p2ChangeScore = 0),
      (p1Score.innerHTML = "0"),
      (p2Score.innerHTML = "0")
    );
  });

  if (p1ChangeScore === 18) {
    p1Score.classList.add("active");
  }
}
wholeProgram();

function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener("load", addDarkmodeWidget);
