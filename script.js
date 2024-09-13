var subtn = document.querySelector("#subtn");
var form = document.querySelector("form");
var result = document.querySelector("#result");
// data from form
var namme = document.querySelector("#name");
var email = document.querySelector("#email");
var number = document.querySelector("#number");
var edu = document.querySelector("#edu");
var work = document.querySelector("#work");
var skills = document.querySelector("#skills");
// data to show
var showname = document.querySelector("#showname");
var showemail = document.querySelector("#showemail");
var shownumber = document.querySelector("#shownumber");
var showedu = document.querySelector("#showedu");
var showork = document.querySelector("#showork");
var showskills = document.querySelector("#showskills");
//click event on generate button
subtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("first");
    form.style.display = "none";
    result.style.display = "flex";
    showname.innerHTML = "Name: ".concat(namme.value);
    showemail.innerHTML = "Email: ".concat(email.value);
    shownumber.innerHTML = "Number: ".concat(number.value);
    showedu.innerHTML = "Education: ".concat(edu.value);
    showork.innerHTML = "Work Experience: ".concat(work.value);
    skills.value.split(",").forEach(function (e) {
        var skillElement = document.createElement("h3");
        skillElement.classList.add("setSkills");
        skillElement.textContent = e.trim();
        showskills.appendChild(skillElement);
    });
});
