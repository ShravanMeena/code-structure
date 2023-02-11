import {
  GET_GIPHY_CATEGORIES,
  GET_GIPHY_SEARCH_SUGGESTIONS,
  TYPE_OF_GIF_API,
  API_SUCCESS,
  API_REQUEST,
  API_LIST_END,
  API_FAILURE,
} from '../types';

const initialState = {
  categoriesData: [], // all list of categories
  giphySuggestionsData: [], // someone type in input filed then if we want to show suggest some keyword to user

  loading: false,
  moreLoading: false,
  error: null,
  moreError: null,
  data: [], // gif data
  isListEnd: false,
  typeOfGif: 'trending', //this is the type of gif:: means which type of api we call for ex type is trending or by category or via search
  pageNumberFromStore: 1, // page number save in store so we can use infinite scrolliing
  lastQueryFromStore: '', //selected value like searchQuery and selected category
};

function giphyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GIPHY_CATEGORIES:
      return {...state, categoriesData: action.payload};
    case GET_GIPHY_SEARCH_SUGGESTIONS:
      return {...state, giphySuggestionsData: action.payload};

    case TYPE_OF_GIF_API:
      return {...state, typeOfGif: action.payload};

    case API_REQUEST:
      if (action.page === 1) {
        return {...state, loading: true};
      } else {
        return {...state, moreLoading: true};
      }

    case API_SUCCESS:
      return {
        ...state,
        data:
          action.page === 1
            ? action.payload
            : [...state.data, ...action.payload],
        error: '',
        pageNumberFromStore: action.page,
        loading: false,
        moreLoading: false,
        lastQueryFromStore: action.values,
      };

    case API_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        moreLoading: false,
        lastQueryFromStore: action.values,
      };

    case API_LIST_END:
      return {
        ...state,
        isListEnd: action.payload,
        loading: false,
        moreLoading: false,
        lastQueryFromStore: action.values,
      };
    default:
      return state;
  }
}

export default giphyReducer;
