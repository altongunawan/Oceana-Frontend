import { Grid, Container, Box } from '@mui/material'

const AuthenticationLayout = ({ children }) => {
    return (  
        <Container sx={{ height: '100%', m: 0 }} disableGutters>
            <Box sx={{ height: '100%', m: 0 }}>
                {children}
            </Box>
        </Container>
    );
}

export default AuthenticationLayout;