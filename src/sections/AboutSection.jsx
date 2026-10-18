import {
    Avatar,
    Box,
    Container,
    Grid,
    Typography,
    useTheme
} from "@mui/material";
import ProfileImage from "../imgs/profileImg.jpg";
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
                    background: "radial-gradient(circle at 78% 20%, #125f68 0%, #172b4d 48%, #101c35 100%)",
                    color: "white",
                    py: {xs: 8, sm: 10, md: 13},
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
                                    Yasiru Sandun
                                </Typography>
                                <Typography
                                    variant="h6"
                                    className="hero-text"
                                    sx={{fontSize: {xs: "1rem", sm: "1.25rem"}}}
                                >
                                    Software Engineer · Mobile, Backend & AI
                                </Typography>
                                <Typography sx={{maxWidth: 600, mx: "auto", mt: 2, color: "#d9e8ee", lineHeight: 1.7}}>
                                    I build dependable applications from mobile interfaces to backend services, and explore useful AI-assisted experiences.
                                </Typography>
                                <Box sx={{display: "flex", justifyContent: "center", gap: 1.5, mt: 3, flexWrap: "wrap"}}>
                                    <Box component="a" href="#projects" sx={{px: 3, py: 1.2, bgcolor: "#65d6bc", color: "#102437", borderRadius: 2, fontWeight: 700, textDecoration: "none"}}>Explore my work</Box>
                                    <Box component="a" href="mailto:yskavinda@gmail.com" sx={{px: 3, py: 1.2, color: "white", border: "1px solid #8ab0bc", borderRadius: 2, fontWeight: 700, textDecoration: "none"}}>Get in touch</Box>
                                </Box>
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
                                        "typescript",
                                        "react",
                                        "nodejs",
                                        "mongodb",
                                        "spring",
                                        "ruby",
                                        "android",
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
            <Box id="about" sx={{py: {xs: 6, sm: 8, md: 10}, color: "primary.main"}}>
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
                            <ExperienceSection id="experience" timelineSection={timelineSection}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default AboutSection;
