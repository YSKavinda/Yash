import {Avatar, Box, Container, Grid, Typography, useTheme} from "@mui/material";
import ProfileImage from "../imgs/profileImg.jpg";
import {careerHistory, theme} from "../utils/constants";
import ServicesSection from "./ServicesSection";
import ExperienceSection from "./ExperienceSection";
import {Code, Lightbulb, Rocket} from "@mui/icons-material";
import EnhancedAboutMeSection from "./EnhancedAboutMeSection";

const AboutSection = ({id,timelineSection}) => {

    const theme = useTheme();
    return(
        <>
            <Box id={id} sx={{bgcolor: 'primary.main', color: 'white', py: 10, textAlign: 'center', flexDirection: 'row'}}>
                <Container>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Box textAlign="center">
                                <Avatar
                                    className="profile-pic"
                                    src={ProfileImage}
                                    sx={{width: 200, height: 200, mx: 'auto', mb: 2}}
                                />
                                <Typography variant="h3" className="hero-text" sx={{flexGrow: 1, color: theme.palette.primary_text.main}}>Hello, I'm Yasiru Kavinda!</Typography>
                                <Typography variant="h5" className="hero-text">Full Stack Developer</Typography>
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
            <Box sx={{ py: 10, color: 'primary.main' }}>
                <Container maxWidth={false}>
                    <Grid container>
                        {/* LEFT COLUMN — About Me */}
                        <Grid item xs={12} md={6} sx={{ pr: 4}}>
                            <EnhancedAboutMeSection/>
                            <Box
                                sx={{
                                    width:'100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <ServicesSection id={"services"}/>
                            </Box>
                        </Grid>

                        {/* RIGHT COLUMN — Timeline */}
                        <ExperienceSection timelineSection={timelineSection}/>
                    </Grid>
                </Container>



            </Box>
        </>
    )
}

export default AboutSection;