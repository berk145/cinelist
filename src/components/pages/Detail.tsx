import { useNavigate, useParams } from 'react-router';

import { ArrowBack } from '@mui/icons-material';
import {
  Box,
  CardContent,
  CardMedia,
  Chip,
  Container,
  IconButton,
  Typography,
} from '@mui/material';

import { useGetMoviesByImdbIDQuery } from '../../store/api/omdbApi';

export const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params['id']! satisfies string;
  const { data, /* error,  */ isLoading } = useGetMoviesByImdbIDQuery({ imdbID: id });

  if (!data || isLoading) return <></>;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth='md' sx={{ mt: 4 }}>
      <IconButton color='primary' onClick={handleGoBack}>
        <ArrowBack />
      </IconButton>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        <CardMedia
          component='img'
          sx={{
            width: { xs: '100%', md: 300 },
            height: 450,
            objectFit: 'contain',
            borderRadius: 2,
          }}
          image={data.Poster}
          alt={data.Title}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant='h4' fontWeight='bold'>
            {data.Title}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            {data.Year} • {data.Rated} • {data.Runtime}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            Released Date: {data.Released}
          </Typography>

          <Box sx={{ my: 1 }}>
            {data.Genre.split(', ').map((genre) => (
              <Chip key={genre} label={genre} sx={{ mr: 1, mb: 1 }} color='primary' />
            ))}
          </Box>
          <Typography variant='body1' sx={{ mt: 2 }}>
            {data.Plot}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, color: 'text.secondary' }}>
            <b>Director:</b> {data.Director}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            <b>Writer:</b> {data.Writer}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            <b>Stars:</b> {data.Actors}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            <b>Country:</b> {data.Country}
          </Typography>
          <Typography variant='h6' sx={{ mt: 2 }}>
            IMDb Rating: {data.imdbRating} ⭐ ({data.imdbVotes} votes)
          </Typography>
        </CardContent>
      </Box>
    </Container>
  );
};
