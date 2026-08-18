
// ---------- EDUCATION-EXPERIENCE  ----------
var exBtn = document.getElementById("experience-btn");
var edBtn = document.getElementById("education-btn");
var exTab = document.getElementById("experience-tab");
var edTab = document.getElementById("education-tab");

exBtn.onclick = function () {
    exTab.style.display = "block";
    edTab.style.display = "none";
}

edBtn.onclick = function () {
    exTab.style.display = "none";
    edTab.style.display = "block";
}


// ---------- CONTACT FORM VALIDATION ----------
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = form.querySelector("input[type='text']").value.trim();
    var email = form.querySelector("input[type='email']").value.trim();
    var message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert(" Please fill all fields");
    } else {
        alert(" Message sent successfully!");
        form.reset();
    }
});

// ---------- SIMPLE WELCOME MESSAGE ----------
window.onload = function () {
    console.log("Portfolio Loaded Successfully ");
};