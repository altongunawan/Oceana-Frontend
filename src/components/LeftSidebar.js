import { Container, Typography, List } from '@mui/material'
import MessageListItem from './MessageListItem'

const LeftSidebar = () => {
    return ( 
        <Container sx={{ p: 0, m: 0, py: 2 }}>
            <Typography variant="h6" sx={{ fontFamily: 'Comfortaa', mb: 3, color: '#4062BB' }}>Message</Typography>
            <List sx={{ m: 0, p: 0 }}>
                <MessageListItem img_url="" name="John Doe" content="I'll be in your neighborhood doing ..." />
                <MessageListItem img_url="" name="John Doe" content="I'll be in your neighborhood doing ..." />
            </List>
        </Container>
    );
}
 
export default LeftSidebar;