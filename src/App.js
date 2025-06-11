import { gsap } from "gsap";
import { Paper } from '@mui/material';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react"; // Make sure useState is imported

import './App.css';
import {
    AppBar, Avatar, Box,
    Button,
    Container,
    createTheme, Grid, Grid2, IconButton,
    Menu, MenuItem,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ProfileImage from './imgs/profileImg.jpg';
import {TimelineItem} from "./components/TimelineItem";

gsap.registerPlugin(ScrollTrigger);

function App() {

    const theme = createTheme({
        palette: {
            primary: {main: '#190933'},
            secondary: {main: '#665687'},
            background: {main: '#B084CC'},
            primary_text: {main: '#ACFCD9'},
            secondary_text: {main: '#5DD9C1'}
        },
    });

    const careerHistory = [
        {
            year: "2021 - Present",
            title: "Senior Full Stack Developer",
            company: "Innovatech Solutions",
            description: "Leading development of scalable web applications using the MERN stack and deploying on AWS."
        },
        {
            year: "2019 - 2021",
            title: "Mid-Level Software Engineer",
            company: "Data Systems Corp",
            description: "Developed and maintained backend services with Java and Spring Boot, contributing to a 20% increase in API performance."
        },
        {
            year: "2017 - 2019",
            title: "Junior Developer",
            company: "Creative Web Agency",
            description: "Built responsive and interactive user interfaces for client websites using React and Material-UI."
        },
        {
            year: "2013 - 2017",
            title: "B.Sc. in Computer Science",
            company: "University of Technology",
            description: "Graduated with First Class Honors, specializing in software engineering and database management."
        }
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    // This part is correct
    const main = useRef();
    const timelineSection = useRef();

    useEffect(() => {
        // Using gsap.context() is the key to making this work well with React
        const ctx = gsap.context(() => {

            // Now, with the ref on a real element, this selector will work perfectly.
            const icons = gsap.utils.toArray('.tech-icon');
            const name = gsap.utils.toArray('.name-card');
            const profilePic = gsap.utils.toArray('.profile-pic');

            // Set their initial state (before animation)
            gsap.set(icons, { opacity: 0, x:1000, scale: 0 });
            gsap.set(name,{opacity: 0, x:-1000, scale: 0.1});
            gsap.set(icons, { opacity: 0, y:100, scale: 0 });


            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: timelineSection.current, // Use the ref as the trigger
                    start: "top 60%", // Start animation when the top of the section hits 60% of the viewport
                    end: "bottom 80%",
                    // markers: true, // Uncomment for debugging
                    toggleActions: "play none none none" // Play the animation once
                }
            });

            // 1. Animate the central line
            tl.from(".timeline-line", {
                scaleY: 0,
                transformOrigin: 'top', // Animate from the top
                duration: 1,
                ease: 'power2.inOut'
            });

            // 2. Animate the dots and cards for each item
            // We use a function-based value for x to slide left or right
            tl.from(".timeline-item", {
                opacity: 0,
                y: 50,
                stagger: 0.3, // Stagger each .timeline-item
                duration: 0.8,
                ease: 'power2.out'
            }, "-=0.5"); // Overlap with the line animation for a smoother effect



            gsap.to(icons, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.5,
                delay: 0.5,
                stagger: 0.1,
                ease: 'back.out(1.7)',
            });


            gsap.to(name, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration:0.4,
                delay: 0.5,
                ease:'back.out(1.7)',
            });

            gsap.to(profilePic, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration:0.4,
                delay: 0.5,
                ease:'back.out(1.7)',
            });

        }, main); // The context is scoped to our main ref

        // The cleanup function is essential for React
        return () => ctx.revert();
    }, []); // Empty dependency array ensures this runs only once

    return (
        // 1. REMOVE the ref from ThemeProvider
        <ThemeProvider theme={theme}>
            {/* 2. ADD a <Box> as the main wrapper and place the ref HERE */}
            <Box ref={main}>
                {/*NavBarSection*/}
                <AppBar position="sticky">
                    {/* ... rest of your AppBar code ... */}
                    <Toolbar sx={{display: {xs: 'none', md: 'flex'}}}>
                        <Typography variant="h6" sx={{flexGrow: 1, color: theme.palette.primary_text.main}}>Yasiru
                            Kavinda</Typography>
                        <Button sx={(theme) => ({color: theme.palette.primary_text.main})}>Home</Button>
                        <Button sx={(theme) => ({color: theme.palette.primary_text.main})}>About</Button>
                        <Button sx={(theme) => ({color: theme.palette.primary_text.main})}>Projects</Button>
                        <Button sx={(theme) => ({color: theme.palette.primary_text.main})}>Contact</Button>
                    </Toolbar>


                    <Box sx={{display: 'flex', flexGrow: 1, alignItems: 'start', px: 5}}>
                        <IconButton edge="start" color="inherit" onClick={handleMenuOpen}
                                    sx={{display: {xs: 'flex', md: 'none'}, alignItems: 'flex-start'}}>
                            <MenuIcon/>
                        </IconButton>
                    </Box>


                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose} sx={{color: theme.palette.primary_text.main}}>Home</MenuItem>
                        <MenuItem onClick={handleMenuClose} sx={{color: theme.palette.primary_text.main}}>About</MenuItem>
                        <MenuItem onClick={handleMenuClose}
                                  sx={{color: theme.palette.primary_text.main}}>Projects</MenuItem>
                        <MenuItem onClick={handleMenuClose} sx={{color: theme.palette.primary_text.main}}>Contact</MenuItem>
                    </Menu>
                </AppBar>
                <Box sx={{bgcolor: 'primary.main', color: 'white', py: 10, textAlign: 'center', flexDirection: 'row'}}>
                    <Container>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={7}>
                                <Box textAlign="center">
                                    <Avatar
                                        className="name-card"
                                        src={ProfileImage}
                                        sx={{width: 200, height: 200, mx: 'auto', mb: 2}}
                                    />
                                    <Typography variant="h3" className="name-card">Hello, I'm Yasiru!</Typography>
                                    <Typography variant="h5" className="name-card">Full Stack Developer</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Box textAlign="center">
                                    {/*<Typography variant="h6" sx={{mb: 2}}>Tech Stack</Typography>*/}
                                    <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3}}>
                                        <Avatar
                                            className="tech-icon"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                            sx={{width: 50, height: 50}}/>
                                        <Avatar
                                            className="tech-icon"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                            sx={{width: 50, height: 50}}/>
                                        <Avatar
                                            className="tech-icon"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                            sx={{width: 50, height: 50}}/>
                                        <Avatar
                                            className="tech-icon"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                            sx={{width: 50, height: 50}}/>
                                        <Avatar
                                            className="tech-icon"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                            sx={{width: 50, height: 50}}/>

                                        <Avatar
                                            className="tech-icon"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                                            sx={{width: 50, height: 50}}/>
                                        <Avatar
                                            className="tech-icon"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                                            sx={{width: 50, height: 50}}/>
                                        <Avatar
                                            className="tech-icon"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                                            sx={{width: 50, height: 50}}/>
                                        <Avatar
                                            className="tech-icon"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                            sx={{width: 50, height: 50}}/>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* About Section */}
                <Box sx={{ py: 10, bgcolor: 'secondary.main', color: 'primary.main' }}>
                    <Container>
                        <Typography variant="h4" textAlign="center" color="white" mb={2}>About Me</Typography>
                        <Typography textAlign="center" color="white" sx={{maxWidth: '700px', margin: 'auto', mb: 8}}>
                            I am a Professional in the industry specialized in FullStack Development
                            with an Experience of 5+ years in the Industry.
                        </Typography>

                        {/* --- TIMELINE CONTAINER --- */}
                        {/* We use position: 'relative' to position the central line */}
                        <Box ref={timelineSection} sx={{ position: 'relative', mt: 4 }}>
                            {/* The Central Vertical Line */}
                            <Box
                                className="timeline-line"
                                sx={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: 0,
                                    bottom: 0,
                                    width: '4px',
                                    bgcolor: 'primary.main',
                                    transform: 'translateX(-50%)' // Center the line
                                }}
                            />

                            {/* Map over the history data to render items */}
                            {careerHistory.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    item={item}
                                    // Alternate orientation based on index
                                    orientation={index % 2 === 0 ? 'right' : 'left'}
                                />
                            ))}
                        </Box>
                    </Container>
                </Box>

                {/* Projects Section */}
                <Box sx={{bgcolor: 'grey.100', py: 10}}>
                    <Container>
                        <Typography variant="h4" textAlign="center" mb={4}>My Projects</Typography>
                        <Grid2 container spacing={3}>
                            <Grid2 item xs={12} md={6}>
                                <Box p={3} bgcolor="white" boxShadow={2} borderRadius={2} textAlign="center">
                                    <Typography variant="h6">Project 1</Typography>
                                    <Typography>React + MUI Web App</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 item xs={12} md={6}>
                                <Box p={3} bgcolor="white" boxShadow={2} borderRadius={2} textAlign="center">
                                    <Typography variant="h6">Project 2</Typography>
                                    <Typography>Node.js + MongoDB API</Typography>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Container>
                </Box>
            </Box> {/* <-- Close the main <Box> */}
        </ThemeProvider>
    );
}

export default App;