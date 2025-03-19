/* 
Script: main.js
Purpose: Controls the functionality for elements present on all pages:
    - Handles light/dark mode switching
*/



// LIGHT/DARK MODE FUNCTIONALITY 
const root = document.documentElement;
const lightDarkModeBtn = document.getElementById("light-dark-mode-btn");
const lightDarkModeBtnImg = lightDarkModeBtn.lastElementChild;

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
        lightDarkModeBtnImg.setAttribute("src", "./images/global/icons/dark_mode_24dp.svg");
        root.style.setProperty("--backgroundColor", lightModeBackgroundColor);
        root.style.setProperty("--primaryTextColor", lightModePrimaryTextColor);
    }
    else
    {
        lightDarkModeBtnImg.setAttribute("src", "./images/global/icons/light_mode_24dp.svg");
        root.style.setProperty("--backgroundColor", darkModeBackgroundColor);
        root.style.setProperty("--primaryTextColor", darkModePrimaryTextColor);
    }
}

lightDarkModeBtn.addEventListener("click", toggleLightDarkMode);

// SIDEBAR FUNCTIONALITY
const sideBar = document.getElementById("side-bar-container");
console.log(sideBar);
const openSideBarBtn = document.getElementById("open-sidebar-btn");
const closeSideBarBtn = document.getElementById("close-sidebar-btn");

function openSideBar()
{
    console.log("open button pressed");
    sideBar.style.display ="flex";
}

function closeSideBar()
{
    console.log("close button pressed");
    sideBar.style.display = "none";
}

openSideBarBtn.addEventListener("click", openSideBar);
closeSideBarBtn.addEventListener("click", closeSideBar);

