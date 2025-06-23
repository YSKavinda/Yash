"use client"

import { Box, Container, Typography, Grid, alpha, useTheme } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import {servicesData} from "../utils/constants";
import ServiceCard from "../components/ServicesCard";

const ServicesSection = ({id}) => {
    const theme = useTheme()

    return (
        <Box
            id={id}
            sx={{
                py: 8,
                position: "relative",
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main || "#f59e0b", 0.02)} 100%)`,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 20% 80%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${alpha(theme.palette.secondary.main || "#f59e0b", 0.05)} 0%, transparent 50%)`,
                    pointerEvents: "none",
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
                        }}
                    >
                        My Services
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
                        Transforming Ideas into Digital Reality
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
                        I offer comprehensive digital solutions from concept to deployment, specializing in modern web and mobile
                        technologies with a focus on user experience and scalable architecture.
                    </Typography>
                </Box>

                {/* Services Grid */}
                <Grid container spacing={4}>
                    {servicesData.map((service) => (
                        <Grid item xs={12} md={6} lg={6} key={service.id}>
                            <ServiceCard service={service} />
                        </Grid>
                    ))}
                </Grid>

                {/* Call to Action */}
                <Box sx={{ textAlign: "center", mt: 8 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        Ready to Start Your Project?
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, maxWidth: "500px", mx: "auto" }}>
                        Let's discuss how I can help bring your ideas to life with cutting-edge technology and exceptional design.
                    </Typography>
                    <Box
                        component="a"
                        href="#contact"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: 4,
                            py: 2,
                            bgcolor: "primary.main",
                            color: "white",
                            borderRadius: 3,
                            textDecoration: "none",
                            fontWeight: 600,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: "primary.dark",
                                transform: "translateY(-2px)",
                                boxShadow: 4,
                            },
                        }}
                    >
                        Get In Touch
                        <ArrowForward sx={{ fontSize: 20 }} />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ServicesSection;
