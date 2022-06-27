import { Grid, Button, IconButton, Divider, Modal, Box, Typography, Stack } from '@mui/material'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Sidebar = () => {

    const [modalLogOut, setModalLogOut] = useState(false);
    const handleModalLogOut = () => setModalLogOut(true);
    const handleCloseModalLogOut = () => setModalLogOut(false);

    const { authData, logout }  =  useAuth()
    const navigate = useNavigate()

    const onClickLogout = (event) => { 
        logout()
    }

    useEffect(() => {
        if (!authData.user) {
            navigate("/user/login", { replace: true });
        }
    }, [authData])

    return ( 
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ py: 2 }}
            >
                <Grid item>
                    <Link to="/user/homepage">
                        <IconButton sx={{ py: 2, px: 2, borderRadius: '16px' }} aria-label="delete">
                            <FontAwesomeIcon icon={solid('message')} style={{ color: '#4062BB', fontSize: 16 }} />
                        </IconButton>
                    </Link>
                    <Divider />
                </Grid>
                <Grid item sx={{ pt: 2 }}>
                    <Link to="/user/homepage">
                        <IconButton sx={{ py: 2, px: 2, borderRadius: '16px' }} aria-label="delete">
                            <FontAwesomeIcon icon={solid('house')} style={{ color: 'lightgray', fontSize: 16 }} />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/user/friend">
                        <IconButton sx={{ py: 2, px: 2, borderRadius: '16px' }} aria-label="delete">
                            <FontAwesomeIcon icon={solid('user-group')} style={{ color: 'lightgray', fontSize: 16 }} />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/user/message">
                        <IconButton sx={{ py: 2, px: 2, borderRadius: '16px' }} aria-label="delete">
                            <FontAwesomeIcon icon={solid('message')} style={{ color: 'lightgray', fontSize: 16 }} />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/user/notification">
                        <IconButton sx={{ py: 2, px: 2, borderRadius: '16px' }} aria-label="delete">
                            <FontAwesomeIcon icon={solid('bell')} style={{ color: 'lightgray', fontSize: 16 }} />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/user/bookmark">
                        <IconButton sx={{ py: 2, px: 2, borderRadius: '16px' }} aria-label="delete">
                            <FontAwesomeIcon icon={solid('bookmark')} style={{ color: 'lightgray', fontSize: 16 }} />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/user/setting">
                        <IconButton sx={{ py: 2, px: 2, borderRadius: '16px' }} aria-label="delete">
                            <FontAwesomeIcon icon={solid('gear')} style={{ color: 'lightgray', fontSize: 16 }} />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item>
                    <IconButton sx={{ py: 2, px: 2, borderRadius: '16px' }} aria-label="delete" onClick={handleModalLogOut}>
                        <FontAwesomeIcon icon={solid('arrow-right-from-bracket')} style={{ color: 'lightgray', fontSize: 16 }} />
                    </IconButton>
                </Grid>
            </Grid>
            <Modal
                open={modalLogOut}
                onClose={handleCloseModalLogOut}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    p: 3
                }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography sx={{ fontFamily: 'Comfortaa' }} variant="h6" component="h2">
                            Keluar dari Oceana
                        </Typography>
                        <IconButton aria-label="close-modal" onClick={handleCloseModalLogOut}>
                            <FontAwesomeIcon icon={solid('xmark')} style={{ color: 'gray', fontSize: 16 }} />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Typography sx={{ mt: 2, fontFamily: 'Comfortaa', fontSize: 14 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >
                            <Button onClick={onClickLogout} variant="contained" sx={{ borderRadius: 0, textTransform: 'capitalize', fontFamily: 'Comfortaa', backgroundColor: '#4062BB' }} disableElevation>Keluar Akun</Button>
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
 
export default Sidebar;