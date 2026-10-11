// Η ΜΟΝΑΔΙΚΗ λίστα σελίδων του site. Για νέα σελίδα, προσθέτεις μία γραμμή εδώ.
const SITE_PAGES = [
    { id: "home",      title: "Αρχική",      href: "./" },
    { id: "about",     title: "Σχετικά",     href: "AboutMe.html" },
    { id: "education", title: "Εκπαίδευση",  href: "Education.html" },
    { id: "hobbies",   title: "Χόμπι",       href: "Hobbies.html" },
    { id: "contact",   title: "Επικοινωνία", href: "Contact.html" }
];

// Φτιάχνει το περιεχόμενο του <header> και το βάζει στη σελίδα.
function renderHeader() {
    const header = document.getElementById("site-header");
    const currentPage = document.body.dataset.page;   // π.χ. "contact"

    // Για κάθε σελίδα φτιάχνουμε ένα <li>. Η τρέχουσα παίρνει την κλάση "active".
    const links = SITE_PAGES.map(function (page) {
        const isActive = page.id === currentPage;
        const extra = isActive ? ' class="active" aria-current="page"' : "";
        return `<li><a href="${page.href}"${extra}>${page.title}</a></li>`;
    }).join("");

    header.innerHTML = `
        <div class="logo">My<span class="logo1">Personal</span><span class="logo2">Site</span></div>
        <button id="menu-toggle" class="menu-toggle" type="button"
                aria-label="Άνοιγμα μενού" aria-expanded="false" aria-controls="main-nav">☰</button>
        <nav id="main-nav">
            <ul class="menu-links">${links}</ul>
        </nav>
        <button id="theme-toggle" class="theme-toggle" type="button" aria-label="Αλλαγή θέματος">🌙</button>
    `;
}

renderHeader();