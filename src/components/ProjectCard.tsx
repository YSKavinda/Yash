import { Typography, Card, CardMedia, CardContent } from "@mui/material"

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
                component="img"
                height="140"
                image={project.screenshots[0]}
                alt={project.title}
                sx={{
                    objectFit: "cover",
                }}
            />
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