const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

// Ανοίγει ή κλείνει το μενού και ενημερώνει το εικονίδιο και τα aria attributes.
function setMenuOpen(isOpen) {
    mainNav.classList.toggle("open", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού");
}

// Κλικ στο κουμπί: αντιστρέφει την τρέχουσα κατάσταση.
menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.contains("open");
    setMenuOpen(!isOpen);
});

// Το πλήκτρο Escape κλείνει το μενού.
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        setMenuOpen(false);
    }
});

// Αν η οθόνη μεγαλώσει πάνω από 600px, επαναφέρουμε το κουμπί στην αρχική του κατάσταση.
window.matchMedia("(min-width: 601px)").addEventListener("change", function (e) {
    if (e.matches) {
        setMenuOpen(false);
    }
});