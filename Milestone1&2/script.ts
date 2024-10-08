let toggle_button = document.getElementById("toggle-skills")!;
let skills_section = document.getElementById("skills")!;

toggle_button.addEventListener("click", () => {
    if (skills_section.style.display === "none") {
        skills_section.style.display = "block";
    } else {
        skills_section.style.display = "none";
    }
});

