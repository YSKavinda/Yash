import { Typography, Card, Box, CardContent, Chip } from "@mui/material";
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
                width: "100%",
                height: "100%",
                minHeight: 285,
                p: 2,
                cursor: "pointer",
                borderRadius: 4,
                border: "1px solid #dce7eb",
                boxShadow: "0 8px 25px rgba(23,43,77,.05)",
                transition: "all 0.3s ease",
                flexShrink: 0,
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 32px rgba(23,43,77,.12)",
                },
            }}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onClick(); } }}
        >
            <Box
                sx={{
                    height: 82,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #e9f7f4, #e6ecf6)",
                    color: "#0d8f86",
                    borderRadius: 2,
                }}
            >
                {getCategoryIcon(project.category)}
            </Box>
            <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontSize: "1.08rem", fontWeight: 700, color: "#172b4d" }}
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
                    {project.shortDescription}
                </Typography>
                <Box sx={{display: "flex", flexWrap: "wrap", gap: .7, mt: 2}}>
                    {project.technologies.slice(0, 3).map((tech) => <Chip key={tech} size="small" label={tech} sx={{bgcolor: "#eaf3f4", color: "#195365"}} />)}
                </Box>
            </CardContent>
        </Card>
    )
}

export default ProjectCard;
