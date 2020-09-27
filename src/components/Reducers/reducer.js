const initialState = {
  plants: [],
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLANTS':
      return {
        ...state,
        plants: [...action.payload],
      };
    case 'UPDATE_PLANTS':
      const filtered = state.plants.filter((plant) => {
        return plant.id !== action.payload.id;
      });
      return {
        ...state,
        plants: [...filtered, action.payload],
      };
    case 'REMOVE_PLANTS':
      const removed = state.plants.filter((plant) => {
        return plant.id !== action.payload.id;
      });
      return {
        ...state,
        plants: [...removed],
      };

    default:
      return state;
  }
};
