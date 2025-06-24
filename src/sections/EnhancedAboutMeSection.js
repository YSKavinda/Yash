import { Box, Typography, useTheme, alpha, Container, Stack, Chip } from "@mui/material"
import { Code, Lightbulb, Rocket, LightbulbCircle } from "@mui/icons-material"

const EnhancedAboutMeSection = () => {
    const theme = useTheme()

    const highlights = [
        { icon: Code, text: "Full-Stack Development", color: theme.palette.primary.main },
        { icon: Lightbulb, text: "Problem Solving", color: theme.palette.secondary.main || "#f59e0b" },
        { icon: Rocket, text: "Scalable Solutions", color: "#10b981" },
        { icon: LightbulbCircle, text: "User Experience", color: "#ef4444" },
    ]

    const skills = [
        "Java",
        "Spring Boot",
        "React",
        "React Native",
        "Node.js",
        "MongoDB",
        "Full-Stack",
        "Mobile Development",
    ]

    return (
        <Box
            sx={{
                py: 8,
                position: "relative",
                background:`linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${alpha(theme.palette.grey[50], 0.9)} 100%)`,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 20% 30%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%), radial-gradient(circle at 80% 70%, ${alpha(theme.palette.secondary.main || "#f59e0b", 0.05)} 0%, transparent 50%)`,
                    pointerEvents: "none",
                },
            }}
        >
            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
                <Box
                    sx={{
                        textAlign: "center",
                        transform: "translateY(0)",
                        transition: "all 0.8s ease",
                    }}
                >
                    {/* Section Header */}
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
                            position: "relative",
                            // "&::after": {
                            //     content: '""',
                            //     position: "absolute",
                            //     bottom: -8,
                            //     left: "50%",
                            //     transform: "translateX(-50%)",
                            //     width: 60,
                            //     height: 4,
                            //     background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main || "#f59e0b"})`,
                            //     borderRadius: 2,
                            // },
                        }}
                    >
                        About Me
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: "text.secondary",
                            fontWeight: 300,
                            mb: 6,
                            fontStyle: "italic",
                        }}
                    >
                        Crafting Digital Solutions with Passion & Precision
                    </Typography>

                    {/* Main Content */}
                    <Box
                        sx={{
                            bgcolor: alpha(theme.palette.common.white, 0.8),
                            backdropFilter: "blur(10px)",
                            borderRadius: 4,
                            p: { xs: 3, sm: 4, md: 6 },
                            mb: 6,
                            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                            boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.08)}`,
                            position: "relative",
                            overflow: "hidden",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 4,
                                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main || "#f59e0b"})`,
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "text.primary",
                                lineHeight: 1.5,
                                fontSize: "1.25rem",
                                fontWeight: 400,
                                textAlign: "justify",
                                mb: 4,
                                "& strong": {
                                    color: theme.palette.primary.main,
                                    fontWeight: 600,
                                },
                            }}
                        >
                            I'm a Software Engineer with a strong foundation in full-stack development and a passion
                            for building scalable, user-centric applications. I hold a degree in Software Engineering
                            and specialize in technologies such as Java, Spring Boot, React, and React Native.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                lineHeight: 1.7,
                                fontSize: "1.1rem",
                                textAlign: "justify",
                            }}
                        >
                            With hands-on experience in both mobile and web development, I focus on delivering clean, efficient code
                            and intuitive user experiences. I'm committed to continuous learning, collaborative problem-solving, and
                            building solutions that make an impact.
                        </Typography>
                    </Box>

                    {/* Highlights Section */}
                    <Box sx={{ mb: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                mb: 4,
                                color: "text.primary",
                            }}
                        >
                            What I Bring to the Table
                        </Typography>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={3}
                            justifyContent="center"
                            alignItems="stretch"
                            flexWrap="wrap"
                            useFlexGap
                        >
                            {highlights.map((highlight, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 24px)", md: "1 1 220px" },
                                        maxWidth: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        p: 3,
                                        borderRadius: 3,
                                        bgcolor: alpha(highlight.color, 0.08),
                                        border: `1px solid ${alpha(highlight.color, 0.2)}`,
                                        minWidth: 160,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            bgcolor: alpha(highlight.color, 0.12),
                                            boxShadow: `0 8px 25px ${alpha(highlight.color, 0.2)}`,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: "50%",
                                            bgcolor: alpha(highlight.color, 0.15),
                                            color: highlight.color,
                                            mb: 2,
                                        }}
                                    >
                                        <highlight.icon sx={{ fontSize: 28 }} />
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 600,
                                            color: "text.primary",
                                            textAlign: "center",
                                        }}
                                    >
                                        {highlight.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Box>

                    {/* Skills Tags */}
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                mb: 3,
                                color: "text.primary",
                            }}
                        >
                            Core Technologies
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            flexWrap="wrap"
                            justifyContent="center"
                            sx={{
                                gap: 1,
                                "& .MuiChip-root": {
                                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                                    px: { xs: 1, sm: 2 },
                                },
                            }}
                        >
                            {skills.map((skill, index) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    sx={{
                                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                                        color: "primary.main",
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                                        fontWeight: 500,
                                        fontSize: "0.9rem",
                                        "&:hover": {
                                            bgcolor: alpha(theme.palette.primary.main, 0.15),
                                            transform: "translateY(-2px)",
                                            boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                />
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default EnhancedAboutMeSection
