// Set the date we're counting down to (August 30, 2024 at 1:00 PM)
const countDownDate = new Date("August 30, 2024 13:00:00").getTime();

// Update the countdown every second
const countdownElement = document.getElementById("countdown");
const loginForm = document.getElementById("login-form");

const updateCountdown = () => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  const distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(intervalId);
    countdownElement.innerHTML = "EXPIRED";
  }
};

// Function to handle login
const handleLogin = (event) => {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;

  // Your validation logic here
  if (username === "Dianis30" && password === "30/08/2022") {
    // Redirect to the specified page upon successful login
    window.location.href = "https://mariomorenorojs.github.io/princes.github.io/";
  } else {
    // Display error message
    alert("Usuario o contraseña incorrectos");
  }
};

// Attach event listener to the login form
loginForm.addEventListener("submit", handleLogin);

// Update countdown initially
updateCountdown();

// Update countdown every second
const intervalId = setInterval(updateCountdown, 1000);
