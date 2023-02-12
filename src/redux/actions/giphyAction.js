/* eslint-disable radix */
import {axiosRequestHandler} from '../../api';
import {
  API_FAILURE,
  API_LIST_END,
  API_SUCCESS,
  GET_GIPHY_CATEGORIES,
  GET_GIPHY_SEARCH_SUGGESTIONS,
  TYPE_OF_GIF_API,
} from '../types';

export const getFilteredGiphyAction = _params => {
  try {
    return async dispatch => {
      dispatch({
        type: 'API_REQUEST',
        page: _params?.page,
      });

      let limit = 5;
      let values = '';
      let offset = parseInt(_params?.page - 1) * limit;

      let common_url = `limit=${limit}&offset=${offset}`;

      let url = `/trending?${common_url}`;

      if (_params) {
        if (_params?.type === 'category') {
          url = `/categories/${_params?.values.category}?${common_url}`;
          values = _params?.values.category;
        }
        if (_params?.type === 'search') {
          url = `/search?q=${_params?.values.searchTerm}&${common_url}`;
          values = _params?.values.searchTerm;
        }
      }

      const res = await axiosRequestHandler({method: 'get', url});

      if (res.data) {
        if (res.data?.length < 5) {
          dispatch({
            type: API_LIST_END,
            payload: true,
          });
          return;
        }

        dispatch({
          type: API_LIST_END,
          payload: false,
        });

        dispatch({
          type: API_SUCCESS,
          payload: res.data,
          page: _params?.page,
          values,
        });
      } else {
        console.log('Unable to fetch');
        dispatch({
          type: API_FAILURE,
          payload: res.data,
          values,
        });
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error, 'error');
  }
};

export const getGiphyCategoriesActon = () => {
  try {
    return async dispatch => {
      const url = '/categories';
      const res = await axiosRequestHandler({method: 'get', url});
      if (res.data) {
        dispatch({
          type: GET_GIPHY_CATEGORIES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error, 'error');
  }
};

export const giphySuggestionsAction = searchQuery => {
  try {
    return async dispatch => {
      const url = `/channels/search?q=${searchQuery}&limit=10`;

      const res = await axiosRequestHandler({method: 'get', url});

      if (res.data) {
        dispatch({
          type: GET_GIPHY_SEARCH_SUGGESTIONS,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error, 'error');
  }
};

export const selectFilterTypeAction = type => {
  try {
    return async dispatch => {
      dispatch({
        type: TYPE_OF_GIF_API,
        payload: type,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error, 'error');
  }
};
