var open = false;
var checked = false;
var date;
var place;
var header = document.querySelector(".flex-fixed-container");
var popupNavigation = document.querySelector('#popup-navigation');
var background = document.querySelector('#popup-dark-background');

const monthList = [
	'января', 'февраля', 'марта', 'апреля',
	'мая', 'июня', 'июля', 'августа',
	'сентября', 'октября', 'ноября', 'декабря'
];
const weekList = [
	'Вс', 'Пн', 'Вт', 'Ср',
	'Чт', 'Пт', 'Сб'
];

function toTwoDigits(argument) {
	if (argument < 10) return '0' + argument;
	return '' + argument;
}

function timeAndDatePrint() {
	date = new Date();
	place = document.querySelector('.datetime');
	place.innerHTML = date.getHours() + ':' + toTwoDigits(date.getMinutes()) + ' ' + date.getDate() + '.' + toTwoDigits(date.getMonth() + 1) + '.' + date.getFullYear();
	place = document.querySelectorAll(".date-main");
	place.forEach(function(element) {
		element.innerHTML = date.getDate() + ' ' + monthList[date.getMonth()] + ', ' + weekList[date.getDay()];
	})
	place = document.querySelectorAll('.curr-time');
	place.forEach(function(element) {
		element.innerHTML = date.getHours() + ':' + toTwoDigits(date.getMinutes());
	})
}
timeAndDatePrint();
setInterval(timeAndDatePrint, 60000);
function navigationAppear() {
	popupNavigation.style.transform = "translate(100%,0)";
	document.querySelector('#nav-close').style.display = "block";
	background.style.backgroundColor =  "rgba(0,0,0,0.5)";
	background.style.transition = "0.7s";
	background.style.zIndex = "4";
	document.querySelector('#nav-button').style.display = "none";
	document.querySelector("#nav-close").addEventListener("click", function() {
		popupNavigation.style.transform = "";
		document.querySelector('#nav-button').style.display = "";
		document.querySelector('#nav-close').style.display = "";
		background.style.backgroundColor =  "";
		background.style.transition = "";
		background.style.zIndex = "";
	})
	background.addEventListener("click", function() {
		popupNavigation.style.transform = "";
		document.querySelector('#nav-button').style.display = "";
		document.querySelector('#nav-close').style.display = "";
		background.style.backgroundColor =  "";
		background.style.transition = "";
		background.style.zIndex = "";
	})
}
window.onscroll = function() {
	if (window.innerWidth < 1024) {
		if (window.pageYOffset < 58) {
			popupNavigation.style.top = (118 - pageYOffset) + "px";
			header.style.position = "";
		  header.style.width = "";
		} else {
			popupNavigation.style.top = "60px";
		  	header.style.top = "0";
		  	header.style.position = "fixed";
		  	header.style.width = "-webkit-fill-available";	
		  	header.style.backgroundColor = "#ffffff";
		}
	}
}

function searchAppear() {
	document.querySelector("#input").style.display = "block";
	document.querySelector("#input").style.zIndex = "2";
	background.style.display = "block";
	background.style.zIndex = "1";
	background.style.backgroundColor = "rgba(0,0,0,0.5)";
	background.addEventListener("click", function() {
		document.querySelector("#input").style.display = "";
		document.querySelector("#input").style.zIndex = "";
		document.querySelector("#search-button").style.display = "";
		document.querySelector(".logo").style.display = "";
		document.querySelector("select").style.display = "";
		document.querySelector("#search-button").addEventListener("click", searchAppear);
		background.style.display = "";
		background.style.zIndex = "";
		background.style.backgroundColor = "";
	})
	document.querySelector("#input").addEventListener("keyup", function(e){
		if (e.code == 'Enter') {
			background.style.backgroundColor = "";
			document.querySelector('input').value = "";
			background.style.display = "";
			background.style.zIndex = "";
			document.querySelector(".logo").style.display = "";
			document.querySelector("select").style.display = "";
			document.querySelector("#search-button").style.display = "block";
			document.querySelector("#search-button").addEventListener("click", searchAppear);
			document.querySelector("#input").style.display = "";
			document.querySelector("#search-button").style.display = "";
		}
	})
	document.querySelector("#input input").focus();
	document.querySelector(".logo").style.display = "none";
	document.querySelector("select").style.display = "none";
	document.querySelector("#search-button").style.display = "none";
}

document.querySelector('#nav-button').addEventListener("click", navigationAppear);
document.querySelector("#search-button").addEventListener("click", searchAppear);