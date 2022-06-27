import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

const FriendCard = (props) => {
    return (  
        <Card>
            <CardMedia 
                component="img"
                height="150"
                image=""
            />
            <CardContent>
                <Typography variant="body" sx={{ fontFamily: 'Comfortaa' }}>Nama</Typography>
            </CardContent>
            <CardActions>
                <Button 
                    variant="contained" 
                    sx={{ fontFamily: 'Comfortaa', backgroundColor: '#4062BB', borderRadius: 0, fontSize: 14, textTransform: 'capitalize' }}
                    disableElevation
                    fullWidth
                >
                    Tambah Teman
                </Button>
            </CardActions>
        </Card>
    );
}
 
export default FriendCard;