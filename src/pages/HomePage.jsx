import {  Card, CardContent, CardMedia, CssBaseline, Pagination, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import MenuAppBar from '../components/MenuAppBar'
import { getCars } from '../services/api';
import FormatPrice from '../utils/FormatPrice';

export default function HomePage() {

    const [cars, setCars] = useState([]);
    const [countPage, setCountPage] = useState(1);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const handlePage = (event, value) => {
        setPage(value);
      };

    useEffect(() => {
        (async () => {
            
            const response = await getCars(page - 1);
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
                                        {el.name} {el.brand} {el.model}
                                    </Typography>

                                        <Typography >{FormatPrice(el.price)}</Typography>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={2}>
                <Pagination count={countPage + 1} page={page} color="secondary" onChange={handlePage} sx={{ p: 4 }} />
            </Stack>
            </Box>
        </Container>
        
    </Box>
  )
}
