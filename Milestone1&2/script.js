var toggle_button = document.getElementById("toggle-skills");
var skills_section = document.getElementById("skills");
toggle_button.addEventListener("click", function () {
    if (skills_section.style.display === "none") {
        skills_section.style.display = "block";
    }
    else {
        skills_section.style.display = "none";
    }
});
