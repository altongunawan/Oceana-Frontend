import { Container, Typography, Box, List } from '@mui/material'
import { useAuth } from '../../context/authContext'
import { useEffect } from 'react';

import MessageListItem from '../../components/MessageListItem'
import Post from '../../components/Post';

const Bookmark = () => {

    const { authData, getUserBookmark }  =  useAuth()

    useEffect(() => {
        console.log("Email: ", authData.user.email_address)
        getUserBookmark(authData.user.email_address)
        console.log("Bookmark Data : ", authData.bookmark_data)
    }, [])
    
    return (  
        <Container sx={{ py: 3 }}>
            <Box sx={{ px: 4 }}>
                <Typography variant="h5" sx={{ fontFamily: 'Comfortaa' }}>Bookmark</Typography>
                <Box sx={{ py: 3 }}>
                    {
                        authData.bookmark_data && 
                        authData.bookmark_data.map((val) => {
                            if (val) {
                                return (
                                    <Post nama={val.nama} id={val.post_id} content={val.content} like={
                                        val.like && val.like.length != null ? val.like.length : ''
                                    } />
                                )
                            }
                        }).filter(e => e)
                    }
                </Box>
            </Box>
        </Container>
    );
}
 
export default Bookmark;