import {
    mobile,
    backend,
    creator,
    bg,
    plant,
    gif,
    facebook,
    instagram,
    linkedin,
    twitter,
    web,
    android, 
    blockchain,
    camera,
    github
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About"
    }, {
        id: "work",
        title: "Work"
    }, {
        id: "contact",
        title: "Contact"
    }
];

const services = [
    {
        id: "card1",
        title: "Web Development",
        icon: web
    }, {
        id: "card2",
        title: "Android Development",
        icon: android
    }, {
        id: "card3",
        title: "Blockchain and Metaverse",
        icon: blockchain
    }, {
        id: "card4",
        title: "Photography and Design enthusiast",
        icon: camera
    }
];

const projects = [
    {
        name: "Base",
        description: "project1",
        image: bg,
        source_code_link: "http://clearedtoplay.it"
    }, {
        name: "Custom",
        description: "project2",
        image: plant,
        source_code_link: "http://daleninbarbershop.it"
    }, {
        name: "Solo irrigazione",
        description: "project3",
        image: bg,
        source_code_link: "http://daleninbarbershop.it"
    }
];

const footerLinks = [
    {
        links: [
            {
                name: "Content",
                link: "https://www.hoobank.com/content/"
            }, {
                name: "How it Works",
                link: "https://www.hoobank.com/how-it-works/"
            }, {
                name: "Create",
                link: "https://www.hoobank.com/create/"
            }, {
                name: "Explore",
                link: "https://www.hoobank.com/explore/"
            }, {
                name: "Terms & Services",
                link: "https://www.hoobank.com/terms-and-services/"
            }
        ]
    }
];

const socialMedia = [
    {
        id: "github",
        icon: github,
        link: "https://github.com/Stedamb"
    }, {
        id: "twitter",
        icon: twitter,
        link: "https://twitter.com/ste_dambrosio_"
    }, {
        id: "linkedin",
        icon: linkedin,
        link: "https://www.linkedin.com/in/ste-damb/"
    }
];

export {
    services,
    projects,
    footerLinks,
    socialMedia
};
