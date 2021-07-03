const setTheme = theme => document.documentElement.className = theme;

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

function themeBtnPressed(x) {
	x.classList.toggle("change");
	toggleThemePopup();
}
