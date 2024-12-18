const translations = {
    en: {
        "title": "mAIster App: Your Home Repair Assistant",
        "meta-description": "Download the mAIster App - your personal assistant for home-related problems like plumbing, electrical work, mechanic repairs, and IT support. Get instant solutions on your phone!",
        "meta-author": "mAIster",
        "og-title": "Download mAIster App: Home Repair Help in Minutes",
        "og-description": "Fix home problems instantly with mAIster, your personal home repair assistant. Get expert guidance on plumbing, electrical work, mechanic repairs, and IT support!",
        "app-sufix": "ster",
        "features": "Features",
        "privacy": "Privacy",
        "hero-heading": "Virtual assistant for your home problems",
        "follow-us": "Follow us",
        "download": "Download",
        "free-download": "Free Download",
        "plumber": "Plumber",
        "electrician": "Electrician",
        "appliance-technician": "Appliance technician",
        "mechanic": "Mechanic",
        "it-technician": "It technician",
        "in-the-pocket": "In the pocket",
        "feature-1-heading": "Enter detailed description",
        "feature-1-details": "The more detailed the problem is described, the better the assistant will identify the issue and provide a higher-quality solution.",
        "feature-2-heading": "Answer additional questions",
        "feature-2-details": "Based on the initial request, the assistant asks additional questions to better determine the nature of the problem.",
        "feature-3-heading": "Get professional help",
        "feature-3-details": "After everything is filled in, the assistant presents the potential causes and solutions to the problem as well as the required tools, required time and video materials.",
        "footer-text": "© 2024 mAIster. All rights reserved."
    },
    sr: {
        "title": "mAIster Aplikacija: Vaš Asistent za Kućne Popravke",
        "meta-description": "Preuzmite mAIster aplikaciju - vaš lični asistent za kućne probleme poput vodoinstalacija, električnih radova, popravki automobila i IT podrške. Pronađite instant rešenja na svom telefonu!",
        "meta-author": "mAIster",
        "og-title": "Preuzmite mAIster aplikaciju: Pomoć za kućne popravke u nekoliko minuta",
        "og-description": "Rešite kućne probleme odmah uz mAIster, vašeg ličnog asistenta za kućne popravke. Dobijte stručne savete za vodoinstalacije, električne radove, mehaničke popravke i IT podršku!",
        "app-sufix": "stor",
        "features": "Funkcije",
        "privacy": "Privatnost",
        "hero-heading": "Virtuelni asistent za tvoje kućne izazove",
        "follow-us": "Pratite nas",
        "download": "Preuzimanje",
        "free-download": "Preuzmi Besplatno",
        "plumber": "Vodoinstalater",
        "electrician": "Električar",
        "appliance-technician": "Serviser",
        "mechanic": "Automehaničar",
        "it-technician": "It tehničar",
        "in-the-pocket": "U džepu",
        "feature-1-heading": "Unesite detaljan opis",
        "feature-1-details": "Što je problem detaljnije opisan, asistent će bolje identifikovati problem i pružiti kvalitetnije rešenje.",
        "feature-2-heading": "Odgovorite na dodatna pitanja",
        "feature-2-details": "Na osnovu početnog zahteva, asistent postavlja dodatna pitanja kako bi bolje odredio prirodu problema.",
        "feature-3-heading": "Iskoristite profesionalnu pomoć",
        "feature-3-details": "Nakon što su sva polja popunjena, asistent prikazuje potencijalne uzroke i rešenja problema kao i potrebne alate, potrebno vreme i video materijale.",
        "footer-text": "© 2024 mAIstor. Sva prava zadržana."
    }
};

function getLanguageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || 'en';  // Default to 'en' if no parameter is set
}

function setLanguage(language) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[language] && translations[language][key]) {
            el.textContent = translations[language][key];
        } else {
            console.warn(`Missing translation for key: ${key}`);
        }
    });
}

document.getElementById('language-select').addEventListener('change', function () {
    const selectedLang = this.value;
    setLanguage(selectedLang);
});

// Initialize with language from URL or default
document.addEventListener("DOMContentLoaded", () => {
    const initialLang = getLanguageFromUrl();
    document.getElementById('language-select').value = initialLang;
    setLanguage(initialLang);
});
