//Hämtar ID för båda img
let moon = document.getElementById("img1");
let sun = document.getElementById("img2");

//Tar bort sun från sidan
sun.style.display = "none";

//Eventlistener för moon img och sun img
moon.addEventListener("click", showSun);
sun.addEventListener("click", showMoon);

//Funktion för att ta bort moon och visa sun
function showSun() {
    moon.style.display = "none";
    sun.style.display = "block";
}

//Funktion för att ta bort sun och visa moon
function showMoon() {
    sun.style.display = "none";
    moon.style.display = "block";
}