import { List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar, Divider, Typography } from '@mui/material'

const MessageListItem = (props) => {
    return (  
        <>
            <ListItem alignItems="flex-start" sx={{ p: 0, m: 0, mt: 1 }}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={props.img_url} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography sx={{ fontFamily: 'Comfortaa' }}>
                            {props.name}
                        </Typography>
                    }
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline', fontFamily: 'Comfortaa' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {props.content}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
        </>
    );
}
 
export default MessageListItem;