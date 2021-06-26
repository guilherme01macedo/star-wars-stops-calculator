import actions from './actions';
import service from './service';

const getStarships = () => async (dispatch) => {
  try {
    dispatch(actions.getStarshipsStart());
    const starships = await service.getStarships();
    dispatch(actions.setStarships(starships, false));
  } catch (e) {
    dispatch(actions.setStarships([], true));
    throw e;
  }
};

const setMglt = (mglt) => async (dispatch) => {
  dispatch(actions.setMglt(mglt));
};

const operations = {
  getStarships,
  setMglt,
};

export default operations;
