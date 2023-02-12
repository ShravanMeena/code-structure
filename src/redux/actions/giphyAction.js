import {axiosRequestHandler} from '../../api';
import {
  API_FAILURE,
  API_LIST_END,
  API_SUCCESS,
  GET_GIPHY_CATEGORIES,
  GET_GIPHY_SEARCH_SUGGESTIONS,
  TYPE_OF_GIF_API,
} from '../types';

// get all type of gif by filter :: this is a common where we can call api with various conditions
export const getFilteredGiphyAction = _params => {
  try {
    return async dispatch => {
      dispatch({
        type: 'API_REQUEST',
        page: _params?.page,
      });

      let limit = 5; // how many data you want at a time
      let valuesForStore = ''; // this is for save some value like search term so we can use in pagination
      let offset = parseInt(_params?.page - 1) * limit;

      // the url for every api's end :: main use case of this is paass limit and offset
      let common_url = `limit=${limit}&offset=${offset}`;

      // api for trending gif
      let url = `/trending?${common_url}`;

      if (_params) {
        let {type, values} = _params;

        // if this block execude means we need GIF with some category
        if (type === 'category') {
          url = `/categories/${values.category}?${common_url}`;
          valuesForStore = values.category;
        }

        // if this block execude means we need GIF with search query
        if (type === 'search') {
          url = `/search?q=${values.searchTerm}&${common_url}`;
          valuesForStore = _params?.values.searchTerm;
        }
      }

      const res = await axiosRequestHandler({method: 'get', url});

      if (res.data) {
        // if response of data is less than our limit then we stop pagination
        if (res.data?.length < limit) {
          dispatch({
            type: API_LIST_END,
            payload: true,
          });
          return;
        }

        // always set false so we continue calling our apis
        dispatch({
          type: API_LIST_END,
          payload: false,
        });

        dispatch({
          type: API_SUCCESS,
          payload: res.data,
          page: _params?.page,
          values: valuesForStore,
        });
      } else {
        console.log('Unable to fetch');
        dispatch({
          type: API_FAILURE,
          payload: res.data,
          values: valuesForStore,
        });
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error, 'error');
  }
};

// get api call for get Types of category
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

// if we want to show some suggestion to user :then we use it
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

// it is define for which api we calll...example: -- : TYPE:SEARCH_API, CATEGORY_API, TRENDING_API
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
