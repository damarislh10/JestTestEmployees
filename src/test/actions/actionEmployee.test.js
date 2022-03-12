import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { registerEmployeeAsync } from "../../actions/actionEmployees";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  login: {
    id: "TESTING",
  },
};

let store = mockStore(initState);

describe("Pruebas con las acciones Employees", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  test("Crear empleado", async () => {
    await store.dispatch(
      registerEmployeeAsync({
        url: "",
        nombre: "",
        correo: "",
        descripcion: "",
      })
    );
    const actions = store.getActions();
    console.log(actions);
  });
});
