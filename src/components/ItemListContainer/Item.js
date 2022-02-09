import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Item() {
    return (
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image='https://i.blogs.es/0e991d/mi-11-ultra/450_1000.jpg'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Xiaomi Mi 11 Ultra
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Cuerpo cerámico, minipantalla secundaria y zoom 120x para el móvil más avanzado de Xiaomi
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Comprar</Button>
                <Button size="small">Ver más...</Button>
            </CardActions>
            </Card>
    );
}

export default Item;
