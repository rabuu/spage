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

// LINKS SWITCH
function linksSwitchChanged(checkbox) {
	if (checkbox.checked) {
		document.getElementById("links").style.display = "flex";
		localStorage.setItem("showLinks", "flex");
	} else {
		document.getElementById("links").style.display = "none";
		localStorage.setItem("showLinks", "none");
	}
}

function applyLinksSwitch() {
	var showLinks = localStorage.getItem("showLinks");
	document.getElementById("links").style.display = showLinks;
	document.getElementById("links-checkbox").checked = (showLinks != "none");
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
if (localStorage.getItem("cookiesAccepted") == "false") {
	showCookieBanner();
}
setTheme(localStorage.getItem("theme"));
applyLinksSwitch();
