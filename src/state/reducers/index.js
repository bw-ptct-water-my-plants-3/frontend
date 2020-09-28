import {
  GET_PLANTS_SUCCESS,
  UPDATE_PLANT_SUCCESS,
  REMOVE_PLANT_SUCCESS,
  LOGIN_SUCCESS,
} from '../actions';

const initialState = {
  plants: [],
  user: {
    user_id: window.localStorage.getItem('user_id'),
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANTS_SUCCESS:
      return {
        ...state,
        plants: [...action.payload],
      };

    case UPDATE_PLANT_SUCCESS:
      const filtered = state.plants.filter((plant) => {
        return plant.id !== action.payload.id;
      });

      return {
        ...state,
        plants: [...filtered, action.payload],
      };

    case REMOVE_PLANT_SUCCESS:
      const removed = state.plants.filter((plant) => {
        return plant.id !== action.payload.id;
      });

      return {
        ...state,
        plants: [...removed],
      };

    case LOGIN_SUCCESS:
      return { ...state, user_id: action.payload.userid };

    default:
      return state;
  }
};
