import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { theme } from "./utils/constants";
import Navbar from "./sections/Navbar";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection.tsx";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <Navbar />
        <AboutSection id="home" />
        <ProjectSection id="projects" />
        <FooterSection id="contact" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
