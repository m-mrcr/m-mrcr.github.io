"use strict";

window.addEventListener("load", () => {
  darkMode();
  textEffect();
});

function textEffect() {
  const container = document.querySelector("#primary-text h1");
  if (!container) return;
  const classNames = ["blue", "red", "pink", "yellow", "purple"];
  const rawString = container.textContent;
  container.innerHTML = "";
  for (let i = 0; i < rawString.length; i++) {
    const character = rawString[i];
    const spanny = document.createElement("span");
    spanny.textContent = character;
    spanny.classList.add(classNames[i % classNames.length]);
    container.appendChild(spanny);
  }
}

function darkMode() {
  document.documentElement.setAttribute("data-theme", "light");
  const themeSwitcher = document.getElementById("theme-switcher");
  themeSwitcher.onclick = function () {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    const switchToTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", switchToTheme);
  };
}

// BEGIN HOVER ANIMATIONS
document.querySelector(".menu-button").addEventListener("click", () => {
  document.querySelector(".circular-menu").classList.toggle("open");
});

document.body.addEventListener("touchmove", (event) => {
  const touch = event.touches[0];
  const newHovered =
    touch && document.elementFromPoint(touch.pageX, touch.pageY);

  if (newHovered && newHovered.matches("span")) {
    newHovered.classList.add("hover");
  }

  const prevHovered = document.querySelectorAll(".hover");
  for (const elem of prevHovered) {
    if (elem !== newHovered) elem.classList.remove("hover");
  }
});

document.body.addEventListener("touchend", () => {
  const prevHovered = document.querySelectorAll(".hover");
  for (const elem of prevHovered) {
    elem.classList.remove("hover");
  }
});
// END HOVER ANIMATIONS

const items = document.querySelectorAll(".menu a");
const thetaDelta = Math.PI / 2 / (items.length - 1);
const radius = 120;
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const theta = i * thetaDelta - Math.PI / 2;
  const x = Math.cos(theta) * radius;
  const y = Math.sin(theta) * radius;
  item.style.transform = `translate(${x}px, ${y}px)`;
}
