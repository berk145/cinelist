import { useNavigate } from 'react-router';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

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
    <Card sx={{ maxWidth: 345, width: '100%' }} onClick={cardOnClick}>
      <CardActionArea className='cardActionArea'>
        <CardMedia
          component='img'
          sx={{ objectFit: 'contain' }}
          alt={Title}
          height='240'
          image={Poster}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {Title}
          </Typography>
          <Typography variant='h6' gutterBottom>
            {Year}
            <Typography variant='caption' sx={{ color: 'text.disabled' }} ml={2}>
              {Type}
            </Typography>
          </Typography>
          <Typography variant='caption' sx={{ color: 'text.disabled' }}>
            {imdbID.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
