import axios from 'axios'
import {
  GET_POST_FAIL,
  GET_POST_SUCCESS,
  REQUEST_FETCH_POSTS,
} from '../constants'

export const getPosts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: REQUEST_FETCH_POSTS })
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    dispatch({ type: GET_POST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_POST_FAIL, payload: error.stack })
  }
}
