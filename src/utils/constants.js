import React, {useEffect, useState} from "react";


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
        year: "2024 Oct - 2025 May",
        title: "Associate Software Engineer Fullstack",
        company: "Sentura Technologies",
        description: "Majorly focused on Mobile Application Developed with Cutting Edge Solutions with Solid Back-End Infrastructure",
        skills:["Java", "Spring Boot", "React", "React-Native" , "Node.js", "MongoDB", "Docker", "AWS"],
        icon: 'work'
    },
    {
        year: "2023 Nov - 2024 Oct",
        title: "React native Mobile Developer (Internship)",
        company: "Sentura Technologies",
        description: "Started My Career as an intern in Sentura Technologies worked on several mobile react native applications.",
        skills: ["React Native", "JavaScript", "Firebase", "Redux"],
        icon: 'work'
    },
    {
        year: "2020 Sep - 2024 Sep",
        title: "Degree Level Education",
        company: "Java Institute for Advanced Technology",
        description: "Completed my degree in Bachelor of Engineering Software Engineering at IIC University of Technology in Cambodia.",
        icon: 'school' // <-- Add this
    },
    // ... add the 'icon' property to your other entries
    {
        year: "2016 - 2019",
        title: "GCE Advanced Level",
        company: "Taxila Central College",
        description: "Faced Advanced Level in Biology Science Stream , Obtained B-Chemistry , C-Physics , C-Biology",
        icon: 'school' // <-- Add this
    },
];