const GET_STARSHIPS_START = 'calculator/GET_STARSHIPS_START';
const SET_STARSHIPS = 'calculator/SET_STARSHIPS';
const SET_MGLT = 'calculator/SET_MGLT';

const getStarshipsStart = () => ({
  type: GET_STARSHIPS_START,
});

const setStarships = (starships, isError) => ({
  type: SET_STARSHIPS,
  payload: { starships, isError }
});

const setMglt = (mglt) => ({
  type: SET_MGLT,
  payload: { mglt }
});

const actions = {
  types: {
    GET_STARSHIPS_START,
    SET_STARSHIPS,
    SET_MGLT,
  },
  getStarshipsStart,
  setStarships,
  setMglt,
};

export default actions;
