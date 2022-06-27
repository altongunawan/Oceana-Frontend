import { Box, Divider } from '@mui/material'
import MessageListItem from './MessageListItem';

const Comment = (props) => {
    
    return ( 
        <Box>
            <Box sx={{ p: 1, px: 3 }}>
                <MessageListItem img_url={props.img_url} name={props.name} content={props.content} />
            </Box>
            <Divider />
        </Box>
    );
}
 
export default Comment;