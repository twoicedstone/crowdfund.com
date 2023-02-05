document.getElementById("bookmark").addEventListener("click", () => {
	document.getElementById("bookmarked").style.display = "flex";
	document.getElementById("bookmark").style.display = "none";
})

document.getElementById("bookmarked").addEventListener("click", () => {
	document.getElementById("bookmark").style.display = "flex";
	document.getElementById("bookmarked").style.display = "none";
})

document.getElementById("menu-drop").addEventListener("click", () => {
	document.getElementById("nav-hide").style.display = "block";
	document.getElementById("mobile-nav").style.display = "block";
	document.getElementById("menu-drop").style.display = "none";
	document.querySelector(".major").style.filter = "contrast(80%)";
})

document.getElementById("nav-hide").addEventListener("click", () => {
	document.getElementById("menu-drop").style.display = "block";
	document.getElementById("nav-hide").style.display = "none";
	document.getElementById("mobile-nav").style.display = "none";
	document.querySelector(".major").style.filter = "none";
})

/*-----------------BACK THIS PROJECT COMMANDS-----------------------*/

document.getElementById("open-project").addEventListener("click", () => {
	document.querySelector(".back-this-project").style.display = "block";
	document.querySelector(".container").style.filter = "contrast(80%)";
})

document.getElementById("cls").addEventListener("click", () => {
	document.querySelector(".back-this-project").style.display = "none";
	document.querySelector(".container").style.filter = "none";
})

document.querySelector(".circle").addEventListener("click", () => {
	document.getElementById("pledge-inner-circle").style.display = "block";
	document.querySelector(".standbox1").style.borderColor = "hsl(176, 50%, 47%)";
	document.getElementById("inner-circle").style.display = "none";
	document.querySelector(".bamboo-stand").style.borderColor = "hsl(0, 0%, 85%)";
	document.getElementById("open-pledge").style.display = "none";
	document.getElementById("black-inner-circle").style.display = "none";
	document.querySelector(".standbox2").style.borderColor = "hsl(0, 0%, 85%)";
	document.getElementById("black-open-pledge").style.display = "none";
	document.querySelector(".thanks").style.display = "block";
	document.querySelector(".back-this-project").style.display = "none";
	document.querySelector(".container").style.filter = "contrast(80%)";
})

document.querySelector(".circle1").addEventListener("click", () => {
	document.getElementById("inner-circle").style.display = "block";
	document.querySelector(".bamboo-stand").style.borderColor = "hsl(176, 50%, 47%)";
	document.getElementById("open-pledge").style.display = "flex";
	document.getElementById("pledge-inner-circle").style.display = "none";
	document.querySelector(".standbox1").style.borderColor = "hsl(0, 0%, 85%)";
	document.getElementById("black-inner-circle").style.display = "none";
	document.querySelector(".standbox2").style.borderColor = "hsl(0, 0%, 85%)";
	document.getElementById("black-open-pledge").style.display = "none";
	document.querySelector(".pledge-amount2").style.borderColor = "hsl(0, 0%, 85%)";
	document.getElementById("line2").style.display = "none";
	document.getElementById("line2").style.borderColor = "hsl(176, 50%, 47%)";
})

document.querySelector(".circle2").addEventListener("click", () => {
	document.getElementById("black-inner-circle").style.display = "block";
	document.querySelector(".standbox2").style.borderColor = "hsl(176, 50%, 47%)";
	document.getElementById("black-open-pledge").style.display = "flex";
	document.getElementById("pledge-inner-circle").style.display = "none";
	document.querySelector(".standbox1").style.borderColor = "hsl(0, 0%, 85%)";
	document.getElementById("open-pledge").style.display = "none";
	document.querySelector(".bamboo-stand").style.borderColor = "hsl(0, 0%, 85%)";
	document.getElementById("inner-circle").style.display = "none";
	document.querySelector(".pledge-amount1").style.borderColor = "hsl(0, 0%, 85%)";
	document.getElementById("line1").style.display = "none";
	document.getElementById("line1").style.borderColor = "hsl(176, 50%, 47%)";
})

document.querySelector(".pledge-amount1").addEventListener("click", () => {
	document.querySelector(".pledge-amount1").style.borderColor = "hsl(176, 50%, 47%)";
	document.getElementById("line1").style.display = "block";
	document.getElementById("line1").style.borderColor = "hsl(176, 50%, 47%)";
})

document.querySelector(".pledge-amount2").addEventListener("click", () => {
	document.querySelector(".pledge-amount2").style.borderColor = "hsl(176, 50%, 47%)";
	document.getElementById("line2").style.display = "block";
	document.getElementById("line2").style.borderColor = "hsl(176, 50%, 47%)";
})

document.querySelector(".finish1").addEventListener("click", () => {
	document.querySelector(".thanks").style.display = "block";
	document.querySelector(".back-this-project").style.display = "none";
	document.querySelector(".container").style.filter = "contrast(60%)";
})

document.querySelector(".finish2").addEventListener("click", () => {
	document.querySelector(".thanks").style.display = "block";
	document.querySelector(".back-this-project").style.display = "none";
	document.querySelector(".container").style.filter = "contrast(80%)";
})