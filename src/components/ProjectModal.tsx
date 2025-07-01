import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
    Box,
    Chip,
    Stack,
    Button,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import { useState } from "react"
import CloseIcon from "@mui/icons-material/Close"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import LaunchIcon from "@mui/icons-material/Launch"
import GitHubIcon from "@mui/icons-material/GitHub"

interface ProjectModalProps {
    project: {
        id: number
        title: string
        description: string
        shortDescription: string
        technologies: string[]
        screenshots: string[]
        liveUrl?: string
        githubUrl?: string
        category: string
    } | null
    open: boolean
    onClose: () => void
}

const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const getImageStyles = (category: string, isMobile: boolean) => {
        const isMobileApp = category.toLowerCase().includes("mobile");
        return {
            height: isMobile ? (isMobileApp ? 300 : 200) : isMobileApp ? 500 : 400,
            objectFit: isMobileApp ? "contain" : "cover",
            borderRadius: 8,
            backgroundColor: "#f5f5f5"
        };
    };

    if (!project) return null

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            fullScreen={fullScreen}
            PaperProps={{
                sx: { borderRadius: fullScreen ? 0 : 2 },
            }}
        >
            <DialogTitle component="div" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h5" component="h2">
                    {project.title}
                </Typography>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <Stack spacing={3}>
                    {/* Image Slider */}
                    <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden" }}>
                        <Box
                            component="img"
                            src={project.screenshots[currentImageIndex]}
                            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                            sx={{
                                width: "100%",
                                ...getImageStyles(project.category, fullScreen),
                            }}
                        />

                        {project.screenshots.length > 1 && (
                            <>
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        left: 16,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        bgcolor: "rgba(0,0,0,0.6)",
                                        color: "white",
                                        "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
                                    }}
                                    onClick={prevImage}
                                >
                                    <ArrowBackIosIcon />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        right: 16,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        bgcolor: "rgba(0,0,0,0.6)",
                                        color: "white",
                                        "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
                                    }}
                                    onClick={nextImage}
                                >
                                    <ArrowForwardIosIcon />
                                </IconButton>

                                {/* Thumbnail Navigation */}
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    sx={{
                                        position: "absolute",
                                        bottom: 16,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        bgcolor: "rgba(0,0,0,0.6)",
                                        p: 1,
                                        borderRadius: 1,
                                        overflowX: "auto",
                                        maxWidth: "90%",
                                    }}
                                >
                                    {project.screenshots.map((screenshot, index) => (
                                        <Box
                                            key={index}
                                            component="img"
                                            src={screenshot}
                                            alt={`Thumbnail ${index + 1}`}
                                            onClick={() => setCurrentImageIndex(index)}
                                            sx={{
                                                width: 40,
                                                height: 30,
                                                objectFit: "cover",
                                                borderRadius: 0.5,
                                                cursor: "pointer",
                                                border: index === currentImageIndex ? "2px solid white" : "2px solid transparent",
                                                opacity: index === currentImageIndex ? 1 : 0.7,
                                                transition: "all 0.3s ease",
                                                "&:hover": { opacity: 1 },
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </>
                        )}
                    </Box>

                    {/* Project Details */}
                    <Box>
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                            <Chip label={project.category} color="primary" />
                        </Stack>

                        <Typography variant="body1" paragraph>
                            {project.description}
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            Technologies Used
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
                            {project.technologies.map((tech, index) => (
                                <Chip key={index} label={tech} variant="outlined" sx={{ mb: 0.5 }} />
                            ))}
                        </Stack>

                        {/* Action Buttons */}
                        <Stack direction="row" spacing={2}>
                            {project.liveUrl && (
                                <Button
                                    variant="contained"
                                    startIcon={<LaunchIcon />}
                                    onClick={() => window.open(project.liveUrl, "_blank")}
                                >
                                    View Live
                                </Button>
                            )}
                            {project.githubUrl && (
                                <Button
                                    variant="outlined"
                                    startIcon={<GitHubIcon />}
                                    onClick={() => window.open(project.githubUrl, "_blank")}
                                >
                                    View Code
                                </Button>
                            )}
                        </Stack>
                    </Box>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default ProjectModal;