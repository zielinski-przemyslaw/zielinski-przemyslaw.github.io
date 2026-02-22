// Translations
const translations = {
    pl: {
        nav: {
            home: "Start",
            services: "Usługi",
            about: "O nas",
            contact: "Kontakt"
        },
        hero: {
            title: "Profesjonalna <span>Obróbka Metali</span>",
            subtitle: "ZIELIŃSKI PRZEMYSŁAW - naprawa i konserwacja statków, obróbka mechaniczna elementów metalowych oraz roboty inżynieryjne. Jakość i precyzja w każdym projekcie.",
            btn1: "Nasze Usługi",
            btn2: "Kontakt"
        },
        services: {
            title: "Nasze Usługi",
            subtitle: "Kompleksowe usługi przemysłowe",
            ships: {
                title: "Naprawa Statków",
                desc: "Profesjonalna naprawa i konserwacja statków oraz łodzi. Prace stoczniowe, remonty kadłubów i naprawy mechaniczne."
            },
            metal: {
                title: "Obróbka Metali",
                desc: "Obróbka mechaniczna elementów metalowych. Toczenie, frezowanie, wiercenie i precyzyjne wykonanie części."
            },
            construction: {
                title: "Roboty Inżynieryjne",
                desc: "Roboty związane z budową obiektów inżynierii lądowej i wodnej. Konstrukcje stalowe i prace specjalistyczne."
            }
        },
        about: {
            title: "O Firmie",
            heading: "Jakość i Profesjonalizm",
            text1: "Firma ZIELIŃSKI PRZEMYSŁAW specjalizuje się w naprawie i konserwacji statków oraz łodzi, obróbce mechanicznej elementów metalowych i robotach inżynieryjnych.",
            text2: "Dbamy o każdy detal, przestrzegamy norm bezpieczeństwa i dotrzymujemy terminów. Każde zlecenie traktujemy z takim samym zaangażowaniem i profesjonalizmem.",
            stat1: "Zaangażowania",
            stat2: "Specjalizacje",
            stat3: "Gwarancja Jakości"
        },
        contact: {
            title: "Kontakt",
            subtitle: "Skontaktuj się z nami",
            heading: "Dane Kontaktowe"
        },
        footer: {
            copyright: "&copy; 2026 ZIELIŃSKI PRZEMYSŁAW. Wszelkie prawa zastrzeżone."
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            about: "About",
            contact: "Contact"
        },
        hero: {
            title: "Professional <span>Metal Works</span>",
            subtitle: "ZIELIŃSKI PRZEMYSŁAW - ship repair and maintenance, mechanical metal processing and engineering works. Quality and precision in every project.",
            btn1: "Our Services",
            btn2: "Contact"
        },
        services: {
            title: "Our Services",
            subtitle: "Comprehensive industrial services",
            ships: {
                title: "Ship Repair",
                desc: "Professional repair and maintenance of ships and boats. Shipyard works, hull repairs and mechanical maintenance."
            },
            metal: {
                title: "Metal Processing",
                desc: "Mechanical processing of metal elements. Turning, milling, drilling and precision parts manufacturing."
            },
            construction: {
                title: "Engineering Works",
                desc: "Civil and hydraulic engineering construction works. Steel structures and specialized works."
            }
        },
        about: {
            title: "About Us",
            heading: "Quality and Professionalism",
            text1: "ZIELIŃSKI PRZEMYSŁAW specializes in ship and boat repair and maintenance, mechanical metal processing and engineering works.",
            text2: "We care about every detail, comply with safety standards and meet deadlines. We treat every order with the same commitment and professionalism.",
            stat1: "Commitment",
            stat2: "Specializations",
            stat3: "Quality Guarantee"
        },
        contact: {
            title: "Contact",
            subtitle: "Get in touch with us",
            heading: "Contact Details"
        },
        footer: {
            copyright: "&copy; 2026 ZIELIŃSKI PRZEMYSŁAW. All rights reserved."
        }
    },
    nl: {
        nav: {
            home: "Home",
            services: "Diensten",
            about: "Over ons",
            contact: "Contact"
        },
        hero: {
            title: "Professionele <span>Metaalbewerking</span>",
            subtitle: "ZIELIŃSKI PRZEMYSŁAW - scheepsreparatie en onderhoud, mechanische metaalbewerking en ingenieurswerkzaamheden. Kwaliteit en precisie in elk project.",
            btn1: "Onze Diensten",
            btn2: "Contact"
        },
        services: {
            title: "Onze Diensten",
            subtitle: "Uitgebreide industriële diensten",
            ships: {
                title: "Scheepsreparatie",
                desc: "Professionele reparatie en onderhoud van schepen en boten. Scheepswerfwerkzaamheden, rompreparaties en mechanisch onderhoud."
            },
            metal: {
                title: "Metaalbewerking",
                desc: "Mechanische bewerking van metalen elementen. Draaien, frezen, boren en precisie onderdelenproductie."
            },
            construction: {
                title: "Ingenieurswerkzaamheden",
                desc: "Civiele en hydraulische technische bouwwerkzaamheden. Staalconstructies en gespecialiseerde werkzaamheden."
            }
        },
        about: {
            title: "Over Ons",
            heading: "Kwaliteit en Professionaliteit",
            text1: "ZIELIŃSKI PRZEMYSŁAW is gespecialiseerd in scheeps- en bootreparatie en onderhoud, mechanische metaalbewerking en ingenieurswerkzaamheden.",
            text2: "Wij letten op elk detail, voldoen aan veiligheidsnormen en halen deadlines. Elke opdracht behandelen wij met dezelfde toewijding en professionaliteit.",
            stat1: "Toewijding",
            stat2: "Specialisaties",
            stat3: "Kwaliteitsgarantie"
        },
        contact: {
            title: "Contact",
            subtitle: "Neem contact met ons op",
            heading: "Contactgegevens"
        },
        footer: {
            copyright: "&copy; 2026 ZIELIŃSKI PRZEMYSŁAW. Alle rechten voorbehouden."
        }
    }
};

function getTranslation(lang, key) {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}

function setLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(lang, key);
        if (translation) {
            element.innerHTML = translation;
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    localStorage.setItem('language', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

const savedLang = localStorage.getItem('language') || 'en';
setLanguage(savedLang);

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
