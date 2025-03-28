import { Box, Grid, Skeleton } from '@mui/material';

import '../../styles/detailSkeleton.scss';

export const DetailSkeleton = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
      <Skeleton variant='rounded' width={300} height={450} />
      <Grid width={'50%'} sx={{ mx: 2 }}>
        <Skeleton className='skeleton' variant='rounded' width={'100%'} height={42} />
        <Skeleton className='skeleton' variant='rounded' width={'100%'} height={28} />
        <Skeleton className='skeleton' variant='rounded' width={'100%'} height={14} />
        <Grid display={'flex'} direction={'row'}>
          <Skeleton className='chipSkeleton' variant='rounded' width={84} height={32} />
          <Skeleton className='chipSkeleton' variant='rounded' width={84} height={32} />
          <Skeleton className='chipSkeleton' variant='rounded' width={84} height={32} />
        </Grid>
        <Grid mt={1}>
          <Skeleton className='skeleton' variant='rounded' width={'100%'} height={24} />
          <Skeleton className='skeleton' variant='rounded' width={'100%'} height={24} />
          <Skeleton className='skeleton' variant='rounded' width={'100%'} height={24} />
          <Skeleton className='skeleton' variant='rounded' width={'100%'} height={24} />
          <Skeleton className='skeleton' variant='rounded' width={'100%'} height={24} />
          <Skeleton className='skeleton' variant='rounded' width={'100%'} height={24} />
        </Grid>
        <Grid mt={2}>
          <Skeleton className='skeleton' variant='rounded' width={'50%'} height={20} />
          <Skeleton className='skeleton' variant='rounded' width={'50%'} height={20} />
          <Skeleton className='skeleton' variant='rounded' width={'50%'} height={20} />
          <Skeleton className='skeleton' variant='rounded' width={'50%'} height={20} />
        </Grid>
        <Grid mt={2}>
          <Skeleton className='skeleton' variant='rounded' width={'50%'} height={32} />
        </Grid>
      </Grid>
    </Box>
  );
};
