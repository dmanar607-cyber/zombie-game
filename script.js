function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(screenId);
  nextScreen.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMessage(elementId, text, type) {
  const message = document.getElementById(elementId);

  message.textContent = text;
  message.className = "message " + type;
}

// PASSCODE: 26320
document.getElementById("codeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const code = document.getElementById("passcode").value;
  const message = document.getElementById("codeMessage");

  if (code === "26320") {
    showMessage(
      "codeMessage",
      "ACCESS GRANTED! GET READY, SURVIVOR!",
      "success"
    );

    this.querySelector('button[type="submit"]').disabled = true;

    setTimeout(() => {
      this.reset();
      this.querySelector('button[type="submit"]').disabled = false;
      message.textContent = "";
      message.className = "message";
      showScreen("question1");
    }, 1000);

  } else {
    showMessage(
      "codeMessage",
      "ACCESS DENIED! INCORRECT PASSCODE. TRY AGAIN!",
      "error"
    );
  }
});

// QUESTION 1: VIROLOGY
document.getElementById("quiz1").addEventListener("submit", function(event) {
  event.preventDefault();

  const answer = this.querySelector('input[name="q1"]:checked');

  if (!answer) {
    showMessage(
      "message1",
      "PLEASE SELECT AN ANSWER FIRST!",
      "error"
    );
    return;
  }

  if (answer.value === "B") {
    showMessage(
      "message1",
      "CORRECT! Viruses are obligate intracellular parasites. Proceeding...",
      "success"
    );

    this.querySelectorAll('input[name="q1"]').forEach(input => {
      input.disabled = true;
    });

    this.querySelector('button[type="submit"]').disabled = true;

    setTimeout(() => {
      showScreen("question2");
    }, 1800);

  } else {
    showMessage(
      "message1",
      "WRONG ANSWER! The infection is spreading. TRY AGAIN!",
      "error"
    );
  }
});

// QUESTION 2: VACCINATION
document.getElementById("quiz2").addEventListener("submit", function(event) {
  event.preventDefault();

  const answer = this.querySelector('input[name="q2"]:checked');

  if (!answer) {
    showMessage(
      "message2",
      "PLEASE SELECT AN ANSWER FIRST!",
      "error"
    );
    return;
  }

  if (answer.value === "C") {
    showMessage(
      "message2",
      "CORRECT! IMMUNOLOGICAL MEMORY IS KEY. MISSION COMPLETE!",
      "success"
    );

    this.querySelectorAll('input[name="q2"]').forEach(input => {
      input.disabled = true;
    });

    this.querySelector('button[type="submit"]').disabled = true;

    setTimeout(() => {
      showScreen("final");
    }, 1800);

  } else {
    showMessage(
      "message2",
      "WRONG ANSWER! HUMANITY IS RUNNING OUT OF TIME. TRY AGAIN!",
      "error"
    );
  }
});