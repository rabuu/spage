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


// COOKIE BANNER
function showCookieBanner() {
	document.getElementById("cookie-banner").style.display = "flex";
}

function hideCookieBanner() {
	document.getElementById("cookie-banner").style.display = "none";
}

function cookieAcceptionClicked() {
	hideCookieBanner();
	localStorage.setItem("cookiesAccepted", "true");
}


// ON STARTUP

if (localStorage.getItem("cookiesAccepted") == "true") {
	hideCookieBanner();
}

setTheme(localStorage.getItem("theme"));
