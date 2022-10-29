import React from 'react';
import { Box, Container } from '@mui/system';
import { CssBaseline } from '@mui/material';
import MenuAppBar from '../components/MenuAppBar';

import DataTable from '../components/DataTable';

export default function DashboardPage() {
  return (
    <Box>
    <CssBaseline />
        <MenuAppBar/>
        <Container>
              <DataTable/>
        </Container>
    </Box>
  )
}
