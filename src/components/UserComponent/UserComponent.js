import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserComponent = ({ data }) => {
  return (
    <Card style={{ margin: 40 }} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text-secondary">
          {data.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserComponent;
