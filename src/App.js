import yashLogo from './imgs/IMG_9679.webp';

import './App.css';
import {
    AppBar, Avatar, Box,
    Button,
    ButtonGroup,
    Container,
    createTheme, Grid, Grid2, Icon, IconButton,
    Menu, MenuItem,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import ThemeIcon from '@mui/icons-material/LightMode'
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ProfileImage from './imgs/profileImg.jpg';

function App() {

    const theme = createTheme({
        palette: {
            primary: {main: '#CDC1FF'},
            secondary: {main: '#E5D9F2'},
            background: {main: '#F5EFFF'},
        },
    })


    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);


    return (
        <ThemeProvider theme={theme}>
            {/*NavBarSection*/}
            <AppBar position="sticky">

                <Toolbar sx={{display:{xs:'none',md:'flex'}}}>
                            <Typography variant="h6" sx={{flexGrow: 1}}>Yasiru Kavinda</Typography>
                            <Button color="black" sx={{backgroundColor:'#A294F9',mx:1}}>Home</Button>
                            <Button color="black" sx={{backgroundColor:'#A294F9',mx:1}}>About</Button>
                            <Button color="black" sx={{backgroundColor:'#A294F9',mx:1}}>Projects</Button>
                            <Button color="black" sx={{backgroundColor:'#A294F9',mx:1}}>Contact</Button>
                        </Toolbar>



                <Box sx={{display: 'flex', flexGrow: 1,alignItems:'start',px:5}}>
                    <IconButton edge="start" color="inherit" onClick={handleMenuOpen} sx={{ display: { xs: 'flex', md: 'none'},alignItems:'flex-start' }}>
                        <MenuIcon />
                    </IconButton>
                </Box>


                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                    <MenuItem onClick={handleMenuClose}>About</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
                </Menu>
            </AppBar>
            {/* Hero Section */}
            <Box>
                <Icon/>
            </Box>
            <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 10, textAlign: 'center' }}>
                <Container>
                    <Avatar
                        src= {ProfileImage}
                        sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
                    />
                    <Typography variant="h3">Hello, I'm Yasiru!</Typography>
                    <Typography variant="h5">Full Stack Developer</Typography>
                </Container>
            </Box>

            {/* About Section */}
            <Container sx={{ py: 10 }}>
                <Typography variant="h4" textAlign="center" mb={4}>About Me</Typography>
                <Typography textAlign="center">I am a Professional in the industry specialized in FullStack Developement with an Experience of 5+ years in the Industry.</Typography>
            </Container>

            {/* Projects Section */}
            <Box sx={{ bgcolor: 'grey.100', py: 10 }}>
                <Container>
                    <Typography variant="h4" textAlign="center" mb={4}>My Projects</Typography>
                    <Grid2 container spacing={3}>
                        <Grid2 item xs={12} md={6}>
                            <Box p={3} bgcolor="white" boxShadow={2} borderRadius={2} textAlign="center">
                                <Typography variant="h6">Project 1</Typography>
                                <Typography>React + MUI Web App</Typography>
                            </Box>
                        </Grid2>
                        <Grid2 item xs={12} md={6}>
                            <Box p={3} bgcolor="white" boxShadow={2} borderRadius={2} textAlign="center">
                                <Typography variant="h6">Project 2</Typography>
                                <Typography>Node.js + MongoDB API</Typography>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
            {/*NavBarSection*/}
        </ThemeProvider>
    );
}

export default App;
