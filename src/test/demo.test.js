import { isLoggedIn, notLoggedIn } from "../base/loguedo";
import { getUser } from "../base/ObjectLogin";

describe("Validando objeto login", () => {
  test("Comparar objetos login", () => {
    expect(getUser()).toEqual({
      name: "Jenny",
      password: "123456",
    });
  });
  test("Validar Rutas privadas", () => {
    const isAuthenticated = isLoggedIn;

    if (isAuthenticated) {
      console.log("Usuario Autenticado");
    } else {
      throw new Error("Usuario No autenticado");
    }
  });
  test("Validar Rutas publicas", () => {
    const isAuthenticated = notLoggedIn;

    if (!isAuthenticated) {
      console.log("Usuario No Autenticado");
    } else {
      throw new Error("Usuario autenticado");
    }
  });
});
