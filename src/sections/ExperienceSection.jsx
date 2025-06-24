import { Box, Container, Typography, useTheme, alpha } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import {careerHistory} from "../utils/constants";
import {TimelineItem} from "../components/TimelineItem";

const ExperienceSection = ({ id }) => {
    const theme = useTheme()
    const timelineRef = useRef(null)
    const [visibleItems, setVisibleItems] = useState(new Set())

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number.parseInt(entry.target.dataset.index)
                        setVisibleItems((prev) => new Set([...prev, index]))
                    }
                })
            },
            { threshold: 0.2, rootMargin: "50px" },
        )

        const timelineItems = document.querySelectorAll(".timeline-item")
        timelineItems.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <Box
            id={id}
            sx={{
                py: 10,
                position: "relative",
                background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${alpha(theme.palette.grey[50], 0.9)} 100%)`,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 30% 20%, ${alpha(theme.palette.primary.main, 0.03)} 0%, transparent 50%), radial-gradient(circle at 70% 80%, ${alpha(theme.palette.secondary.main || "#f59e0b", 0.03)} 0%, transparent 50%)`,
                    pointerEvents: "none",
                },
            }}
        >
            <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, sm: 3, md: 2, lg: 1 }, position: "relative", zIndex: 1 }}>
                {/* Section Header */}
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main || "#f59e0b"})`,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        }}
                    >
                        My Journey
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "text.secondary",
                            fontWeight: 300,
                            mb: 2,
                            maxWidth: "600px",
                            mx: "auto",
                        }}
                    >
                        Experience & Education Timeline
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.secondary",
                            maxWidth: "800px",
                            mx: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        A chronological journey through my professional experience and educational background, showcasing the skills
                        and knowledge I've gained along the way.
                    </Typography>
                </Box>

                {/* Timeline Container */}
                <Box
                    ref={timelineRef}
                    sx={{
                        position: "relative",
                        px: { xs: 2, sm: 3, md: 2, lg: 1 },
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            left: "50%",
                            top: 0,
                            bottom: 0,
                            width: "3px",
                            background: `linear-gradient(180deg, transparent 0%, ${theme.palette.primary.main} 10%, ${theme.palette.primary.main} 90%, transparent 100%)`,
                            transform: "translateX(-50%)",
                            zIndex: 0,
                            display: { xs: "none", md: "block" },
                        },
                    }}
                >
                    {careerHistory.map((item, index) => (
                        <Box
                            key={item.id}
                            data-index={index}
                            className="timeline-item"
                            sx={{
                                position: "relative",
                                opacity: visibleItems.has(index) ? 1 : 0,
                                transform: visibleItems.has(index)
                                    ? "translateY(0)"
                                    : { xs: "translateY(10px)", sm: "translateY(30px)" },
                                transition: "all 0.6s ease",
                                transitionDelay: `${index * 0.1}s`,
                            }}
                        >
                            {/* Timeline Dot */}
                            <Box
                                sx={{

                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    width: { xs: 0, md: 20 },
                                    height: { xs: 0, md: 20 },
                                    bgcolor: "primary.main",
                                    borderRadius: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 2,
                                    display: { xs: "none", md: "block" },
                                    border: `4px solid ${theme.palette.background.paper}`,
                                    boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.2)}`,
                                    transition: "all 0.3s ease",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        width: 8,
                                        height: 8,
                                        bgcolor: "white",
                                        borderRadius: "50%",
                                        transform: "translate(-50%, -50%)",
                                    },
                                }}
                            />

                            <TimelineItem item={item} orientation={index % 2 === 0 ? "left" : "right"} />
                        </Box>
                    ))}
                </Box>

                {/* Bottom CTA */}
                <Box sx={{ textAlign: "center", mt: 8 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        Interested in My Background?
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, maxWidth: "500px", mx: "auto" }}>
                        Let's discuss how my experience and skills can contribute to your next project.
                    </Typography>
                    <Box
                        component="a"
                        href="mailto:hello@yash.dev?subject=Let's Discuss Your Experience"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: { xs: 3, sm: 4 },
                            py: { xs: 1.5, sm: 2 },
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            bgcolor: "primary.main",
                            color: "white",
                            borderRadius: 3,
                            textDecoration: "none",
                            fontWeight: 600,
                            mt: { xs: 4, sm: 6 },
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: "primary.dark",
                                transform: "translateY(-2px)",
                                boxShadow: 4,
                            },
                        }}
                    >
                        Download Resume
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ExperienceSection
