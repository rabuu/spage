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
	var links = document.getElementsByClassName("links");
	if (checkbox.checked) {
		for (var i = 0; i < links.length; i++) {
			links[i].style.display = "flex";
		}
		localStorage.setItem("showLinks", "flex");
	} else {
		for (var i = 0; i < links.length; i++) {
			links[i].style.display = "none";
		}
		localStorage.setItem("showLinks", "none");
	}
}

function applyLinksSwitch() {
	var showLinks = localStorage.getItem("showLinks");
	var links = document.getElementsByClassName("links");
	for (var i = 0; i < links.length; i++) {
		links[i].style.display = showLinks;
	}
	document.getElementById("links-checkbox").checked = (showLinks != "none");
}

// LINKS COLOR SWITCH
function setLinksColor(shouldMonochrome) {
	var monochromes = document.getElementsByClassName("monochrome");
	var polychromes = document.getElementsByClassName("polychrome");
	if (shouldMonochrome) {
		for (var i = 0; i < monochromes.length; i++) {
			monochromes[i].style.visibility = "visible";
		}
		for (var i = 0; i < polychromes.length; i++) {
			polychromes[i].style.visibility = "hidden";
		}
		localStorage.setItem("linksColor", "monochrome");
	} else {
		for (var i = 0; i < monochromes.length; i++) {
			monochromes[i].style.visibility = "hidden";
		}
		for (var i = 0; i < polychromes.length; i++) {
			polychromes[i].style.visibility = "visible";
		}
		localStorage.setItem("linksColor", "polychrome");
	}
}

function applyLinksColorSwitch() {
	var linksColor = localStorage.getItem("linksColor");
	setLinksColor(linksColor == "monochrome");
	document.getElementById("links-color-checkbox").checked = (linksColor == "monochrome");
}

// ON STARTUP
setTheme(localStorage.getItem("theme"));
applyLinksSwitch();
applyLinksColorSwitch();
