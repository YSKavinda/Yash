import { Box, Chip, Paper, Typography, Stack, Link, useTheme, alpha } from "@mui/material"
import WorkIcon from "@mui/icons-material/Work"
import SchoolIcon from "@mui/icons-material/School"
import LaunchIcon from "@mui/icons-material/Launch"

export const TimelineItem = ({ item, orientation }) => {
    const theme = useTheme()

    // A small component to render the correct icon based on the data
    const TimelineIcon = () => {
        if (item.icon === "work") {
            return <WorkIcon sx={{ color: "primary.main", fontSize: 28 }} />
        }
        if (item.icon === "school") {
            return <SchoolIcon sx={{ color: "primary.main", fontSize: 28 }} />
        }
        return null
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mb: 6,
                position: "relative",
                px: { xs: 2, md: 0 },
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    width: { xs: "100%", md: "45%" },
                    maxWidth: 500,
                    marginLeft: { xs: 0, md: orientation === "left" ? "auto" : 0 },
                    marginRight: { xs: 0, md: orientation === "right" ? "auto" : 0 },
                    borderRadius: 4,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.grey[50], 0.8)} 100%)`,
                    backdropFilter: "blur(10px)",
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.1)}`,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    },
                    // Enhanced callout arrow
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 0,
                        height: 0,
                        borderStyle: "solid",
                        display: { xs: "none", md: "block" },
                        ...(orientation === "left"
                            ? {
                                right: "-15px",
                                borderWidth: "15px 0 15px 15px",
                                borderColor: `transparent transparent transparent ${alpha(theme.palette.background.paper, 0.9)}`,
                            }
                            : {
                                left: "-15px",
                                borderWidth: "15px 15px 15px 0",
                                borderColor: `transparent ${alpha(theme.palette.background.paper, 0.9)} transparent transparent`,
                            }),
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 0,
                        height: 0,
                        borderStyle: "solid",
                        display: { xs: "none", md: "block" },
                        ...(orientation === "left"
                            ? {
                                right: "-16px",
                                borderWidth: "16px 0 16px 16px",
                                borderColor: `transparent transparent transparent ${alpha(theme.palette.primary.main, 0.1)}`,
                            }
                            : {
                                left: "-16px",
                                borderWidth: "16px 16px 16px 0",
                                borderColor: `transparent ${alpha(theme.palette.primary.main, 0.1)} transparent transparent`,
                            }),
                    },
                }}
            >
                <Stack spacing={3}>
                    {/* Header with Icon and Title */}
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                        <Box
                            sx={{
                                p: 1.5,
                                borderRadius: 3,
                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <TimelineIcon />
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography
                                variant="h5"
                                component="h3"
                                sx={{
                                    fontWeight: "bold",
                                    mb: 0.5,
                                    color: "text.primary",
                                    lineHeight: 1.2,
                                }}
                            >
                                {item.title}
                            </Typography>
                            {/* Company with optional link */}
                            {item.company && (
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                    {item.companyUrl ? (
                                        <Link
                                            href={item.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: "primary.main",
                                                textDecoration: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                                fontWeight: 500,
                                                "&:hover": {
                                                    textDecoration: "underline",
                                                },
                                            }}
                                        >
                                            <Typography variant="subtitle1" component="span">
                                                {item.company}
                                            </Typography>
                                            <LaunchIcon sx={{ fontSize: 16 }} />
                                        </Link>
                                    ) : (
                                        <Typography variant="subtitle1" sx={{ fontWeight: 500, color: "text.secondary" }}>
                                            {item.company}
                                        </Typography>
                                    )}
                                </Box>
                            )}
                        </Box>
                    </Box>

                    {/* Date */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            fontStyle: "italic",
                            fontWeight: 500,
                            bgcolor: alpha(theme.palette.primary.main, 0.05),
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            display: "inline-block",
                            width: "fit-content",
                        }}
                    >
                        {item.date}
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body1"
                        sx={{
                            lineHeight: 1.7,
                            color: "text.primary",
                        }}
                    >
                        {item.description}
                    </Typography>

                    {/* Skills/Tags */}
                    {item.tags && item.tags.length > 0 && (
                        <Box>
                            <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600, color: "text.secondary" }}>
                                Technologies & Skills
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                                {item.tags.map((tag, index) => (
                                    <Chip
                                        key={index}
                                        label={tag}
                                        size="small"
                                        sx={{
                                            bgcolor: alpha(theme.palette.primary.main, 0.08),
                                            color: "primary.main",
                                            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                            fontWeight: 500,
                                            "&:hover": {
                                                bgcolor: alpha(theme.palette.primary.main, 0.15),
                                                transform: "translateY(-1px)",
                                            },
                                            transition: "all 0.2s ease",
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    )}
                </Stack>
            </Paper>
        </Box>
    )
}
