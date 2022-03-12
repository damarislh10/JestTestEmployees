import "@testing-library/jest-dom";
import { types, typesEmpleoyees } from "../../types/types";

describe("Verificar Types", () => {
  test("Comparar objetos", () => {
    expect(types).toEqual({
      login: "[Auth] login",
      logout: "logout",
      register: "register",
    });
  });

  test("Comparar type Employee", () => {
    expect(typesEmpleoyees).toEqual({
      register: "Register",
      list: "List",
      delete: "Delete",
    });
    console.log(typesEmpleoyees);
  });
});
