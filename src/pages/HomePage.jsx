import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Pagination, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import MenuAppBar from '../components/MenuAppBar'

export default function HomePage() {
  return (
    <>
        <CssBaseline />
        <Box>
            <MenuAppBar/>
            <Container>
                <Box sx={{ p: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Card sx={{ maxWidth: 300, m: 2 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Carrro Alguma coisa
                            </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <Typography variant="h4" component="span" color="primary">100.000</Typography>
                                <Typography variant="h6" component="span">R$</Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 300, m: 2 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Carrro Alguma coisa
                            </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <Typography variant="h4" component="span" color="primary">100.000</Typography>
                                <Typography variant="h6" component="span">R$</Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 300, m: 2 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Carrro Alguma coisa
                            </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <Typography variant="h4" component="span" color="primary">100.000</Typography>
                                <Typography variant="h6" component="span">R$</Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 300, m: 2 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Carrro Alguma coisa
                            </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <Typography variant="h4" component="span" color="primary">100.000</Typography>
                                <Typography variant="h6" component="span">R$</Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 300, m: 2 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Carrro Alguma coisa
                            </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <Typography variant="h4" component="span" color="primary">100.000</Typography>
                                <Typography variant="h6" component="span">R$</Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 300, m: 2 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Carrro Alguma coisa
                            </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <Typography variant="h4" component="span" color="primary">100.000</Typography>
                                <Typography variant="h6" component="span">R$</Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination count={10} color="secondary" sx={{ p: 4 }} />
                </Box>
            </Container>
            
        </Box>
    </>
  )
}
