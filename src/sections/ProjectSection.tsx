import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { projectsData } from "../utils/constants";
import {theme} from "../utils/constants";
// @ts-ignore
import  ProjectCard  from "../components/ProjectCard.tsx";
// @ts-ignore
import ProjectModal from "../components/ProjectModal.tsx";

const ProjectSection = ({id}) => {
    const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)
    const [modalOpen, setModalOpen] = useState(false)

    const handleProjectClick = (project: (typeof projectsData)[0]) => {
        setSelectedProject(project)
        setModalOpen(true)
    }

    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedProject(null)
    }

    return (
        <>
            <Box id={id} sx={{ bgcolor: "grey.100", py: 10 }}>
                <Container>
                    <Typography variant="h3" color="primary.main" textAlign={'center'}  sx={{
                        fontWeight: "bold",
                        background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main || "#ff6b6b"})`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }} mb={2}>
                        Projects
                    </Typography>
                    <Typography variant="body1" textAlign="center" color="text.secondary" mb={6} maxWidth="800px" mx="auto">
                        Selected work across mobile applications, backend systems and AI-assisted products. Open a card for the details.
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                            gap: 3,
                        }}
                    >
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
                        ))}
                    </Box>
                </Container>
            </Box>

            <ProjectModal project={selectedProject} open={modalOpen} onClose={handleModalClose} />
        </>
    )
}

export default ProjectSection
