"use client"

import {
    AppBar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Container,
    alpha,
    useTheme, Modal,
} from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon, Home, Person, Work, Email, Code } from "@mui/icons-material"
import { useState, useEffect } from "react"

const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: Person },
    { label: "Services", href: "#services", icon: Code },
    { label: "Projects", href: "#projects", icon: Work },
    { label: "Contact", href: "#contact", icon: Email },
]

// Your email address - update this with your actual email
const MY_EMAIL = "yskavinda@gmail.com"

const Navbar = () => {
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = useState(null)
    const [scrolled, setScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            setScrolled(isScrolled)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const [fallbackOpen, setFallbackOpen] = useState(false);

    const handleNavClick = (href) => {
        handleMenuClose()
        // Smooth scroll to section
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleHireMeClick = () => {
        const subject = encodeURIComponent("Project Inquiry - Let's Work Together!");
        const body = encodeURIComponent(`Hi Yash,

I'm interested in discussing a potential project with you.

Project Details:
- Project Type: [Web Development / Mobile App / UI/UX Design / Other]
- Timeline: [Your preferred timeline]
- Budget Range: [Your budget range]
- Brief Description: [Tell me about your project]

I'd love to schedule a call to discuss this further.

Best regards,
[Your Name]`);

        const mailtoLink = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;

        // Try opening email client
        window.location.href = mailtoLink;

        // Fallback: Show modal after 1.5s if email client doesn't intercept
        setTimeout(() => {
            setFallbackOpen(true);
        }, 1500);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background: scrolled ? `${alpha(theme.palette.background.paper, 0.95)}` : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled ? `1px solid ${alpha(theme.palette.divider, 0.1)}` : "none",
                    transition: "all 0.3s ease",
                    color: scrolled ? "text.primary" : "white",
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ px: { xs: 0, md: 2 } }}>
                        {/* Logo/Brand */}
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontWeight: "bold",
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main || "#f59e0b"})`,
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                            onClick={() => handleNavClick("#home")}
                        >
                            YASH
                        </Typography>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    onClick={() => handleNavClick(item.href)}
                                    startIcon={<item.icon sx={{ fontSize: 18 }} />}
                                    sx={{
                                        color: scrolled ? "text.primary" : "white",
                                        fontWeight: 500,
                                        px: 3,
                                        py: 1,
                                        borderRadius: 3,
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        position: "relative",
                                        overflow: "hidden",
                                        "&:hover": {
                                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                                            transform: "translateY(-2px)",
                                            "&::before": {
                                                transform: "scaleX(1)",
                                            },
                                        },
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: "2px",
                                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main || "#f59e0b"})`,
                                            transform: "scaleX(0)",
                                            transition: "transform 0.3s ease",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}

                            {/* CTA Button */}
                            <Button
                                variant="contained"
                                onClick={handleHireMeClick}
                                startIcon={<Email sx={{ fontSize: 18 }} />}
                                sx={{
                                    ml: 2,
                                    bgcolor: "primary.main",
                                    color: "white",
                                    px: 3,
                                    py: 1,
                                    borderRadius: 3,
                                    textTransform: "none",
                                    fontWeight: 600,
                                    boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.3)}`,
                                    "&:hover": {
                                        bgcolor: "primary.dark",
                                        transform: "translateY(-2px)",
                                        boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                                    },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                Hire Me
                            </Button>
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleMenuOpen}
                            sx={{
                                display: { xs: "flex", md: "none" },
                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                color: scrolled ? "text.primary" : "white",
                                "&:hover": {
                                    bgcolor: alpha(theme.palette.primary.main, 0.2),
                                    transform: "scale(1.1)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            {anchorEl ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                    sx: {
                        mt: 1,
                        minWidth: 200,
                        borderRadius: 3,
                        bgcolor: alpha(theme.palette.background.paper, 0.95),
                        backdropFilter: "blur(20px)",
                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                {navItems.map((item) => (
                    <MenuItem
                        key={item.label}
                        onClick={() => handleNavClick(item.href)}
                        sx={{
                            py: 1.5,
                            px: 3,
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            borderRadius: 2,
                            mx: 1,
                            my: 0.5,
                            "&:hover": {
                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                color: "primary.main",
                                transform: "translateX(4px)",
                            },
                            transition: "all 0.3s ease",
                        }}
                    >
                        <item.icon sx={{ fontSize: 20, color: "primary.main" }} />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {item.label}
                        </Typography>
                    </MenuItem>
                ))}

                {/* Mobile CTA */}
                <Box sx={{ p: 2 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleHireMeClick}
                        startIcon={<Email />}
                        sx={{
                            bgcolor: "primary.main",
                            color: "white",
                            py: 1.5,
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: 600,
                            "&:hover": {
                                bgcolor: "primary.dark",
                                transform: "translateY(-2px)",
                            },
                            transition: "all 0.3s ease",
                        }}
                    >
                        Hire Me
                    </Button>
                </Box>
            </Menu>
            <Modal open={fallbackOpen} onClose={() => setFallbackOpen(false)}>
                <Box
                    sx={{
                        p: 4,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        width: 400,
                        mx: "auto",
                        mt: "20vh",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h6" mb={2}>
                        Couldn't open your email app?
                    </Typography>
                    <Typography variant="body1" mb={2}>
                        No worries! You can reach me directly at:
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", color: "primary.main" }}
                    >
                        {MY_EMAIL}
                    </Typography>
                    <Button sx={{ mt: 3 }} onClick={() => setFallbackOpen(false)}>
                        Close
                    </Button>
                </Box>
            </Modal>

            {/* Spacer for fixed navbar */}
            <Toolbar />
        </>
    )
}

export default Navbar
