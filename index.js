let hero = document.querySelector(".heroIntro");

// creating the clock container
let clockContainer = document.createElement("div");
clockContainer.classList.add("clockContainer");

// append the clock container in the hero
hero.appendChild(clockContainer);

// creating the digital clock element
let digitalClock = document.createElement("p");
digitalClock.classList.add("clock");

// append the digital clock in the clock container
clockContainer.appendChild(digitalClock);

// creating date element
let dateElement = document.createElement("p");

// append the date element in the clock container
clockContainer.appendChild(dateElement);

// === HANDLERS ===

// getting the date and ticking the clock function

const updateClock = () => {
  let now = new Date();

  // get time
  //   let hours = now.toString(now.getHours()).padStart(2, "0");
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  let day = now.toLocaleString("en-us", { weekday: "long" });
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  digitalClock.textContent = `${hours}: ${minutes}: ${seconds}`;
  dateElement.textContent = `${day}, ${month}-${date}-${year}`;
};

// toggle theme

const handleToggleTheme = () => {
  let toggleButton = document.getElementById("theme-toggle");
  const darkMode = toggleButton.innerHTML.trim() === "🌜";

  const themeProperties = darkMode
    ? {
        emoji: "🌞",
        "--main-background": "#4C585B",
        "--wave-color": "#AAB396",
        "--heading": "#FFE700",
        "--text": "#F5EFFF",
        "--hamburger": "#FFE700",
      }
    : {
        emoji: "🌜",
        "--main-background": "#fff",
        "--wave-color": "#c1e1ff",
        "--heading": "#0f2f76",
        "--text": "#2e2e2e",
        "--hamburger": "#0f2f76",
      };

  toggleButton.textContent = themeProperties.emoji;
  Object.entries(themeProperties).forEach(([key, value]) => {
    if (key.startsWith("--")) {
      document.documentElement.style.setProperty(key, value);
    }
  });
};

// menu dropdown

const handleMenuClick = () => {
  let dropdown = document.querySelector(".menu");
  dropdown.classList.toggle("showMenu");
};

//  === FIRING HANDLERS ===

// Update the clock every 1000ms (1 second)
setInterval(updateClock, 1000);

// initialize the clock initially
updateClock();
