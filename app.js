const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");

// set dark mode
const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    toggleText.textContent = "light";
    localStorage.setItem("darkMode", "enabled");
};

// disable dark mode
const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    toggleText.textContent = "Dark";
    localStorage.setItem("darkMode", null);
};

// save dark mode history
if (darkMode === "enabled") {
    enableDarkMode();
}

// adding event listeners
toggleDarkMode.addEventListener('click', () => {
    let darkMode = localstorage.getItem("darkMode");

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});