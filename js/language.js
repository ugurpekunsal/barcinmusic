"use strict";

$(document).ready(languageSelector("english"));
window.onload = languageSelector("english");

function languageSelector(language = "english") {
	console.log("Hello world!");
	let hideLang = language === "english" ? "turkce" : "english";
	document.querySelectorAll("." + language).forEach((el) => {
		el.classList.remove("d-none");
	});
	document.querySelectorAll("." + hideLang).forEach((el) => {
		el.classList.add("d-none");
	});
}
