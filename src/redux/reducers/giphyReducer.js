import {
  GET_GIPHY_CATEGORIES,
  GET_GIPHY_SEARCH_SUGGESTIONS,
  SELECTED_TYPE_OF_GIF,
  API_SUCCESS,
  API_REQUEST,
  API_LIST_END,
  API_FAILURE,
} from '../types';

const initialState = {
  categoriesData: [],
  giphySuggestionsData: [],

  loading: false,
  moreLoading: false,
  error: null,
  moreError: null,
  data: [],
  isListEnd: false,
  selectedTypeOfGif: 'trending',
  fromReducerPageNumber: 1,
  valuesFromReducer: '', //selected value like searchQuery and selected category
};

function giphyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GIPHY_CATEGORIES:
      return {...state, categoriesData: action.payload};
    case GET_GIPHY_SEARCH_SUGGESTIONS:
      return {...state, giphySuggestionsData: action.payload};

    case SELECTED_TYPE_OF_GIF:
      return {...state, selectedTypeOfGif: action.payload};

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
        fromReducerPageNumber: action.page,
        loading: false,
        moreLoading: false,
        valuesFromReducer: action.values,
      };

    case API_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        moreLoading: false,
        valuesFromReducer: action.values,
      };

    case API_LIST_END:
      return {
        ...state,
        isListEnd: action.payload,
        loading: false,
        moreLoading: false,
        valuesFromReducer: action.values,
      };
    default:
      return state;
  }
}

export default giphyReducer;
