import * as React from "react";
import "./ItemDetail.css";

//Components
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

function ItemDetailContainer() {
  return (
    <Card className="CardContainer">
      <div className="CardTitle">
        <Typography gutterBottom variant="h7" component="div">
          Xiaomi Mi 11 Ultra
        </Typography>
      </div>

      <div className="CardImg">
        <CardMedia
          component="img"
          image="https://falabella.scene7.com/is/image/FalabellaPE/18240058_1?wid=800&hei=800&qlt=70"
        />
      </div>

      <div className="CardContent">
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Cuerpo cerámico, minipantalla secundaria y zoom 120x para el móvil
            más avanzado de Xiaomi
          </Typography>
        </CardContent>
      </div>

      <div className="CardButton">
        <CardActions className="Buttons">
          <Button size="lg">Comprar</Button>
          <Button size="lg">Añadir al Carrito</Button>
          <Button size="lg">Guardar</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default ItemDetailContainer;
