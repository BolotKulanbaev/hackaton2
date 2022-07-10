import React, { useReducer } from "react";
import axios from "axios";

export const flowersContext = React.createContext();

const INIT_STATE = {
  flowers: [],
  oneFlowers: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FLOWERS":
      return {
        ...state,
        flowers: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 2),
      };
    case "GET_ONE":
      return { ...state, oneFlowers: action.payload };
    default:
      return state;
  }
}

const FLOWERS_API = "http://localhost:8001/flowers";

const FlowersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createFlowers(newFlowers) {
    await axios.post(FLOWERS_API, newFlowers);
    getFlowers();
  }

  async function getFlowers() {
    const res = await axios(`${FLOWERS_API}${window.location.search}`);

    dispatch({
      type: "GET_FLOWERS",
      payload: res,
    });
  }

  async function deleteFlowers(id) {
    await axios.delete(`${FLOWERS_API}/${id}`);
    getFlowers();
  }

  async function getOneFlowers(id) {
    const res = await axios(`${FLOWERS_API}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: res.data,
    });
  }

  async function updateFlowers(id, editedFlowers) {
    await axios.patch(`${FLOWERS_API}/${id}`, editedFlowers);
  }
  return (
    <flowersContext.Provider
      value={{
        flowers: state.flowers,
        oneFlowers: state.oneFlowers,
        pages: state.pages,
        createFlowers,
        getFlowers,
        deleteFlowers,
        getOneFlowers,
        updateFlowers,
      }}>
      {children}
    </flowersContext.Provider>
  );
};
export default FlowersContextProvider;
