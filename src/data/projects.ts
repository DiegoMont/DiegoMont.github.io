import type Project from "../models/Project"

import granitoDeArenaImage from "../assets/portfolio/granito-de-arena.jpg"
import mensajesDeEsperanzaImage from "../assets/portfolio/mensajes-esperanza.jpg"
import liverpoolQrImage from "../assets/portfolio/liverpool-qr.jpg"
import weWantImage from "../assets/portfolio/we-want.jpg"
import nautilusWebImage from "../assets/portfolio/nautilus-web.jpg"
import scoutingAppImage from "../assets/portfolio/scouting-app.jpg"
import geHealthcareImage from "../assets/portfolio/ge-healthcare.jpg"
import clubProgramacionImage from "../assets/portfolio/club-programacion.jpg"
import ftcProgrammingImage from "../assets/portfolio/ftc-programming.jpg"
import laConquistaImage from "../assets/portfolio/la-conquista.jpg"

const projects: Project[] = [
    {
        id: "granito-de-arena",
        title: "Un Granito de Arena's Clinical Electronic Files System",
        description: "A web app to create and manage records for elders living in the nursing homes of Un Granito de Arena.",
        image: granitoDeArenaImage,
        points: [
            "Designed the user interface and database architecture.",
            "Built back-end functionality, including user accounts and data encryption.",
        ],
        tools: "PHP, MySQL, JavaScript",
    },
    {
        id: "mensajes-esperanza",
        title: "Mensajes de Esperanza Web Platform",
        description: "A web platform that lets family members of COVID-19 patients send text or voice messages to their relatives. Volunteer doctors receive and deliver the messages through the same platform.",
        image: mensajesDeEsperanzaImage,
        points: [
            "Developed the full app, from front end through back end.",
            "Participated in the platform's user interface design.",
        ],
        tools: "PHP, MySQL, HTML, CSS, JavaScript",
        links: [{ label: "Live demo", href: "https://mensajesdeesperanza.com.mx/" }],
    },
    {
        id: "liverpool-qr",
        title: "Todo Liverpool en un QR",
        description: "An extension of the Liverpool app that uses product QR codes to improve the customer experience inside stores.",
        image: liverpoolQrImage,
        points: [
            "Scan product QR codes to see available sizes, prices, and discounts in a store.",
            "Scan a store QR code to see which products from your wish list are available there.",
            "Earn points with every QR code scan and use them toward purchases.",
            "Discover clothing and accessories that match wish-list items in different outfits.",
        ],
        tools: "JavaScript, Firebase, HTML, Sass, Bootstrap",
        links: [
            { label: "Repository", href: "https://github.com/PedroRangelP/Todo-Liverpool-en-QR" },
            { label: "Live demo", href: "https://pedrorangelp.github.io/Todo-Liverpool-en-QR/" },
        ],
    },
    {
        id: "we-want",
        title: "We Want iOS App",
        description: "An iOS app that promotes social change by helping Mexico City residents report problems in public spaces through a points-based community program.",
        image: weWantImage,
        points: [
            "Browse community reports on a home map.",
            "Upload photos and use a machine-learning model to categorize issues.",
            "Identify important words in reports to improve map highlighting and search.",
            "Share user codes with friends and earn points by making reports.",
            "Exchange points for special coupons at participating stores.",
        ],
        tools: "Swift, Swift Storyboard, Firebase, Create ML, Microsoft Text Analytics API",
    },
    {
        id: "nautilus-website",
        title: "FRC Team Nautilus 4010 Website",
        description: "A website for Nautilus 4010, a high school robotics team competing in the FIRST Robotics Competition and spreading science and technology in the community.",
        image: nautilusWebImage,
        points: ["Visit the team's website."],
        tools: "",
        links: [
            { label: "Repository", href: "https://github.com/DiegoMont/Nautilus-4010-Website" },
            { label: "Live demo", href: "https://nautilus4010.com" },
        ],
    },
    {
        id: "scouting-app",
        title: "FRC Scouting App",
        description: "A web app that gathers match data from FRC competitions and analyzes it to help select the best alliance partners.",
        image: scoutingAppImage,
        points: [
            "Designed a UI that lets one person scout multiple robots in a single match.",
            "Predicts the best options for forming an alliance after the elimination process.",
        ],
        tools: "PHP, MySQL, JavaScript, HTML, CSS",
        links: [
            { label: "Repository", href: "https://github.com/DiegoMont/Programacion-FIRST/tree/master/Scouting-Nautilus" },
            { label: "Live demo", href: "https://diegomont.github.io/Programacion-FIRST/Scouting-Nautilus/Infinite_Recharge/InfiniteRecharge.html" },
        ],
    },
    {
        id: "ge-healthcare",
        title: "GE Healthcare Challenge",
        description: "A web app that displays information from an IoT incubator for doctors and parents.",
        image: geHealthcareImage,
        points: [
            "The doctor's dashboard displays incubator data and lets doctors write messages to parents.",
            "The parents' dashboard shows important messages and the baby's current state in a friendly interface.",
        ],
        tools: "JavaScript, HTML, CSS",
        links: [
            { label: "Repository", href: "https://github.com/DiegoMont/GE-Healthcare-HackMX" },
            { label: "Live demo", href: "https://diegomont.github.io/GE-Healthcare-HackMX/inicio-doctor.html" },
        ],
    },
    {
        id: "club-programacion",
        title: "Programming Club",
        description: "Solutions to problems from Codeforces, SPOJ, ICPC, and other programming competitions.",
        image: clubProgramacionImage,
        points: ["Dynamic programming, graphs, computational geometry, and other algorithms."],
        tools: "Java, C++, Python",
        links: [{ label: "Repository", href: "https://github.com/DiegoMont/ClubProgramacion" }],
    },
    {
        id: "programacion-first",
        title: "FIRST Tech Challenge",
        description: "Robot code for the FTC teams I have mentored: Naubots 15706, Hardlus 15704, and Robbit 15696.",
        image: ftcProgrammingImage,
        points: ["Autonomous robot programming", "Computer vision"],
        tools: "Java, FTC API, Vuforia",
        links: [{ label: "Repository", href: "https://github.com/DiegoMont/Programacion-FIRST/tree/master/FTC" }],
    },
    {
        id: "la-conquista",
        title: "The Conquest Videogame",
        description: "A role-playing game based on the Spanish conquest of the Aztec Empire.",
        image: laConquistaImage,
        points: ["Developed with JavaFX."],
        tools: "Java, JavaFX",
        links: [{ label: "Repository", href: "https://github.com/DiegoMont/ITC/tree/master/POO/LaConquista" }],
    },
]

export default projects
