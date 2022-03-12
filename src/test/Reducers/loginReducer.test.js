import "@testing-library/jest-dom";
import { loginReducer } from "../../reducers/loginReducer";
import { types } from "../../types/types";

describe("Prueba en login reducer", () => {
  test("Debe de realizar el login", () => {
    const initialState = {};
    const action = {
      type: types.login,
      payload: {
        id: "abc",
        displayname: "Damaris",
      },
    };
    const state = loginReducer(initialState, action);
    expect(state).toEqual({
      id: "abc",
      displayname: "Damaris",
    });

    console.log(state);
  });

  test("Cerrar sesion - logout", () => {
    const initState = {
      id: "abc",
      displayname: "Damaris",
    };

    const action = {
      type: types.logout,
    };

    const state = loginReducer(initState, action);
    expect(state).toEqual({});
  });
});
