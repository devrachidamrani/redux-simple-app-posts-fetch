import {
  REQUEST_FETCH_POSTS,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from '../constants'

const initialState = {
  posts: [],
  loading: false,
  error: false,
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH_POSTS:
      return { ...state, loading: true, error: false }
    case GET_POST_SUCCESS:
      return { ...state, loading: false, error: false, posts: action.payload }
    case GET_POST_FAIL:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
