import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone"
import LanguageIcon from "@mui/icons-material/Language"
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows"
import AppsIcon from "@mui/icons-material/Apps"

interface ProjectCardProps {
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
    }
    onClick: () => void
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {

    const getCategoryIcon = (category: string) => {
        const lowerCategory = category.toLowerCase()
        if (lowerCategory.includes("mobile")) return <SmartphoneIcon sx={{ fontSize: 60 }} />
        if (lowerCategory.includes("web")) return <LanguageIcon sx={{ fontSize: 60 }} />
        if (lowerCategory.includes("desktop")) return <DesktopWindowsIcon sx={{ fontSize: 60 }} />
        return <AppsIcon sx={{ fontSize: 60 }} /> // fallback
    }

    return (
        <Card
            sx={{
                width: 280,
                height: 200,
                padding:2,
                cursor: "pointer",
                transition: "all 0.3s ease",
                flexShrink: 0,
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                },
            }}
            onClick={onClick}
        >
            <CardMedia
                sx={{
                    height: 140,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f3f4f6",
                }}
            >
                {getCategoryIcon(project.category)}
            </CardMedia>
            <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {project.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        fontSize: "0.875rem",
                        mt: 0.5,
                    }}
                >
                    {project.category}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProjectCard;