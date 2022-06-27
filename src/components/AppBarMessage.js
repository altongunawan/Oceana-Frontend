import { Box, Typography, Stack } from '@mui/material'

const AppBarMessage = () => {
    return (  
        <Box sx={{ width: '100%', py: 2 }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Typography variant="h6" sx={{ fontFamily: 'Comfortaa' }}>Full Name</Typography>
            </Stack>
        </Box>
    );
}
 
export default AppBarMessage;