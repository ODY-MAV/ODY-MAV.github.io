const STORAGE_KEY = "theme";

// Επιστρέφει "dark" ή "light": πρώτα την αποθηκευμένη επιλογή,
// αλλιώς την προτίμηση του λειτουργικού συστήματος.
function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
        return saved;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Εφαρμόζει το θέμα στη σελίδα και ενημερώνει το εικονίδιο του κουμπιού.
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    const button = document.getElementById("theme-toggle");
    if (button) {
        button.textContent = theme === "dark" ? "☀️" : "🌙";
        button.setAttribute("aria-label",
            theme === "dark" ? "Αλλαγή σε φωτεινό θέμα" : "Αλλαγή σε σκούρο θέμα");
    }
}

// Εφαρμογή ΑΜΕΣΩΣ, πριν φορτωθεί το υπόλοιπο σώμα της σελίδας.
applyTheme(getPreferredTheme());

// Όταν η σελίδα φορτωθεί πλήρως, συνδέουμε το κουμπί.
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("theme-toggle");
    applyTheme(getPreferredTheme());   // για να πάρει σωστό εικονίδιο

    button.addEventListener("click", function () {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    });
});