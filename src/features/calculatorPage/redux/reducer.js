import actions from './actions';

const INITIAL_STATE = {
  mglt: "",
  starships: {
    isLoading: null,
    isError: null,
    starships: null,
  },
};

const reducer = (state = INITIAL_STATE, action = { type: '@@calculator/INIT' }) => {
  switch (action.type) {
    case actions.types.GET_STARSHIPS_START:
      return {
        ...state,
        starships: {
          isError: null,
          isLoading: true,
          starships: null,
        }
      };
    case actions.types.SET_STARSHIPS:
      return {
        ...state,
        starships: {
          isError: action.payload.isError,
          isLoading: false,
          starships: action.payload.starships,
        }
      };

    case actions.types.SET_MGLT:
      return {
        ...state,
        mglt: action.payload.mglt,
      };

    default:
      return state;
  }
};

export default reducer;
