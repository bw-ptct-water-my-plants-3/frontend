import axios from 'axios';
import { axiosWithAuth } from '../../components/utils/axiosWithAuth';

export const GET_PLANTS = 'GET_PLANTS';
export const GET_PLANTS_SUCCESS = 'GET_PLANTS_SUCCESS';
export const GET_PLANTS_FAILURE = 'GET_PLANTS_FAILURE';

export const ADD_PLANT = 'ADD_PLANT';
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS';
export const ADD_PLANT_FAILURE = 'ADD_PLANT_FAILURE';

export const UPDATE_PLANT = 'UPDATE_PLANT';
export const UPDATE_PLANT_SUCCESS = 'UPDATE_PLANT_SUCCESS';
export const UPDATE_PLANT_FAILURE = 'UPDATE_PLANT_FAILURE';

export const REMOVE_PLANT = 'REMOVE_PLANT';
export const REMOVE_PLANT_SUCCESS = 'REMOVE_PLANT_SUCCESS';
export const REMOVE_PLANT_FAILURE = 'REMOVE_PLANT_FAILURE';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

const user_id = localStorage.getItem('user_id');

export const addPlant = (user_id, state) => (dispatch) => {
  dispatch({ type: ADD_PLANT });
  return axiosWithAuth()
    .post(`/users/${user_id}/plants/`, state)
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_PLANT_FAILURE, payload: err });
    });
};

export const updatePlant = (user_id, state) => (dispatch) => {
  dispatch({ type: UPDATE_PLANT });
  return axiosWithAuth()
    .put(`/users/${user_id}/plants/${state.id}`, state)
    .then((res) => {
      console.log(res);
      dispatch({
        type: UPDATE_PLANT_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UPDATE_PLANT_FAILURE, payload: err });
    });
};

export const getPlants = (user_id) => (dispatch) => {
  dispatch({ type: GET_PLANTS });
  axiosWithAuth()
    .get(`/users/${user_id}/plants/`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_PLANTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.message.includes('404')) {
        dispatch({
          type: GET_PLANTS_SUCCESS,
          payload: [],
        });
      } else {
        dispatch({ type: GET_PLANTS_FAILURE, payload: err });
      }
    });
};

export const removePlant = (user_id, state) => (dispatch) => {
  dispatch({ type: REMOVE_PLANT });
  axiosWithAuth()
    .delete(`/users/${user_id}/plants/${state.id}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: REMOVE_PLANT_SUCCESS,
        payload: state,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REMOVE_PLANT_FAILURE, payload: err });
    });
};

export const login = (state) => (dispatch) => {
  dispatch({ type: LOGIN });
  return axios
    .post('https://plants-123.herokuapp.com/auth/login', state)
    .then((res) => {
      console.warn(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.userid);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_ERROR, payload: err });
    });
};

export const register = (state) => (dispatch) => {
  dispatch({ type: REGISTER });
  console.log();
  return axios
    .post('https://plants-123.herokuapp.com/auth/register', state)
    .then((res) => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.results });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTER_ERROR, payload: err });
    });
};
