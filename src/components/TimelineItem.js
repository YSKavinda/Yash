import { Box, Chip, Paper, Typography, Stack } from '@mui/material';
// Import the icons we'll be using
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

export const TimelineItem = ({ item, orientation }) => {
    // A small component to render the correct icon based on the data
    const TimelineIcon = () => {
        if (item.icon === 'work') {
            return <WorkIcon sx={{ color: 'primary.main' }} />;
        }
        if (item.icon === 'school') {
            return <SchoolIcon sx={{ color: 'primary.main' }} />;
        }
        return null;
    };

    return (
        <Box className="timeline-item" sx={{ display: 'flex', justifyContent: 'center', mb: 4, position: 'relative' , borderRadius:30}}>
            <Paper
                elevation={3}
                className="timeline-card"
                sx={{
                    p: 3, // Increased padding for more white space
                    width: { xs: '80%', md: '40%' },
                    order: orientation === 'left' ? 1 : 3,
                    // Add a colored border based on orientation
                    borderRadius: 6,
                    borderLeft: orientation === 'right' ? '4px solid' : 'none',
                    borderRight: orientation === 'left' ? '4px solid' : 'none',
                    borderColor: 'primary.main',
                    backgroundColor: 'background.main',
                    position: 'relative', // Needed for the callout arrow
                    // The "callout arrow" using a pseudo-element
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '28px', // Align with the dot
                        width: 0,
                        height: 0,
                        borderStyle: 'solid',
                        // Position arrow on the correct side
                        left: orientation === 'left' ? '100%' : 'auto',
                        right: orientation === 'right' ? '100%' : 'auto',
                        // Create the triangle shape
                        borderWidth: '8px 0 8px 12px',
                        borderColor: orientation === 'left'
                            ? 'transparent transparent transparent #fff'
                            : 'transparent',
                        transform: orientation === 'right' ? 'rotate(180deg)' : 'none',
                        filter: 'drop-shadow(2px 0px 1px rgba(0,0,0,0.05))',
                    },
                }}
            >
                {/* Header with Icon and Title/Company */}
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                    <TimelineIcon />
                    <Box>
                        <Typography variant="h6" color="secondary_text.main" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                        <Typography variant="subtitle1" color="primary_text.main">{item.company}</Typography>
                    </Box>
                </Stack>

                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>{item.year}</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>{item.description}</Typography>

                {/* Skills Section (Unchanged logic, just better spacing) */}
                {item.skills && item.skills.length > 0 && (
                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', justifyContent: orientation === 'left' ? 'flex-end' : 'flex-start', gap: '4px' }}>
                        {item.skills.map((skill, index) => (
                            <Chip
                                className="skill-chip"
                                key={index}
                                label={skill}
                                variant="filled"
                                color="success"
                                size="small"
                            />
                        ))}
                    </Box>
                )}
            </Paper>

            {/* This Box is the spacer and the dot */}
            <Box sx={{ order: 2, width: { xs: '10%', md: '20%' }, display: 'flex', justifyContent: 'center' }}>
                {/* The dot on the timeline. Aligned with the card icon/header */}
                <Box className="timeline-dot" sx={{ width: 16, height: 16, bgcolor: 'primary.main', borderRadius: '50%', mt: '28px' }} />
            </Box>
        </Box>
    );
};