import { Container, Typography, Box, List, Grid } from '@mui/material'
import FriendCard from '../../components/FriendCard'

const Friend = () => {
    return (  
        <Container sx={{ p: 0, m: 0, py: 3  }}>
            <Typography variant="h5" sx={{ fontFamily: 'Comfortaa', mb: 3 }}>Friends</Typography>
            <Box>
                <Grid container>
                    <Grid item xs={3} sx={{ p: 2 }}>
                        <FriendCard />
                    </Grid>
                    <Grid item xs={3} sx={{ p: 2 }}>
                        <FriendCard />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
 
export default Friend;