import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCHING_GET_PLANT = 'FETCHING_GET_PLANT';
export const FETCHING_GET_PLANT_SUCESS = 'FETCHING_GET_PLANT_SUCESS';
export const FETCHING_GET_PLANT_FAILURE = 'FETCHING_GET_PLANT_FAILURE';

export const FETCHING_ADD_PLANT = 'FETCHING_ADD_PLANT';
export const FETCHING_ADD_PLANT_SUCESS = 'FETCHING_ADD_PLANT_SUCESS';
export const FETCHING_ADD_PLANT_FAILURE = 'FETCHING_ADD_PLANT_FAILURE';

export const FETCHING_UPDATE_PLANT = 'FETCHING_UPDATE_PLANT';
export const FETCHING_UPDATE_PLANT_SUCESS = 'FETCHING_UPDATE_PLANT_SUCESS';
export const FETCHING_UPDATE_PLANT_FAILURE = 'FETCHING_UPDATE_PLANT_FAILURE';

export const FETCHING_REMOVE_PLANT = 'FETCHING_REMOVE_PLANT_';
export const FETCHING_REMOVE_PLANT_SUCESS = 'FETCHING_REMOVE_PLANT_SUCESS';
export const FETCHING_REMOVE_PLANT_FAILURE = 'FETCHING_REMOVE_PLANT_FAILURE';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCESS = 'LOGIN_SUCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCESS = 'REGISTER_SUCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

const user_id = localStorage.getItem("user_id");

const headers = {
  Accept: 'application/json',
};
export const addPlant = (state) => (dispatch) => {
  dispatch({ type: FETCHING_ADD_PLANT });
    return axiosWithAuth().post(`/users/${user_id}/plants/`, state )
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCHING_ADD_PLANT_SUCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCHING_ADD_PLANT_FAILURE, payload: err });
    });
};

export const updatePlant = (state) => (dispatch) => {
  dispatch({ type: FETCHING_UPDATE_PLANT });
  return axiosWithAuth()
    .put(`/users/${user_id}/plants/${state.id}`, state)
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCHING_UPDATE_PLANT_SUCESS,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCHING_UPDATE_PLANT_FAILURE, payload: err });
    });
};

export const getPlants = () => (dispatch) => {
  dispatch({ type: FETCHING_GET_PLANT });
  axiosWithAuth()
    .get(`/users/${user_id}/plants/`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCHING_GET_PLANT_SUCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCHING_GET_PLANT_FAILURE, payload: err });
    });
};

export const removePlant = (state) => (dispatch) => {
  dispatch({ type: FETCHING_REMOVE_PLANT });
  axiosWithAuth()
    .delete(`/users/${user_id}/plants/${state.id}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCHING_REMOVE_PLANT_SUCESS,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCHING_REMOVE_PLANT_FAILURE, payload: err });
    });
};

export const login = (state) => (dispatch) => {
  dispatch({ type: LOGIN });
  return axios
    .post('https://plants-123.herokuapp.com/auth/login', state )
    .then((res) => {
      console.warn(res);
      dispatch({ type: LOGIN_SUCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.userid);
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
    .post('https://plants-123.herokuapp.com/auth/register', state )
    .then((res) => {
      console.log(res);
      dispatch({ type: REGISTER_SUCESS, payload: res.data.results });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTER_ERROR, payload: err });
    });
};
