import { Grid, Container, TextField, Button, Typography, Box, Card, CardContent, CardActions, Stack, Modal } from '@mui/material'
import { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import { useAuth } from '../../context/authContext'

import Post from '../../components/Post';

const Homepage = () => {

    const { authData, userPosting, loadUserPosting }  =  useAuth()

    useEffect(() => {
        console.log("Post Data : ", authData.post_data)
        loadUserPosting()
    }, [])

    const formik = useFormik({
        initialValues: {
            post: ''
        },
        onSubmit: values => {
            userPosting(authData.user.nama, authData.user.email_address, values.post)
        },
    });

    return (  
        <>
            <Container sx={{ py: 3 }}>
                <Box sx={{ px: 4 }}>
                    <Box sx={{ p: 3, backgroundColor: 'white', border: 1, borderRadius: 1, borderColor: 'lightgray' }}>
                        <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                            <form onSubmit={formik.handleSubmit} style={{ flex: 1, width: '100%' }}>
                                <Grid item xs={12} sx={{ mb: 2 }}>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        multiline
                                        rows={3}
                                        name="post"
                                        placeholder="Apa yang ingin anda posting hari ini?"
                                        value={formik.values.post}
                                        onChange={formik.handleChange}
                                        InputProps={{ style : { fontFamily: 'Comfortaa' }}}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                                    <Button type="submit" variant="contained" sx={{ textTransform: 'capitalize', fontFamily: 'Comfortaa', borderRadius: 0, backgroundColor: '#4062BB' }} size="medium" disableElevation>Post</Button>
                                </Grid>
                            </form>
                        </Grid>
                    </Box>
                    <Box sx={{ py: 3 }}>
                        {
                            authData.post_data && 
                            authData.post_data.map((val) => {
                                return (
                                    <Post comment_arr={val.comment} email_address={val.email_address} nama={val.nama} id={val.post_id} content={val.content} like={val.like.length} />
                                )
                            })
                        }
                    </Box>
                </Box>
            </Container>
        </>
    );
}
 
export default Homepage;