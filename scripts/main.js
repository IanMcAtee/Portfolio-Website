/* 
Script: main.js
Purpose: Controls the functionality for elements present on all pages:
    - Light/dark mode switching
    - Sidebar navigation
*/

const root = document.documentElement;

////////// LIGHT/DARK MODE FUNCTIONALITY //////////

// Get references to the light/dark mode buttons and their icon images
const lightDarkModeHeaderBtn = document.getElementById("light-dark-mode-header-btn");
const lightDarkModeHeaderBtnImg = lightDarkModeHeaderBtn.lastElementChild;
const lightDarkModeSidebarBtn = document.getElementById("light-dark-mode-sidebar-btn");
const lightDarkModeSidebarBtnImg = lightDarkModeSidebarBtn.lastElementChild;

// Get references to all CSS variables that dictate theme style
const lightModeBackgroundColor = getComputedStyle(root).getPropertyValue("--lightModeBackgroundColor");
const darkModeBackgroundColor = getComputedStyle(root).getPropertyValue("--darkModeBackgroundColor");
const lightModePrimaryTextColor = getComputedStyle(root).getPropertyValue("--lightModePrimaryTextColor");
const lightModeSecondaryTextColor = getComputedStyle(root).getPropertyValue("--lightModeSecondaryTextColor");
const darkModePrimaryTextColor = getComputedStyle(root).getPropertyValue("--darkModePrimaryTextColor");
const darkModeSecondaryTextColor = getComputedStyle(root).getPropertyValue("--darkModeSecondaryTextColor");
const lightModeIconColor = getComputedStyle(root).getPropertyValue("--lightModeIconColor");
const darkModeIconColor = getComputedStyle(root).getPropertyValue("--darkModeIconColor");

// Global boolean determining which theme is active
var isLightMode = true;

// Function that toggles CSS theme variables, assigned as a listener to light/dark mode btns click event
function toggleLightDarkMode()
{
    // Toggle boolean
    isLightMode = !isLightMode;

    // Assign CSS variables and btn icon image based on theme
    if (isLightMode)
    {
        lightDarkModeHeaderBtnImg.setAttribute("src", "./images/global/icons/dark_mode_24dp.svg");
        lightDarkModeSidebarBtnImg.setAttribute("src", "./images/global/icons/dark_mode_24dp.svg");
        root.style.setProperty("--backgroundColor", lightModeBackgroundColor);
        root.style.setProperty("--primaryTextColor", lightModePrimaryTextColor);
        root.style.setProperty("--iconColor", lightModeIconColor);
    }
    else
    {
        lightDarkModeHeaderBtnImg.setAttribute("src", "./images/global/icons/light_mode_24dp.svg");
        lightDarkModeSidebarBtnImg.setAttribute("src", "./images/global/icons/light_mode_24dp.svg");
        root.style.setProperty("--backgroundColor", darkModeBackgroundColor);
        root.style.setProperty("--primaryTextColor", darkModePrimaryTextColor);
        root.style.setProperty("--iconColor", darkModeIconColor);
    }
}

// Add function as a listener to light/dark mode btns click event
lightDarkModeHeaderBtn.addEventListener("click", toggleLightDarkMode);
lightDarkModeSidebarBtn.addEventListener("click", toggleLightDarkMode);

////////// SIDEBAR FUNCTIONALITY //////////


const sidebarContainer = document.getElementById("sidebar-container");
const openSidebarBtn = document.getElementById("open-sidebar-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");

function openSidebar()
{
    console.log("open button pressed");
    sidebarContainer.style.display ="flex";
}

function closeSidebar()
{
    console.log("close button pressed");
    sidebarContainer.style.display = "none";
}

openSidebarBtn.addEventListener("click", openSidebar);
closeSidebarBtn.addEventListener("click", closeSidebar);

