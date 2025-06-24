import {
    Avatar,
    Box,
    Container,
    Grid,
    Typography,
    useTheme
} from "@mui/material";
import ProfileImage from "../imgs/profileImg.jpg";
import {Code, Lightbulb, Rocket} from "@mui/icons-material";
import ServicesSection from "./ServicesSection";
import ExperienceSection from "./ExperienceSection";
import EnhancedAboutMeSection from "./EnhancedAboutMeSection";

const AboutSection = ({id, timelineSection}) => {
    const theme = useTheme();

    return (
        <>
            {/* Hero Section */}
            <Box
                id={id}
                sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    py: {xs: 6, sm: 8, md: 10},
                    textAlign: "center",
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        px: {xs: 2, sm: 3, md: 4, lg: 2, xl: 0}, // reduces padding on large desktops
                    }}
                >
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        justifyContent="center"
                    >
                        {/* Profile Image + Greeting */}
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Avatar
                                    className="profile-pic"
                                    src={ProfileImage}
                                    sx={{
                                        width: {xs: 140, sm: 160, md: 200},
                                        height: {xs: 140, sm: 160, md: 200},
                                        mx: "auto",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="h4"
                                    className="hero-text"
                                    sx={{
                                        color: theme.palette.primary_text?.main || "white",
                                        fontWeight: 700,
                                        fontSize: {xs: "1.75rem", sm: "2rem", md: "2.5rem"},
                                    }}
                                >
                                    Hello, I'm Yasiru Kavinda!
                                </Typography>
                                <Typography
                                    variant="h6"
                                    className="hero-text"
                                    sx={{fontSize: {xs: "1rem", sm: "1.25rem"}}}
                                >
                                    Full Stack Developer
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Tech Stack Icons */}
                        <Grid item xs={12}>
                            <Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        gap: 2,
                                        px: {xs: 1, sm: 2},
                                    }}
                                >
                                    {[
                                        "java",
                                        "javascript",
                                        "react",
                                        "nodejs",
                                        "mongodb",
                                        "spring",
                                        "linux",
                                        "docker",
                                        "mysql",
                                    ].map((tech) => (
                                        <Avatar
                                            key={tech}
                                            className="tech-icon"
                                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                                            sx={{
                                                width: {xs: 36, sm: 44, md: 50},
                                                height: {xs: 36, sm: 44, md: 50},
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Detailed About Section */}
            <Box sx={{py: {xs: 6, sm: 8, md: 10}, color: "primary.main"}}>
                <Container  maxWidth="lg"
                            sx={{
                                px: { xs: 2, sm: 2, md: 2, lg: 0, xl: 0 },
                            }}
                >
                    <Grid container spacing={4}>
                        {/* About Me + Services */}
                        <Grid item xs={12}>
                            <EnhancedAboutMeSection/>
                            <Box
                                sx={{
                                    mt: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                            >
                                <ServicesSection id={"services"}/>
                            </Box>
                        </Grid>

                        {/* Experience Timeline */}
                        <Grid item xs={12}>
                            <ExperienceSection timelineSection={timelineSection}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default AboutSection;
