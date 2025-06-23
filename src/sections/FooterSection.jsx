import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    TextField,
    Button,
    Stack,
    useTheme,
    alpha,
    Fade,
} from "@mui/material"
import {
    GitHub,
    LinkedIn,
    Twitter,
    Instagram,
    Email,
    LocationOn,
    Send,
    ArrowUpward,
    Code,
    Palette,
    Smartphone, Phone,
} from "@mui/icons-material"
import { useState, useEffect } from "react"
import {footerData} from "../utils/constants";


const iconMap = {
    GitHub: GitHub,
    LinkedIn: LinkedIn,
    Twitter: Twitter,
    Instagram: Instagram,
}

const serviceIcons = {
    "Web Development": Code,
    "Mobile Apps": Smartphone,
    "UI/UX Design": Palette,
}

const FooterSection = ({id}) => {
    const theme = useTheme()
    const [email, setEmail] = useState("")
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNewsletterSubmit = (e) => {
        e.preventDefault()
        console.log("Newsletter subscription:", email)
        setEmail("")
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <>
            {/* Scroll to Top Button */}
            <Fade in={showScrollTop}>
                <IconButton
                    onClick={scrollToTop}
                    sx={{
                        position: "fixed",
                        bottom: 32,
                        right: 32,
                        bgcolor: "primary.main",
                        color: '#fdfdfd',
                        zIndex: 1000,
                        "&:hover": {
                            bgcolor: "primary.dark",
                            transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                        boxShadow: 4,
                    }}
                >
                    <ArrowUpward />
                </IconButton>
            </Fade>

            <Box
                id={id}
                component="footer"
                sx={{
                    background: `linear-gradient(135deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[800]} 100%)`,
                    color: '#fdfdfd',
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main || "#ff6b6b"}, ${theme.palette.primary.main})`,
                    },
                }}
            >
                {/* Decorative Background Elements */}
                <Box
                    sx={{
                        position: "absolute",
                        top: -50,
                        right: -50,
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: -100,
                        left: -100,
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main || "#ff6b6b", 0.05)} 0%, transparent 70%)`,
                    }}
                />

                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                    {/* Stats Section */}
                    <Box sx={{ py: 6, borderBottom: `1px solid ${alpha('#fdfdfd', 0.1)}` }}>
                        <Grid container spacing={4}>
                            {footerData.stats.map((stat, index) => (
                                <Grid item xs={6} md={3} key={index}>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: "bold",
                                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary_text.main || "#ff6b6b"})`,
                                                backgroundClip: "text",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                mb: 1,
                                            }}
                                        >
                                            {stat.value}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "grey.400", textTransform: "uppercase", letterSpacing: 1 }}
                                        >
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Main Footer Content */}
                    <Box sx={{ py: 8 }}>
                        <Grid container spacing={6}>
                            {/* Brand Section */}
                            <Grid item xs={12} lg={4}>
                                <Box sx={{ mb: 4 }}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: "bold",
                                            background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main || "#ff6b6b"})`,
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            mb: 2,
                                        }}
                                    >
                                        {footerData.brand.name}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "grey.300",
                                            fontWeight: 300,
                                            mb: 3,
                                        }}
                                    >
                                        {footerData.brand.tagline}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "grey.400",
                                            lineHeight: 1.8,
                                            mb: 4,
                                        }}
                                    >
                                        {footerData.brand.description}
                                    </Typography>

                                    {/* Contact Info */}
                                    <Stack spacing={2}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Box
                                                sx={{
                                                    p: 1,
                                                    borderRadius: 2,
                                                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                                                    color: "primary.main",
                                                }}
                                            >
                                                <Email fontSize="small" />
                                            </Box>
                                            <Link
                                                href={`mailto:${footerData.contact.email}`}
                                                sx={{
                                                    color: "grey.300",
                                                    textDecoration: "none",
                                                    "&:hover": { color: "primary.main" },
                                                    transition: "color 0.3s ease",
                                                }}
                                            >
                                                {footerData.contact.email}
                                            </Link>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Box
                                                sx={{
                                                    p: 1,
                                                    borderRadius: 2,
                                                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                                                    color: "primary.main",
                                                }}
                                            >
                                                <Phone fontSize="small" />
                                            </Box>
                                            <Link
                                                href={`mailto:${footerData.contact.email}`}
                                                sx={{
                                                    color: "grey.300",
                                                    textDecoration: "none",
                                                    "&:hover": { color: "primary.main" },
                                                    transition: "color 0.3s ease",
                                                }}
                                            >
                                                {footerData.contact.phone}
                                            </Link>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Box
                                                sx={{
                                                    p: 1,
                                                    borderRadius: 2,
                                                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                                                    color: "primary.main",
                                                }}
                                            >
                                                <LocationOn fontSize="small" />
                                            </Box>
                                            <Typography variant="body2" sx={{ color: "grey.300" }}>
                                                {footerData.contact.location}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>

                            {/* Links Sections */}
                            <Grid item xs={12} sm={6} lg={2}>
                                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#fdfdfd' }}>
                                    Quick Links
                                </Typography>
                                <Stack spacing={2}>
                                    {footerData.quickLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            sx={{
                                                color: "grey.400",
                                                textDecoration: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                "&:hover": {
                                                    color: "primary.main",
                                                    transform: "translateX(4px)",
                                                },
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 4,
                                                    height: 4,
                                                    borderRadius: "50%",
                                                    bgcolor: "primary.main",
                                                    opacity: 0,
                                                    transition: "opacity 0.3s ease",
                                                    ".MuiLink-root:hover &": { opacity: 1 },
                                                }}
                                            />
                                            {link.label}
                                        </Link>
                                    ))}
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={2}>
                                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#fdfdfd' }}>
                                    Services
                                </Typography>
                                <Stack spacing={2}>
                                    {footerData.services.map((service, index) => {
                                        const IconComponent = serviceIcons[service.label]
                                        return (
                                            <Link
                                                key={index}
                                                href={service.href}
                                                sx={{
                                                    color: "grey.400",
                                                    textDecoration: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1.5,
                                                    "&:hover": {
                                                        color: "primary.main",
                                                        transform: "translateX(4px)",
                                                    },
                                                    transition: "all 0.3s ease",
                                                }}
                                            >
                                                {IconComponent && <IconComponent fontSize="small" />}
                                                {service.label}
                                            </Link>
                                        )
                                    })}
                                </Stack>
                            </Grid>

                            {/* Newsletter */}
                            <Grid item xs={12} lg={4}>
                                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#fdfdfd' }}>
                                    {footerData.newsletter.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "grey.400", mb: 4, lineHeight: 1.6 }}>
                                    {footerData.newsletter.description}
                                </Typography>

                                <Box component="form" onSubmit={handleNewsletterSubmit} sx={{ mb: 4 }}>
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <TextField
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder={footerData.newsletter.placeholder}
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                flex: 1,
                                                "& .MuiOutlinedInput-root": {
                                                    bgcolor: alpha(theme.palette.common.white, 0.05),
                                                    color: '#fdfdfd',
                                                    borderRadius: 3,
                                                    "& fieldset": { borderColor: alpha('#fdfdfd', 0.2) },
                                                    "&:hover fieldset": { borderColor: alpha('#fdfdfd', 0.3) },
                                                    "&.Mui-focused fieldset": { borderColor: "primary.main" },
                                                },
                                                "& .MuiInputBase-input::placeholder": {
                                                    color: "grey.500",
                                                },
                                            }}
                                        />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                bgcolor: "primary.main",
                                                borderRadius: 3,
                                                px: 3,
                                                "&:hover": {
                                                    bgcolor: "primary.dark",
                                                    transform: "translateY(-2px)",
                                                },
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            <Send fontSize="small" />
                                        </Button>
                                    </Box>
                                </Box>

                                {/* Social Media */}
                                <Typography variant="subtitle2" sx={{ mb: 2, color: "grey.300" }}>
                                    Follow Me
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    {footerData.social.map((social) => {
                                        const IconComponent = iconMap[social.icon]
                                        return (
                                            <IconButton
                                                key={social.name}
                                                onClick={() => window.open(social.url, "_blank")}
                                                sx={{
                                                    bgcolor: alpha(theme.palette.common.white, 0.05),
                                                    color: "grey.400",
                                                    border: `1px solid ${alpha('#fdfdfd', 0.1)}`,
                                                    "&:hover": {
                                                        bgcolor: "primary.main",
                                                        color: '#fdfdfd',
                                                        transform: "translateY(-4px) scale(1.1)",
                                                        borderColor: "primary.main",
                                                    },
                                                    transition: "all 0.3s ease",
                                                }}
                                            >
                                                <IconComponent fontSize="small" />
                                            </IconButton>
                                        )
                                    })}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Bottom Section */}
                    <Box
                        sx={{
                            py: 4,
                            borderTop: `1px solid ${alpha('#fdfdfd', 0.1)}`,
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Typography variant="body2" sx={{ color: "grey.500" }}>
                            © {footerData.copyright.year} {footerData.brand.name}. {footerData.copyright.text}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "grey.500" }}>
                            Made with ❤️ in {footerData.contact.location}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default FooterSection;
