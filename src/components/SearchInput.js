import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

// actions and selectors
import {
  getFilteredGiphyAction,
  selectFilterTypeAction,
} from '../redux/actions/giphyAction';

// ui - components
import {Container, Input} from '../ui';

// custom hooks
import {useDebounce} from '../hooks';

export default function SearchInput() {
  const dispatch = useDispatch();

  // Search term
  const [searchTerm, setSearchTerm] = useState('');

  // theme colors
  const {colors} = useTheme();

  // Debounce search term so that it only gives us latest value ...
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearchChange = async () => {
    dispatch(selectFilterTypeAction('search'));
    dispatch(
      getFilteredGiphyAction({type: 'search', values: {searchTerm}, page: 1}),
    );
  };

  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        handleSearchChange(debouncedSearchTerm).then(results => {});
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedSearchTerm], // Only call effect if debounced search term changes
  );

  return (
    <Container>
      <Input setValue={e => setSearchTerm(e)} placeholder="Search GIPHY" />
    </Container>
  );
}
