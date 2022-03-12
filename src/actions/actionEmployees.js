import { typesEmpleoyees } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from "@firebase/firestore";

//DELETE

export const deleteEmployeeAsync = (email) => {
  return async (dispatch) => {
    const estCollection = collection(db, "employees");
    const q = query(estCollection, where("correo", "==", email));

    const datos = await getDocs(q);
    datos.forEach((docu) => {
      deleteDoc(doc(db, "employees", docu.id));
    });
    dispatch(deleteSync(email));
  };
};

export const deleteSync = (email) => {
  return {
    type: typesEmpleoyees.delete,
    payload: email,
  };
};

//READ

export const listEmployeeAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "employees"));
    const empleados = [];
    querySnapshot.forEach((doc) => {
      empleados.push({
        ...doc.data(),
      });
    });
    dispatch(listSync(empleados));
  };
};

export const listSync = (employees) => {
  return {
    type: typesEmpleoyees.list,
    payload: employees,
  };
};

//CREATE

export const registerEmployeeAsync = (newEmployee) => {
  return (dispatch) => {
    const newCard = {
      url: newEmployee.url,
      nombre: newEmployee.nombre,
      correo: newEmployee.correo,
      descripcion: newEmployee.descripcion,
    };
    addDoc(collection(db, "employees"), newCard)
      .then((resp) => {
        dispatch(registerEmployeeSync(newCard));
        dispatch(listEmployeeAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const registerEmployeeSync = (employee) => {
  return {
    type: typesEmpleoyees.register,
    payload: employee,
  };
};
