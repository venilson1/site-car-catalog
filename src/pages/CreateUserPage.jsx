import React, { forwardRef, useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, Snackbar } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import MuiAlert from '@mui/material/Alert';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/venilson1/">
                Venilson Santos
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function CreateUserPage() {

    const { create } = useContext(AuthContext);

    const [openSnack, setOpenSnack] = useState(false);
    const [statusError, setStatusError] = useState("");

    const handleClickSnack = () => {
        setOpenSnack(true);
    };

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnack(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('username');
        const email = data.get('email');
        const password = data.get('password');

        const response = await create(username, email, password);

        if(response){
            handleClickSnack();
            setStatusError(response);
        }
    };

  return (
    <Container component="main" maxWidth="xs">
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Typography component="h1" variant="h5">
            Criar Usuário
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                type="email"
                value={"verzel@verzel.com"}
                sx={{display: 'none'}}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                id="password"
                type="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Criar
            </Button>
        </Box>
    </Box>
    <Copyright sx={{ mt: 8, mb: 4 }} />
    <Snackbar open={openSnack} autoHideDuration={15000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
            {statusError} || ex.: <strong>Verzel@1234</strong>
        </Alert>
      </Snackbar>
    </Container>
  )
}
