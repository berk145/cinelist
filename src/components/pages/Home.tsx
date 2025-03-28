import { useMemo, useState } from 'react';

import { Button, Container, Grid, Pagination, TextField, Typography } from '@mui/material';

import { useGetMoviesByTitleQuery } from '../../store/api/omdbApi';
import '../../styles/home.scss';
import { Select } from '../atoms/Select';
import { CardSkeleton } from '../molecules/CardSkeleton';
import { MovieCard } from '../organisms/MovieCard';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('Pokemon');
  const [page, setPage] = useState(1);
  const [type, setType] = useState<SelectComponentValue | undefined>(undefined);
  const [year, setYear] = useState<string | undefined>(undefined);

  const [name, setName] = useState(searchTerm);
  const [yearText, setYearText] = useState<string | undefined>(undefined);
  const [selectedType, setSelectedType] = useState<SelectComponentValue>({
    label: 'All',
    value: 'all',
  });

  const { data, error, isLoading } = useGetMoviesByTitleQuery({
    searchTerm,
    page,
    year,
    type: type ? type.value.toString() : undefined,
  });

  const pageCount = useMemo(() => data && Math.ceil(parseInt(data.totalResults) / 10), [data]);

  const onSearch = () => {
    setSearchTerm(name);

    if (yearText === '') {
      setYear(undefined);
      setYearText(undefined);
    } else if (yearText && yearText?.length > 0) {
      setYear(yearText);
    }

    if (selectedType.value === 'all') {
      setType(undefined);
    } else {
      setType(selectedType);
    }
  };

  if (error) {
    return (
      <Container maxWidth='md'>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Typography variant='h5' color='warning'>
            Something went wrong
          </Typography>
        </Grid>
      </Container>
    );
  }

  const tempList = new Array(10).fill(0); // To fill the page with skeletons

  return (
    <Container className='contentContainer' maxWidth='md'>
      <Grid container justifyContent={'center'} spacing={2}>
        <TextField
          label='Search by name'
          value={name}
          onChange={(value: React.ChangeEvent<HTMLInputElement>) => setName(value.target.value)}
          variant='outlined'
          size='small'
          disabled={isLoading}
        />
        <TextField
          value={yearText}
          onChange={(value: React.ChangeEvent<HTMLInputElement>) => setYearText(value.target.value)}
          label='Search by year'
          variant='outlined'
          size='small'
          disabled={isLoading}
        />
        <Select
          onValueChanged={(value) => setSelectedType(value)}
          selectableValues={SearchTypes}
          value={selectedType}
          size='small'
          disabled={isLoading}
        />
        <Button onClick={onSearch} variant='outlined' size='small' disabled={isLoading}>
          Search
        </Button>
      </Grid>
      <Grid container alignContent={'center'} spacing={4} pt={2}>
        {isLoading
          ? tempList.map((_, index) => (
              <Grid key={index} display={'flex'} justifyContent={'center'} size={{ xs: 12, md: 6 }}>
                <CardSkeleton />
              </Grid>
            ))
          : data &&
            data.Response !== 'False' &&
            data.Search.map((item) => (
              <Grid
                key={item.imdbID}
                display={'flex'}
                justifyContent={'center'}
                size={{ xs: 12, md: 6 }}
              >
                <MovieCard data={item} />
              </Grid>
            ))}
      </Grid>
      <Grid className='paginationContainer'>
        {pageCount && (
          <Pagination
            page={page}
            count={pageCount}
            onChange={(_, newPage) => setPage(newPage)}
            variant='outlined'
          />
        )}
      </Grid>
    </Container>
  );
};

const SearchTypes: SelectComponentValue[] = [
  { label: 'All', value: 'all' },
  {
    label: 'Movie',
    value: 'movie',
  },
  {
    label: 'Series',
    value: 'series',
  },
  {
    label: 'Episode',
    value: 'episode',
  },
];
