
import { Grid, Button, Typography, TextField, Box, Stack } from '@mui/material'
import AuthenticationLayout from "../../layouts/authentication";
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs';
import { useFormik } from 'formik';

const Login = () => {    
    const { authData, authenticateUser } = useAuth();
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email_address: '',
            password: ''
        },
        onSubmit: values => {
            authenticateUser(values.email_address, values.password);
        },
    });
    
    useEffect(() => {
        if(authData.user) navigate("/user/homepage", { replace: true });
    }, [authData])

    return ( 
        <AuthenticationLayout>
            <Grid xs={12} sx={{ m: 0, p: 0, width: '100%', height: '100%' }} container>
                <Grid 
                    xs={12} md={6} 
                    sx={{ 
                        p: 0,
                        m: 0,
                        height: '100%',                         
                        backgroundImage: 'url(https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} 
                    item 
                />
                <Grid xs={12} md={6} sx={{ height: '100%', display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }} item>
                    <Box sx={{ flexDirection: 'column', width: '60%' }}>
                        <Typography variant="h4" sx={{ color: '#043565', fontFamily: 'Comfortaa', mb: 4 }}>Oceana</Typography>
                        <form onSubmit={formik.handleSubmit}>
                            <Box sx={{ mb: 2 }}>
                                <TextField 
                                    label="Email Address"
                                    type="email" 
                                    variant="outlined" 
                                    name="email_address"
                                    value={formik.values.email_address}
                                    onChange={formik.handleChange}
                                    InputLabelProps={{ style: { fontFamily: 'Comfortaa' }}}
                                    InputProps={{ style: { fontFamily: 'Comfortaa' }}}
                                    size="small"
                                    fullWidth 
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <TextField 
                                    label="Password" 
                                    type="password"
                                    variant="outlined" 
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    InputLabelProps={{ style: { fontFamily: 'Comfortaa' }}}
                                    InputProps={{ style: { fontFamily: 'Comfortaa' }}}
                                    size="small"
                                    fullWidth 
                                />
                            </Box>
                            <Button 
                                type="submit"
                                variant="contaied" 
                                sx={{
                                    mt: 1, 
                                    fontFamily: 'Comfortaa', 
                                    textTransform: 'capitalize', 
                                    backgroundColor: '#043565', 
                                    color: 'white',
                                    '&:hover' : {
                                        backgroundColor: '#02394A'
                                    }
                                }} 
                                fullWidth>
                                    Log In
                            </Button>
                        </form>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ mt: 1 }}
                        >
                            <Typography variant="subtitle2" sx={{ fontFamily: 'Comfortaa' }}>Don't have an account?</Typography>
                            <Link to="/user/register" variant="subtitle2" style={{ fontFamily: 'Comfortaa' }}>Register</Link>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </AuthenticationLayout>
    );
}
 
export default Login;