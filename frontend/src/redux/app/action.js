import * as types from "./actionTypes";
import axios from "axios";
const API_URL = "http://localhost:8000";

export const addBreakfast = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_BREAKFAST_REQUEST });
  return (
    axios
      // .post("https://myfitnesspalclone17.herokuapp.com/breakfast/create", payload)
      .post(`${API_URL}/breakfast/create`, payload)
      .then((res) =>
        dispatch({ type: types.ADD_BREAKFAST_SUCCESS, payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: types.ADD_BREAKFAST_FAILURE, payload: err.response })
      )
  );
};

export const getBreakfast = (payload) => (dispatch) => {
  dispatch({ type: types.GET_BREAKFAST_REQUEST });

  // TODO: change all urls to localhost:8000 in all redux state files and components
  return (
    axios
      // .get("https://myfitnesspalclone17.herokuapp.com/breakfast")
      .get(`${API_URL}/breakfast`)

      .then((res) =>
        dispatch({ type: types.GET_BREAKFAST_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: types.GET_BREAKFAST_FAILURE }))
  );
};

export const deleteBreakfast = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_BREAKFAST_REQUEST });
  return (
    axios
      // .delete(`https://myfitnesspalclone17.herokuapp.com/breakfast/${payload}`)
      .delete(`${API_URL}/breakfast/${payload}`)

      .then((res) =>
        dispatch({ type: types.DELETE_BREAKFAST_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: types.DELETE_BREAKFAST_FAILURE }))
  );
};

export const addLunch = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_LUNCH_REQUEST });
  return (
    axios
      // .post("https://myfitnesspalclone17.herokuapp.com/lunch/create", payload)
      .post(`${API_URL}/lunch/create`, payload)

      .then((res) =>
        dispatch({ type: types.ADD_LUNCH_SUCCESS, payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: types.ADD_LUNCH_FAILURE, payload: err.response })
      )
  );
};

export const getLunch = (payload) => (dispatch) => {
  dispatch({ type: types.GET_LUNCH_REQUEST });
  return (
    axios
      // .get("https://myfitnesspalclone17.herokuapp.com/lunch")
      .get(`${API_URL}/lunch`)

      .then((res) =>
        dispatch({ type: types.GET_LUNCH_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: types.GET_LUNCH_FAILURE }))
  );
};

export const deleteLunch = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_LUNCH_REQUEST });
  return (
    axios
      // .delete(`https://myfitnesspalclone17.herokuapp.com/lunch/${payload}`)
      .delete(`${API_URL}/lunch/${payload}`)

      .then((res) =>
        dispatch({ type: types.DELETE_LUNCH_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: types.DELETE_LUNCH_FAILURE }))
  );
};

export const addDinner = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_DINNER_REQUEST });
  return (
    axios
      // .post("https://myfitnesspalclone17.herokuapp.com/dinner/create", payload)
      .post(`${API_URL}/dinner/create`, payload)

      .then((res) =>
        dispatch({ type: types.ADD_DINNER_SUCCESS, payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: types.ADD_DINNER_FAILURE, payload: err.response })
      )
  );
};

export const getDinner = (payload) => (dispatch) => {
  dispatch({ type: types.GET_DINNER_REQUEST });
  return (
    axios
      // .get("https://myfitnesspalclone17.herokuapp.com/dinner")
      .get(`${API_URL}/dinner`)

      .then((res) =>
        dispatch({ type: types.GET_DINNER_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: types.GET_DINNER_FAILURE }))
  );
};

export const deleteDinner = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_DINNER_REQUEST });
  return (
    axios
      // .delete(`https://myfitnesspalclone17.herokuapp.com/dinner/${payload}`)
      .delete(`${API_URL}/dinner/${payload}`)

      .then((res) =>
        dispatch({ type: types.DELETE_DINNER_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: types.DELETE_DINNER_FAILURE }))
  );
};

export const addSnack = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_SNACK_REQUEST });
  return (
    axios
      // .post("https://myfitnesspalclone17.herokuapp.com/snack/create", payload)
      .post(`${API_URL}/snack/create`, payload)

      .then((res) =>
        dispatch({ type: types.ADD_SNACK_SUCCESS, payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: types.ADD_SNACK_FAILURE, payload: err.response })
      )
  );
};

export const getSnack = (payload) => (dispatch) => {
  dispatch({ type: types.GET_SNACK_REQUEST });
  return (
    axios
      // .get("https://myfitnesspalclone17.herokuapp.com/snack")
      .get(`${API_URL}/snack`)

      .then((res) =>
        dispatch({ type: types.GET_SNACK_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: types.GET_SNACK_FAILURE }))
  );
};

export const deleteSnack = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_SNACK_REQUEST });
  return (
    axios
      // .delete(`https://myfitnesspalclone17.herokuapp.com/snack/${payload}`)
      .delete(`${API_URL}/snack/${payload}`)

      .then((res) =>
        dispatch({ type: types.DELETE_SNACK_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: types.DELETE_SNACK_FAILURE }))
  );
};
