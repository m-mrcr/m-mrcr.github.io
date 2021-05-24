"use strict";

window.addEventListener("load", () => {
  const container = document.querySelector("#first h1");
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
});

// Wait for document to load
document.addEventListener("DOMContentLoaded", function (event) {
  document.documentElement.setAttribute("data-theme", "light");

  // Get our button switcher
  var themeSwitcher = document.getElementById("theme-switcher");

  // When our button gets clicked
  themeSwitcher.onclick = function () {
    // Get the current selected theme, on the first run
    // it should be `light`
    var currentTheme = document.documentElement.getAttribute("data-theme");
    // Switch between `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark";

    // Set our currenet theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
  };
});
