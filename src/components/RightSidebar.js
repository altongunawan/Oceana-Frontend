import { Typography, Grid, Paper, TextField, InputAdornment, Box } from '@mui/material'
import { FaSearch } from "react-icons/fa";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const RightSidebar = () => {
    return (
        <Paper elevation={0} sx={{ height: '100%' }}>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="stratch"
                sx={{ p: 3 }}
            >
                <Typography variant="h5" sx={{ fontFamily: 'Comfortaa', mb: 2 }}>Oceana</Typography>
                <TextField 
                    size="small" 
                    placeholder="Cari di Oceana" 
                    variant="outlined" 
                    InputProps={{ 
                        style : { fontFamily: 'Comfortaa' },
                        startAdornment: (
                            <InputAdornment position="start">
                                <FaSearch />
                                {/* <FontAwesomeIcon icon={solid('magnifying-glass')} /> */}
                            </InputAdornment>
                        ),
                    }} 
                />
                <Box>
                    
                </Box>
            </Grid>
        </Paper>
    );
}
 
export default RightSidebar;