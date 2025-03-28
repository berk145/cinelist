import { useNavigate } from 'react-router';

import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import '../../styles/movieCard.scss';

interface IProps {
  data: Search;
}

export const MovieCard = ({ data }: IProps) => {
  const { Title, Type, Poster, Year, imdbID } = data;
  const navigate = useNavigate();
  const cardOnClick = () => {
    navigate(`${imdbID}/detail`);
  };

  return (
    <Card sx={{ maxWidth: 345, width: '100%' }} onClick={cardOnClick} className='movieCard'>
      <CardActionArea>
        <CardMedia
          component='img'
          sx={{ objectFit: 'contain' }}
          alt={Title}
          height='240'
          image={Poster}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {Title}
          </Typography>
          <Grid>
            <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'baseline'} gap={2}>
              <Typography variant='body2' color='text.disabled'>
                {Year}
              </Typography>
              <Typography variant='body2' textTransform='capitalize' color='text.disabled'>
                {Type}
              </Typography>
            </Grid>
            <Typography variant='overline' color='text.disabled'>
              {imdbID}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
