import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './MovieCard.scss';

type Props = {
  movie: Movie;
};

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const [description, setDescription] = useState(movie.description);

  if (description.length > 300) {
    const newDescription = description.slice(0, 297).split(' ').slice().join(' ');

    setDescription(`${newDescription}...`);
  }

  return (
    <Card className="MovieCard">
      <CardMedia
        component="img"
        height="140"
        image={movie.imgUrl}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography sx={{ height: 115 }} variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
