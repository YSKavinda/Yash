import React, {useEffect, useState} from "react";
import {createTheme} from "@mui/material";


export const Constants = ()=>{

    const [fullHeight, setFullHeight] = useState(window.innerHeight);
    useEffect(() => {

        const updateFullHeight = () => {
            setFullHeight(window.innerHeight);
        };
        window.addEventListener("resize", updateFullHeight);
        return () => window.removeEventListener("resize", updateFullHeight);
    }, []);



}

export const footerData = {
    brand: {
        name: "Yash",
        tagline: "Crafting Digital Excellence",
        description:
            "Full-stack developer passionate about creating innovative solutions and exceptional user experiences.",
    },

    quickLinks: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        // { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
    ],

    services: [
        { label: "Web Development", href: "#web-dev" },
        { label: "Mobile Apps", href: "#mobile" },
        { label: "UI/UX Design", href: "#design" },
        { label: "Consulting", href: "#consulting" },
        { label: "Code Review", href: "#review" },
    ],

    contact: {
        email: "yskavinda@gmail.com",
        phone: "+94762282965",
        location: "Colombo, Srilanka",
    },

    social: [
        {
            name: "GitHub",
            icon: "GitHub",
            url: "https://github.com/yash",
            handle: "@yash",
        },
        {
            name: "LinkedIn",
            icon: "LinkedIn",
            url: "https://linkedin.com/in/yash",
            handle: "/in/yash",
        },
        {
            name: "Twitter",
            icon: "Twitter",
            url: "https://twitter.com/yash",
            handle: "@yash",
        },
        {
            name: "Instagram",
            icon: "Instagram",
            url: "https://instagram.com/yash",
            handle: "@yash",
        },
    ],

    newsletter: {
        title: "Vibe with the Code",
        description: "Get updates on my latest projects, tech insights, and industry trends.",
        placeholder: "email@example.com",
    },

    stats: [
        { label: "Projects Completed", value: "10+" },
        { label: "Happy Clients", value: "20+" },
        { label: "Years Experience", value: "5+" },
        { label: "Technologies", value: "20+" },
    ],

    copyright: {
        year: new Date().getFullYear(),
        text: "All rights reserved.",
    },
}


export const heightLevels ={
    fullHeight:Constants.fullHeight,
    heightLevel1:Constants.fullHeight*5/100,
    heightLevel2:Constants.fullHeight*10/100,
    heightLevel3:Constants.fullHeight*15/100,
    heightLevel4:Constants.fullHeight*20/100,
    heightLevel5:Constants.fullHeight*25/100,
    heightLevel6:Constants.fullHeight*30/100,
    heightLevel7:Constants.fullHeight*35/100,
    heightLevel8:Constants.fullHeight*40/100,
    heightLevel9:Constants.fullHeight*45/100,
    heightLevel10:Constants.fullHeight*50/100,
    heightLevel11:Constants.fullHeight*55/100,
    heightLevel12:Constants.fullHeight*60/100,
    heightLevel13:Constants.fullHeight*65/100,
    heightLevel14:Constants.fullHeight*70/100,
    heightLevel15:Constants.fullHeight*75/100,
    heightLevel16:Constants.fullHeight*80/100,
    heightLevel17:Constants.fullHeight*85/100,
    heightLevel18:Constants.fullHeight*90/100,
    heightLevel19:Constants.fullHeight*95/100,
};

export const careerHistory = [
    {
        id: 1,
        title: "Associate Software Engineer Fullstack",
        company: "Sentura Technologies",
        companyUrl: "https://senturatechnologies.com", // Add actual URL if available
        date: "2024 Oct - 2025 May",
        description:
            "Majorly focused on Mobile Application Development with Cutting Edge Solutions and Solid Back-End Infrastructure. Leading full-stack development initiatives and implementing scalable solutions.",
        icon: "work",
        tags: ["Java", "Spring Boot", "React", "React Native", "Node.js", "MongoDB", "Docker", "AWS"],
    },
    {
        id: 2,
        title: "React Native Mobile Developer (Internship)",
        company: "Sentura Technologies",
        companyUrl: "https://senturatechnologies.com",
        date: "2023 Nov - 2024 Oct",
        description:
            "Started my career as an intern at Sentura Technologies, working on several mobile React Native applications. Gained hands-on experience in mobile development and modern JavaScript frameworks.",
        icon: "work",
        tags: ["React Native", "JavaScript", "Firebase", "Redux", "Mobile Development"],
    },
    {
        id: 3,
        title: "Bachelor of Engineering - Software Engineering",
        company: "Java Institute for Advanced Technology",
        companyUrl: "https://www.javainstitute.edu.lk/",
        date: "2020 Sep - 2024 Sep",
        description:
            "Completed Bachelor of Engineering in Software Engineering at IIC University of Technology in Cambodia. Gained comprehensive knowledge in software development principles, algorithms, and system design.",
        icon: "school",
        tags: ["Software Engineering", "Computer Science", "Programming", "System Design", "Algorithms"],
    },
    {
        id: 4,
        title: "GCE Advanced Level - Biology Science Stream",
        company: "Taxila Central College",
        companyUrl: null, // No URL available
        date: "2016 - 2019",
        description:
            "Completed Advanced Level in Biology Science Stream with strong performance. Obtained B in Chemistry, C in Physics, and C in Biology, building a solid foundation in scientific principles.",
        icon: "school",
        tags: ["Biology", "Chemistry", "Physics", "Science", "Advanced Level"],
    },
]

export const theme = createTheme({
    palette: {
        primary: {main: '#190933'},
        secondary: {main: '#665687'},
        background: {main: '#B084CC'},
        primary_text: {main: '#ACFCD9'},
        secondary_text: {main: '#5DD9C1'},
        common:{white:'#fdfdfd'}
    },
});

export const servicesData = [
    {
        id: 1,
        title: "Web Development",
        description:
            "Full-stack web applications using modern frameworks like React, Next.js, and Node.js with responsive design and optimal performance.",
        icon: "Code",
        features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"],
        color: "#3b82f6",
    },
    {
        id: 2,
        title: "Mobile App Development",
        description:
            "Cross-platform mobile applications using React Native and Flutter, delivering native performance across iOS and Android.",
        icon: "Smartphone",
        features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
        color: "#10b981",
    },
    {
        id: 3,
        title: "UI/UX Design",
        description:
            "User-centered design solutions with modern interfaces, wireframing, prototyping, and design systems for optimal user experience.",
        icon: "Palette",
        features: ["Figma & Adobe XD", "Wireframing", "Prototyping", "Design Systems"],
        color: "#f59e0b",
    },
    {
        id: 4,
        title: "Backend Development",
        description:
            "Scalable server-side solutions with robust APIs, database optimization, and cloud infrastructure for enterprise applications.",
        icon: "Server",
        features: ["RESTful APIs", "Database Design", "Cloud Services", "Microservices"],
        color: "#8b5cf6",
    },
    {
        id: 5,
        title: "DevOps & Deployment",
        description:
            "CI/CD pipelines, containerization with Docker, cloud deployment on AWS/Azure, and automated testing for reliable delivery.",
        icon: "Cloud",
        features: ["Docker & Kubernetes", "AWS/Azure", "CI/CD Pipelines", "Monitoring"],
        color: "#ef4444",
    },
    {
        id: 6,
        title: "Technical Consulting",
        description:
            "Strategic technology guidance, code reviews, architecture planning, and technical mentoring for teams and projects.",
        icon: "Lightbulb",
        features: ["Code Reviews", "Architecture Design", "Team Mentoring", "Tech Strategy"],
        color: "#06b6d4",
    },
]

export const projectsData = [
    {
        id: 1,
        title: "YALUOWE Mobile App",
        shortDescription: "Fund and expense management app for communities and friend groups.",
        description:
            "A mobile application developed at Sentura Technologies to help friends and communities manage shared funds and expenses. Includes group-based accounting, contribution tracking, and settlement features.",
        technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
        screenshots: [
            "/placeholder.svg?height=400&width=600&text=Group+Expense+Dashboard",
            "/placeholder.svg?height=400&width=600&text=Transactions+List",
        ],
        category: "Mobile App",
        liveUrl: "https://example.com/dashboard",
        githubUrl: "https://github.com/example/dashboard",
    },
    {
        id: 2,
        title: "Beecelle Merchant App",
        shortDescription: "Meal subscription management for food merchants.",
        description:
            "Commercial mobile app developed at Sentura Technologies for merchants managing a subscription-based meal ordering service. Includes order tracking, meal scheduling, and customer communication features.",
        technologies: ["React Native", "Redux", "TypeScript", "Firebase"],
        screenshots: [
            "/placeholder.svg?height=400&width=600&text=Merchant+Orders",
            "/placeholder.svg?height=400&width=600&text=Meal+Planner",
        ],
        category: "Mobile App",
        githubUrl: "https://github.com/example/task-api",
    },
    {
        id: 3,
        title: "Sawari Mobile App",
        shortDescription: "Ride-hailing app for taxi-based transport services.",
        description:
            "Developed at Sentura Technologies, Big Boy is a commercial ride-hailing mobile app similar to Uber. Features include real-time location tracking, ride requests, driver allocation, and in-app payments.",
        technologies: ["React Native", "TypeScript", "Google Maps API", "Firebase"],
        screenshots: [
            "/placeholder.svg?height=400&width=600&text=Ride+Booking",
            "/placeholder.svg?height=400&width=600&text=Driver+Location",
        ],
        category: "Mobile App",
        liveUrl: "https://example.com/weather-app",
        githubUrl: "https://github.com/example/weather-app",
    },
    {
        id: 4,
        title: "SNP Warehouse System",
        shortDescription: "Warehouse management frontend for a clothing brand.",
        description:
            "Frontend for a warehouse management system developed at Cenzios using the MERN stack. Supports inventory control, shipment tracking, and order management for a clothing brand.",
        technologies: ["React", "MongoDB", "Express", "Node.js", "Material UI"],
        screenshots: [
            "/placeholder.svg?height=400&width=600&text=Inventory+Dashboard",
            "/placeholder.svg?height=400&width=600&text=Order+Management",
        ],
        category: "Web Application",
        liveUrl: "https://example.com/portfolio",
        githubUrl: "https://github.com/example/portfolio",
    },
    {
        id: 4,
        title: "SNP Warehouse System",
        shortDescription: "Warehouse management frontend for a clothing brand.",
        description:
            "Frontend for a warehouse management system developed at Cenzios using the MERN stack. Supports inventory control, shipment tracking, and order management for a clothing brand.",
        technologies: ["React", "MongoDB", "Express", "Node.js", "Material UI"],
        screenshots: [
            "/placeholder.svg?height=400&width=600&text=Inventory+Dashboard",
            "/placeholder.svg?height=400&width=600&text=Order+Management",
        ],
        category: "Web Application",
        liveUrl: "https://example.com/portfolio",
        githubUrl: "https://github.com/example/portfolio",
    },
    {
        id: 5,
        title: "OOLO Merchant App",
        shortDescription: "Service management for vehicle repair merchants.",
        description:
            "Mobile application developed at Sentura Technologies for vehicle repair service providers. Includes customer management, service request handling, appointment scheduling, and job status updates.",
        technologies: ["React Native", "Redux", "Firebase", "TypeScript"],
        screenshots: [
            "/placeholder.svg?height=400&width=600&text=Service+Dashboard",
            "/placeholder.svg?height=400&width=600&text=Appointments",
        ],
        category: "Mobile App",
        liveUrl: "https://example.com/portfolio",
        githubUrl: "https://github.com/example/portfolio",
    },
    {
        id: 6,
        title: "Company Project Management System",
        shortDescription: "Java desktop app with project tracking and payment slips.",
        description:
            "A Java Swing-based desktop application built for internal project management. Features include team task tracking, payment slip generation, barcode support, and an SQL-based data store.",
        technologies: ["Java Swing", "SQL", "OOP", "Barcode API"],
        screenshots: [
            "/placeholder.svg?height=400&width=600&text=Dashboard",
            "/placeholder.svg?height=400&width=600&text=Payment+Slip",
        ],
        category: "Desktop Application",
        liveUrl: "https://example.com/portfolio",
        githubUrl: "https://github.com/example/portfolio",
    },
    {
        id: 7,
        title: "Java EE E-Library System",
        shortDescription: "E-library platform using Spring MVC and Hibernate.",
        description:
            "An online library system with user authentication, book cataloging, and borrowing features. Built with Java EE technologies including Spring MVC, JSP, Tailwind, and Hibernate ORM for SQL integration.",
        technologies: ["Java", "Spring MVC", "JSP", "Hibernate", "Tailwind", "SQL"],
        screenshots: [
            "/placeholder.svg?height=400&width=600&text=Book+Search",
            "/placeholder.svg?height=400&width=600&text=Borrowing+History",
        ],
        category: "Web Application",
        liveUrl: "https://example.com/portfolio",
        githubUrl: "https://github.com/example/portfolio",
    },

]