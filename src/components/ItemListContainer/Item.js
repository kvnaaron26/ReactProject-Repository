import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Item ({ item }) {
    return (
        <Card sx={{ maxWidth: 400 }}>

        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>

        <CardActions>
            <Button size="small">Comprar</Button>
            <Button size="small">Añadir al Carrito</Button>
        </CardActions>
        </Card>
    );
};

export default Item;