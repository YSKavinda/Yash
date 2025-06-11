import {Box, Paper, Typography} from '@mui/material';

// A reusable component for each timeline entry
export const TimelineItem = ({ item, orientation }) => {
    return (
        // Each item will be a flex container. We give it a class for GSAP to find.
        <Box className="timeline-item" sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            {/* The content card. We use Paper for a nice shadow effect. */}
            <Paper
                elevation={3}
                // Give it a class for GSAP
                className="timeline-card"
                sx={{
                    p: 2,
                    width: { xs: '80%', md: '40%' },
                    // Use the orientation to determine the order for flexbox
                    order: orientation === 'left' ? 1 : 3,
                    textAlign: orientation === 'left' ? 'right' : 'left',
                }}
            >
                <Typography variant="h6" color="primary">{item.title}</Typography>
                <Typography variant="subtitle1" color="secondary">{item.company}</Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>{item.year}</Typography>
                <Typography variant="body1">{item.description}</Typography>
            </Paper>

            {/* This Box is the spacer and the dot */}
            <Box sx={{ order: 2, width: { xs: '10%', md: '20%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* The dot on the timeline. Give it a class! */}
                <Box className="timeline-dot" sx={{ width: 16, height: 16, bgcolor: 'primary.main', borderRadius: '50%' }} />
            </Box>
        </Box>
    );
};