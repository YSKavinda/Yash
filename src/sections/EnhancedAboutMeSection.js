import { Box, Typography, useTheme, alpha, Container, Stack, Chip } from "@mui/material"
import { Code, Lightbulb, Rocket, LightbulbCircle } from "@mui/icons-material"

const EnhancedAboutMeSection = () => {
    const theme = useTheme()

    const highlights = [
        { icon: Code, text: "Full-stack delivery", color: theme.palette.primary.main },
        { icon: Lightbulb, text: "AI-assisted workflows", color: theme.palette.secondary.main },
        { icon: Rocket, text: "Mobile releases", color: "#a6613b" },
        { icon: LightbulbCircle, text: "Collaborative engineering", color: "#8062a5" },
    ]

    const skills = [
        "TypeScript", "React Native", "React", "Node.js", "Express",
        "MongoDB", "Ruby on Rails", "Java", "Spring Boot", "RabbitMQ",
        "AWS", "Firebase", "GitHub Actions", "Gemini Live", "MCP",
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
                        Mobile engineering, backend systems and practical AI
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
                            I'm a software engineer at Xigenix Lanka, working across React Native mobile products,
                            Ruby on Rails services and the TradesNow AI / Fixby backend. I enjoy turning complex
                            workflows into useful, dependable experiences.
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
                            My work spans Android and iOS releases, APIs, messaging, automation and AI-assisted
                            troubleshooting. Earlier at Sentura Technologies, I built full-stack and mobile features
                            with Spring Boot, React Native, Firebase and AWS.
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

                    <Box sx={{ bgcolor: "#eaf3f4", borderRadius: 3, p: { xs: 3, md: 4 }, mb: 6, textAlign: "left" }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Beyond the code</Typography>
                        <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                            I communicate with clients and stakeholders, present technical work, document decisions
                            and coordinate across teams. I have also supported company events and speaker coordination,
                            and joined team cricket and badminton activities.
                        </Typography>
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
