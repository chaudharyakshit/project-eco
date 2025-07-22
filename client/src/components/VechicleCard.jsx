import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

const VehicleCard = ({ vehicle }) => {
  return (
    <Card className="vehicle-card">
      <CardMedia
        component="img"
        height="140"
        image={vehicle.images[0]}
        alt={`${vehicle.make} ${vehicle.model}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          ${vehicle.price.toLocaleString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {vehicle.mileage.toLocaleString()} mi • {vehicle.transmission}
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;