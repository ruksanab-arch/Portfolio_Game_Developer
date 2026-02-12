document.addEventListener("DOMContentLoaded", function () {

    function showSection(sectionId, element) {

        // Hide all sections
        document.querySelectorAll(".section").forEach(sec => {
            sec.classList.remove("active");
        });

        // Show selected section
        document.getElementById(sectionId).classList.add("active");

        // Remove active from menu
        document.querySelectorAll(".sidebar ul li").forEach(li => {
            li.classList.remove("active");
        });

        // Activate clicked menu
        element.classList.add("active");
    }

    // Make function global
    window.showSection = showSection;

});
