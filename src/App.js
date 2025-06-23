import { gsap } from "gsap";
import {Box, CssBaseline, Paper} from '@mui/material';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react"; // Make sure useState is imported

import './App.css';
import {
    ThemeProvider,
} from "@mui/material";
import Navbar from "./sections/Navbar";
import {theme} from "./utils/constants";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection.tsx";
import FooterSection from "./sections/FooterSection";


gsap.registerPlugin(ScrollTrigger);

function App() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const main = useRef();
    const timelineSection = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {

            const entranceTl = gsap.timeline({
                defaults: { duration: 0.8, ease: 'power3.out' }
            });

            entranceTl
                .from('.profile-pic', { // Animate profile pic first
                    opacity: 0,
                    scale: 0.5,
                    y: -50
                })
                .from('.hero-text', { // Then the text
                    opacity: 0,
                    x: -100,
                    stagger: 0.2 // Animate h3 then h5
                }, "-=0.5") // Overlap with previous animation
                .from('.tech-icon', { // Finally, the tech icons
                    opacity: 0,
                    x: 100,
                    stagger: 0.1,
                    ease: 'back.out(1.7)'
                }, "-=0.5"); // Overlap again
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: timelineSection.current,
                    start: "top 70%",
                    // Use "once: true" for a clean "play once and stick" animation
                    once: true,
                    // markers: true, // Uncomment to debug trigger points
                }
            });

            scrollTl
                .from(".timeline-line", {
                    scaleY: 0,
                    transformOrigin: 'top',
                    duration: 1,
                    ease: 'power2.inOut'
                })
                .from(".timeline-item .timeline-card, .timeline-item .timeline-dot", {
                    opacity: 0,
                    y: 50,
                    stagger: 0.3,
                    duration: 0.6,
                    ease: 'power2.out'
                }, "-=0.5")
                // Only need one animation for all skill chips
                .from(".skill-chip", {
                    opacity: 0,
                    y: 20,
                    scale: 0.5,
                    stagger: 0.05,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                }, "-=0.3");

        }, main);


        return () => ctx.revert();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box ref={main} sx={{minHeight:"100vh"}}>
                  <Navbar anchorEl={anchorEl} handleMenuClose={handleMenuClose} handleMenuOpen={handleMenuOpen} />
                  <AboutSection id={'home'} timelineSection={timelineSection}/>
                  <ProjectSection id={'projects'}/>
                <FooterSection id={'contact'}/>
            </Box>
        </ThemeProvider>
    );
}

export default App;