import axios from "axios";

export const FETCHING_GET_PLANT = 'FETCHING_GET_PLANT';
export const FETCHING_GET_PLANT_SUCESS = 'FETCHING_ADD_STAR_SUCESS';
export const FETCHING_GET_PLANT_FAILURE = 'FETCHING_ADD_STAR_SUCESS';

export const FETCHING_UPDATE_PLANT = 'FETCHING_UPDATE_PLANT';
export const FETCHING_UPDATE_PLANT_SUCESS = 'FETCHING_ADD_STAR_SUCESS';
export const FETCHING_UPDATE_PLANT_FAILURE = 'FETCHING_ADD_STAR_SUCESS';

export const FETCHING_REMOVE_PLANT = 'FETCHING_REMOVE_PLANT_';
export const FETCHING_REMOVE_PLANT_SUCESS = 'FETCHING_ADD_STAR_SUCESS';
export const FETCHING_REMOVE_PLANT_FAILURE = 'FETCHING_ADD_STAR_SUCESS';

export const LOGIN = 'LOGIN'
export const LOGIN_SUCESS = 'LOGIN_SUCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const REGISTER = 'REGISTER'
export const REGISTER_SUCESS = 'REGISTER_SUCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'


const headers = {
    Accept: "application/json"
  };
export const getPlant = () => dispatch => {
    dispatch({ type: FETCHING_GET_PLANT });
    axios
      .get("https://swapi.dev/api/people/", { headers })
      .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_GET_PLANT_SUCESS, payload: res.data.results });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_GET_PLANT_FAILURE, payload: err });
      });
  };

  export const updatePlant = () => dispatch => {
    dispatch({ type: FETCHING_UPDATE_PLANT });
    axios
      .get("https://swapi.dev/api/people/", { headers })
      .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_UPDATE_PLANT_SUCESS, payload: res.data.results });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_UPDATE_PLANT_FAILURE, payload: err });
       
      });
  };


  export const removePlant = () => dispatch => {
    dispatch({ type: FETCHING_REMOVE_PLANT });
    axios
      .get("https://swapi.dev/api/people/", { headers })
      .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_REMOVE_PLANT_SUCESS, payload: res.data.results });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_REMOVE_PLANT_FAILURE, payload: err });
       
      });
};

    export const login = () => dispatch => {
    dispatch({ type: LOGIN });
    axios
      .get("https://swapi.dev/api/people/", { headers })
      .then(res => {
        console.log(res);
        dispatch({ type: LOGIN_SUCESS, payload: res.data.results });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_ERROR, payload: err });
       
      });
};
  
export const register = () => dispatch => {
    dispatch({ type: REGISTER });
    axios
      .get("https://swapi.dev/api/people/", { headers })
      .then(res => {
        console.log(res);
        dispatch({ type: REGISTER_SUCESS, payload: res.data.results });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: REGISTER_ERROR, payload: err });
       
      });
    };