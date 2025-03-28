import { useNavigate, useParams } from 'react-router';

import { ArrowBack } from '@mui/icons-material';
import { Box, Chip, Container, Grid, IconButton, Typography } from '@mui/material';

import { useGetMoviesByImdbIDQuery } from '../../store/api/omdbApi';
import '../../styles/detail.scss';
import { DetailSkeleton } from '../molecules/DetailSkeleton';

export const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params['id']! satisfies string;
  const { data, isLoading } = useGetMoviesByImdbIDQuery({ imdbID: id });

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container className='contentContainer' maxWidth='md'>
      <IconButton color='primary' onClick={handleGoBack} sx={{ mb: 2 }}>
        <ArrowBack />
      </IconButton>
      {!data || isLoading ? (
        <DetailSkeleton />
      ) : (
        <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
          <Box
            component='img'
            sx={{
              width: { xs: '100%', md: 300 },
              height: 450,
              objectFit: 'contain',
              borderRadius: 2,
            }}
            src={data.Poster}
            alt={data.Title}
          />
          <Grid sx={{ mx: 2 }}>
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
            <Typography variant='body2' color='text.secondary' sx={{ mt: 2 }}>
              <b>Director:</b> {data.Director}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <b>Writer:</b> {data.Writer}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <b>Stars:</b> {data.Actors}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <b>Country:</b> {data.Country}
            </Typography>
            <Typography variant='body1' sx={{ mt: 2 }}>
              IMDb Rating: {data.imdbRating}⭐ ({data.imdbVotes} votes)
            </Typography>
          </Grid>
        </Box>
      )}
    </Container>
  );
};
