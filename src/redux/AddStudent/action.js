import {
    ADD_STUDENT,
    EDIT_LIST,
    UPDATE_STUDENT,
    DELETE_STUDENT,
    SEARCH_STUDENT,
  } from "./type";
  
export const addStudent = (payload) => {
    return {
      type: ADD_STUDENT,
      payload: payload,
    };
};
  
export const editList = (payload) => {
    return {
      type: EDIT_LIST,
      payload: payload,
    };
};
  
export const updateStudent = (payload) => {
    return {
      type: UPDATE_STUDENT,
      payload: payload,
    };
};
  
export const deleteStudent = (id) => {
    return {
      type: DELETE_STUDENT,
      id: id,
    };
};
  
export const searchStudent = (value) => {
    return {
      type: SEARCH_STUDENT,
      value: value,
    };
};
  