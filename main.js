/* 
Script: main.js
Purpose: Controls the functionality for elements present on all pages:
    - Handles light/dark mode switching
*/


const root = document.documentElement;
const lightDarkModeBtn = document.getElementById("light-dark-mode-btn");

var isLightMode = true;

const lightModeBackgroundColor = getComputedStyle(root).getPropertyValue("--lightModeBackgroundColor");
const darkModeBackgroundColor = getComputedStyle(root).getPropertyValue("--darkModeBackgroundColor");
const lightModePrimaryTextColor = getComputedStyle(root).getPropertyValue("--lightModePrimaryTextColor");
const lightModeSecondaryTextColor = getComputedStyle(root).getPropertyValue("--lightModeSecondaryTextColor");
const darkModePrimaryTextColor = getComputedStyle(root).getPropertyValue("--darkModePrimaryTextColor");
const darkModeSecondaryTextColor = getComputedStyle(root).getPropertyValue("--darkModeSecondaryTextColor");

console.log(lightModePrimaryTextColor);
console.log(darkModePrimaryTextColor);

function toggleLightDarkMode()
{
    console.log("Button pushed");
    isLightMode = !isLightMode;

    if (isLightMode)
    {
        root.style.setProperty("--backgroundColor", lightModeBackgroundColor);
        root.style.setProperty("--primaryTextColor", lightModePrimaryTextColor);
    }
    else
    {
        root.style.setProperty("--backgroundColor", darkModeBackgroundColor);
        root.style.setProperty("--primaryTextColor", darkModePrimaryTextColor);
    }
}


lightDarkModeBtn.addEventListener("click", toggleLightDarkMode);
