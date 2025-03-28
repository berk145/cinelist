import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Skeleton } from '@mui/material';

import '../../styles/cardSkeleton.scss';

export const CardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 345, width: '100%' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia className='cardMediaSection' component={'div'}>
          <Skeleton variant='rounded' width={180} height={240} />
        </CardMedia>

        <CardContent>
          <Skeleton className='skeleton' variant='rounded' width={'100%'} height={32} />
          <Skeleton className='skeleton' variant='rounded' width={'100%'} height={32} />
          <Skeleton className='skeleton' variant='rounded' width={'100%'} height={14} />
          <Typography variant='caption' color='text.disabled'></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
