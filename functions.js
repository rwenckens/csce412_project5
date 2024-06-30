function toggleStyleSheet() {
    var element = document.getElementById("mainStyleSheet");
    var currentStyle = element.getAttribute("href");
    var newSheet = (currentStyle === "firstStyle.css") ? "secondStyle.css" : "firstStyle.css";
    element.setAttribute("href", newSheet);

    localStorage.setItem("style", newSheet);
}

window.onload = function() {
    var sheetName = localStorage.getItem("style");
    if (sheetName === null) {
        sheetName = "secondStyle.css";
    }

    var htmlStyle = document.getElementById("mainStyleSheet");
    htmlStyle.setAttribute("href", sheetName);
}
