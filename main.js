// SET THEME
const setTheme = theme => {
	document.documentElement.className = theme;
	localStorage.setItem("theme", theme);
}

// THEME POPUP
function openThemePopup() {
	document.getElementById("theme-popup").style.display = "flex";
}

function closeThemePopup() {
	document.getElementById("theme-popup").style.display = "none";
}

function toggleThemePopup() {
	if (document.getElementById("theme-popup").style.display == "flex") {
		closeThemePopup();
	} else {
		openThemePopup();
	}
}

// THEME BUTTON
function themeBtnPressed(x) {
	x.classList.toggle("change");
	toggleThemePopup();
}

// ON STARTUP

setTheme(localStorage.getItem("theme"));
