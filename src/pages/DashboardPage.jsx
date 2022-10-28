import React from 'react';
import { Box, Container } from '@mui/system';
import { CssBaseline } from '@mui/material';
import MenuAppBar from '../components/MenuAppBar';

import DataTable from '../components/DataTable';
import BasicModal from '../components/BasicModal';

export default function DashboardPage() {
  return (
    <Box>
    <CssBaseline />
        <MenuAppBar/>
        <BasicModal/>
        <Container>
              <DataTable/>
        </Container>
    </Box>
  )
}
