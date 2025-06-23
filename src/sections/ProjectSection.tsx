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
                        Scroll horizontally to explore my projects. Click on any project to see detailed information and
                        screenshots.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            overflowX: "auto",
                            pb: 2,
                            "&::-webkit-scrollbar": {
                                height: 8,
                            },
                            "&::-webkit-scrollbar-track": {
                                backgroundColor: "rgba(0,0,0,0.1)",
                                borderRadius: 4,
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "rgba(0,0,0,0.3)",
                                borderRadius: 4,
                                "&:hover": {
                                    backgroundColor: "rgba(0,0,0,0.5)",
                                },
                            },
                        }}
                    >
                        {projectsData.map((project) => (
                            <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
                        ))}
                    </Box>
                </Container>
            </Box>

            <ProjectModal project={selectedProject} open={modalOpen} onClose={handleModalClose} />
        </>
    )
}

export default ProjectSection
