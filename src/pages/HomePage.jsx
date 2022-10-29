import {  Card, CardContent, CardMedia, CssBaseline, Pagination, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import MenuAppBar from '../components/MenuAppBar'
import { getCars } from '../services/api';

export default function HomePage() {

    const [cars, setCars] = useState([]);
    const [countPage, setCountPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const handlePage = (event, value) => {
        setPage(value);
      };

    useEffect(() => {
        (async () => {
            
            const response = await getCars(page);
            setCars(response.data.data);
            setCountPage(response.data.totalPage);
            setLoading(false);

        })();
    }, [page]);

  return (
    <Box>
        <CssBaseline />
        <MenuAppBar/>
        <Container>
            <Box sx={{ p: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    cars.map(el => {
                        return (
                            <Card sx={{ maxWidth: 300, m: 2 }} key={el.id}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={el.urlImage}
                                    alt={el.model}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {el.name}
                                    </Typography>
                                    <Typography gutterBottom variant="span" component="div">
                                        {el.brand} {el.model}
                                    </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        <Typography variant="h4" component="span" color="primary">{el.price}</Typography>
                                        <Typography variant="h6" component="span">R$</Typography>
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={2}>
                <Pagination count={countPage} page={page} color="secondary" onChange={handlePage} sx={{ p: 4 }} />
            </Stack>
            </Box>
        </Container>
        
    </Box>
  )
}
