import { Card, CardContent, Typography, Box, Chip, Stack, alpha, useTheme } from "@mui/material"
import { Code, Smartphone, Palette, Computer, Cloud, Lightbulb, ArrowForward } from "@mui/icons-material"

const iconMap = {
    Code: Code,
    Smartphone: Smartphone,
    Palette: Palette,
    Server: Computer,
    Cloud: Cloud,
    Lightbulb: Lightbulb,
}

const ServiceCard = ({ service }) => {
    const theme = useTheme()
    const IconComponent = iconMap[service.icon]

    return (
        <Card
            sx={{
                height: "fit-content",
                maxWidth: 400,
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: `1px solid ${alpha(service.color, 0.2)}`,
                "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 40px ${alpha(service.color, 0.15)}`,
                    "& .service-icon": {
                        transform: "scale(1.1) rotate(5deg)",
                        bgcolor: service.color,
                        color: "white",
                    },
                    "& .service-arrow": {
                        transform: "translateX(4px)",
                        opacity: 1,
                    },
                },
            }}
        >
            <CardContent
                sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                {/* Top Section: Icon and Title */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                        className="service-icon"
                        sx={{
                            borderRadius: "50%",
                            bgcolor: alpha(service.color, 0.1),
                            color: service.color,
                            mr: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                            minWidth: 48,
                            minHeight: 48,
                        }}
                    >
                        <IconComponent sx={{ fontSize: 32 }} />
                    </Box>
                    <Typography variant="h6" component="h3" fontWeight={700} display="flex" alignItems="center" gap={1}>
                        {service.title}
                        <ArrowForward
                            className="service-arrow"
                            sx={{
                                fontSize: 20,
                                opacity: 0,
                                transition: "all 0.3s ease",
                                color: service.color,
                            }}
                        />
                    </Typography>
                </Box>

                {/* Middle: Description */}
                <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.6} textAlign={'justify'}>
                        {service.description}
                    </Typography>
                </Box>

                {/* Bottom: Features */}
                <Stack direction="row"  flexWrap="wrap" sx={{ gap: 1 }}>
                    {service.features.map((feature, index) => (
                        <Chip
                            key={index}
                            label={feature}
                            size="small"
                            sx={{
                                bgcolor: alpha(service.color, 0.08),
                                color: service.color,
                                border: `1px solid ${alpha(service.color, 0.2)}`,
                                fontWeight: 500,
                                "&:hover": {
                                    bgcolor: alpha(service.color, 0.15),
                                },
                            }}
                        />
                    ))}
                </Stack>
            </CardContent>
        </Card>

    )
}

export default ServiceCard
