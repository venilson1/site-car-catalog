import React from 'react';
import { Box, Container } from '@mui/system';
import { Button, CssBaseline } from '@mui/material';
import MenuAppBar from '../components/MenuAppBar';
import AddIcon from '@mui/icons-material/Add';

export default function DashboardPage() {
  return (
    <Box>
    <CssBaseline />
        <MenuAppBar/>
        <Container>
            <Box sx={{ m: 2 }}>
                <Button variant="contained" color="success" endIcon={<AddIcon />}>Criar</Button>
            </Box>
        </Container>
    </Box>
  )
}
