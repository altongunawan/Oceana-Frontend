import { Typography, Grid, Paper, TextField, InputAdornment } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

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
                                <FontAwesomeIcon icon={solid('magnifying-glass')} />
                            </InputAdornment>
                        ),
                    }} 
                />
            </Grid>
        </Paper>
    );
}
 
export default RightSidebar;