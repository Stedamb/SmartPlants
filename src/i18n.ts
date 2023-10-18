import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'it', // La lingua predefinita
        fallbackLng: 'it', // Lingua di fallback
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

    resources: {
        en: {
            translation: {
                // hero
                title_highlighted: "Green thumb",
                subtitle: "without having to lift a finger",
                subtitle_highlighted: "",
                // navbar
                about: "About",
                work: "Work",
                contact: "Contact",
                // about
                intro_subtitle: "INTRODUCTION",
                intro_title: "Overview",
                intro_text: "I am a full-stack developer based in Bellaria, Rimini. I have always been passionate about photography and videomaking, and I have brought my passion to the digital world, where I have combined my taste for art and design with the logic of programming, both graphically and functionally.",
                // cards
                card1: "Irrigazione automatica",
                card2: "Compatibile con ogni pianta", 
                card3: "Espandibile", 
                card4: "Personalizzabile",
                // work 
                work_subtitle: "PROGETTI",
                work_title: "Alcune idee",
                work_text: "Di seguito riporto alcuni progetti eseguiti fino ad ora, la lista è in continuo aggiornamento. Per la realizzazione di progetti custom, è possibile visitare il profilo ",
                project1: "Sistema di irrigazione con sensore di umidità",
                project2: "Sistema custom con indicatori di umidità, buzzer e schermo",
                project3: "Chip, sensore e pompa dell'acqua: usa la pianta che preferisci!",
                // contact
                contact_subtitle: "GET IN TOUCH",
                contact_title: "Contact",
                contact_name: "Your name", 
                contact_email: "Your email address", 
                contact_message: "Your message",
                contact_send: "Send",
                contact_sending: "Sending...",
                // footer
                footer_text: "Enjoy",
                footer_links: "Useful links",
                copyright: "Copyright Ⓒ 2023"
            }
        },
        it: {
            translation: {
                // hero
                title_highlighted: "Pollice verde",
                subtitle: "senza alzare un dito",
                subtitle_highlighted: "",
                // navbar
                about: "Su di me",
                work: "Lavoro",
                contact: "Contatti",
                // about
                intro_subtitle: "INTRODUZIONE",
                intro_title: "Funzionalità",
                intro_text: "",
                // cards
                card1: "Irrigazione automatica",
                card2: "Compatibile con ogni pianta", 
                card3: "Espandibile", 
                card4: "Personalizzabile",
                // work
                work_subtitle: "PROGETTI",
                work_title: "Alcune idee",
                work_text: "Di seguito riporto alcuni progetti eseguiti fino ad ora, la lista è in continuo aggiornamento. Per la realizzazione di progetti custom, è possibile visitare il profilo ",
                project1: "Sistema di irrigazione con sensore di umidità",
                project2: "Sistema custom con indicatori di umidità, buzzer e schermo",
                project3: "Chip, sensore e pompa dell'acqua: usa la pianta che preferisci!",
                // contact
                contact_subtitle: "CONTATTI",
                contact_title: "Scrivimi",
                contact_name: "Il tuo nome",
                contact_email: "La tua email",
                contact_message: "Il tuo messaggio",
                contact_send: "Invia",
                contact_sending: "Invio...",
                // footer
                footer_text: "\‟Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nibh nec erat tincidunt, vitae viverra nunc.\"",
                footer_links: "Link utili",
                copyright: "Copyright Ⓒ 2023"
            }
        }
    }
});

export default i18n;