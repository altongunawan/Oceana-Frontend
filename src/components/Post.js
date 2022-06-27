import { Card, CardContent, Stack, Box, Typography, CardActions, Button, Modal, TextField, Divider, Grid, Menu, MenuItem, IconButton } from '@mui/material'
import { FiMessageSquare, FiThumbsUp } from "react-icons/fi";
import { FaEllipsisV } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext'

import Comment from './Comment'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Post = ({ id, comment_arr, email_address, nama, content, like }) => {

    const [bookmark, setBookmark] = useState(false);
    const [menuItem, setMenuItem] = useState(false);
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [contentC, setContentC] = useState('')

    const { authData, postingLike, bookmarkPost, addFriend, postComment } = useAuth()

    const onClickPost = (e) => {
        // console.log("Comment E : ", authData.post_data)
        console.log('ContentC : ', contentC)
        postComment(id, email_address, nama, contentC)
    }

    const handlingChange = (e) => setContentC(e.target.value)

    const openMenuItem = Boolean(anchorEl)

    useEffect(() => {
        console.log("Comment Arr : ", comment_arr)
    }, [])

    const handleOpenModal = () => setOpen(true)
    const handleCloseModal = () => setOpen(false)

    const handleOpenComment = () => setComment(!comment);

    const handleAnchorEl = (e) => setAnchorEl(e.currentTarget)

    const handleCloseAnchorEl = () => setAnchorEl(null)
    
    const handleSetBookmark = (e) => {
        handleBookmark(e.currentTarget.id, authData.user.email_address)
        setAnchorEl(null)
    }

    const handleLike = (e) => { 
        postingLike(e.currentTarget.id, authData.user.email_address) 
    }

    const handleAddFriend = (e) => {
        console.log("Email : ", authData.user.email_address, email_address)
        addFriend(authData.user.email_address, email_address)
    }

    const handleBookmark = (e) => { 
        bookmarkPost(e.currentTarget.id, authData.user.email_address) 
    }

    const handleComment = (e) => { e.preventDefault() }

    // useEffect(() => {
    //     console.log('Reload')
    // }, [like])

    return (  
        <>
            <Card elevation={0} sx={{ my: 2, border: 1, borderRadius: 1, borderColor: 'lightgray' }} fullWidth>
                <CardContent sx={{ px: 3 }}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                        <Typography sx={{ fontFamily: 'Comfortaa', fontWeight: 'bold' }}> { nama } </Typography>
                        <Box>
                            <IconButton onClick={handleAnchorEl}>
                                <FaEllipsisV style={{ color: 'gray', fontSize: 16 }} />
                                {/* <FontAwesomeIcon icon={solid('ellipsis-vertical')} style={{ color: 'gray', fontSize: 16 }} /> */}
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={openMenuItem}
                                onClose={handleCloseAnchorEl}
                            >
                                <MenuItem email_address={email_address} id={id} onClick={handleAddFriend} sx={{ fontFamily: 'Comfortaa' }}>Add Friend</MenuItem>
                                {
                                    bookmark ?
                                    <MenuItem id={id} onClick={handleBookmark} sx={{ fontFamily: 'Comfortaa' }}>Remove from Bookmark</MenuItem> :
                                    <MenuItem id={id} onClick={handleBookmark} sx={{ fontFamily: 'Comfortaa' }}>Bookmark</MenuItem>
                                }
                                
                            </Menu>
                        </Box>
                    </Stack>
                    <Box>
                        <Typography 
                            sx={{ 
                                fontFamily: 'Comfortaa',
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 3
                            }}
                        >
                            { content }
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Stack
                        sx={{ width: '100%', px: 1 }}
                        direction="row"
                        justifyContent="space-between"
                    >
                        <Button onClick={handleOpenComment}>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={2}
                            >
                                <FiMessageSquare />
                                <Typography sx={{ fontFamily: 'Comfortaa', fontSize: 14, textTransform: 'capitalize' }}>
                                    { comment_arr && comment_arr.length != null ? comment_arr.length : '' } Comment
                                </Typography>
                            </Stack>
                        </Button>
                        <Typography>
                            <Button id={id} onClick={handleLike}>
                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <FiThumbsUp />
                                    <Typography sx={{ fontFamily: 'Comfortaa' }}>{ like }</Typography>
                                </Stack>
                            </Button>
                        </Typography>
                    </Stack>
                </CardActions>
                <Divider />
                <Box>
                    {/* Posting Comment */}
                    <Box>
                        <Box sx={{ p: 1, px: 3 }}>
                            <Grid 
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                                columns={22}
                            >
                                <Grid item xs={18}>
                                    <TextField
                                        value={contentC}
                                        onChange={handlingChange} 
                                        size="small" variant="outlined" placeholder="Komentar Anda" sx={{ fontFamily: 'Comfortaa', width: '100%' }} 
                                        InputProps={{ style: { fontFamily: 'Comfortaa' }}} 
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack
                                        direction="row"
                                        justifyContent="flex-end"
                                    >
                                        <Button variant="contained" onClick={onClickPost} sx={{ backgroundColor: '#4062BB', ms: 'auto', borderRadius: 0, fontFamily: 'Comfortaa', fontSize: 12, textTransform: 'capitalize', mx: 'auto' }} disableElevation>Add Comment</Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />
                    </Box>
                    {/* Comment Components */}
                    {
                        comment_arr &&
                        comment_arr.map((e) => {
                            return (
                                e.content &&
                                <Comment img_url="" name={e.nama} content={e.content} />
                            )
                        })
                    }
                </Box>
            </Card>
            <Modal
                open={open}
                onClose={handleCloseModal}
            >
                <Box sx={{ p: 3 }} style={{ position: 'absolute', top: '50%', left: '50%', width: 500, backgroundColor: 'white', transform: 'translate(-50%, -50%)', borderRadius: '5px' }}>
                    <Typography variant="h6" component="h2" sx={{ fontFamily: 'Comfortaa' }}>
                        Komentar Anda
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <TextField 
                            placeholder="Komentar Anda"
                            variant="outlined" 
                            multiline
                            rows={3}
                            InputProps={{ style: { fontFamily: 'Comfortaa' }}} 
                            sx={{ mb: 2 }}
                            fullWidth
                        />
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >
                            <Button variant="contained" sx={{ fontFamily: 'Comfortaa', textTransform: 'capitalize', backgroundColor: '#043565' }}>Kirim</Button>
                        </Stack>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}
 
export default Post;