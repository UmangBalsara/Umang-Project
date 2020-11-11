import {
    ADD_STUDENT,
    EDIT_LIST,
    UPDATE_STUDENT,
    DELETE_STUDENT,
    SEARCH_STUDENT,
  } from "./type";
  
  const initialState = {
    lists: [],
    list: "",
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_STUDENT:
        return Object.assign({}, state, {
          lists: state.lists.concat(action.payload),
        });
  
      case EDIT_LIST:
        return {
          ...state,
          list: action.payload,
        };
  
      case UPDATE_STUDENT:
        var lists = state.lists.map((list) => {
          if (list.studentId === state.list.studentId) {
            return {
              ...list,
              firstName: action.payload.firstName,
              lastName: action.payload.lastName,
              address: action.payload.address,
              enrollmentNo: action.payload.enrollmentNo,
            };
          } else {
            return list;
          }
        });
        return {
          lists: lists,
        };
  
      case DELETE_STUDENT:
        return {
          ...state,
          lists: state.lists.filter((list, i) => i !== action.id),
        };
  
      case SEARCH_STUDENT:
        const value = action.value;
        //console.log(value);
        const filteredLists = state.lists.filter((list) => {
          return (
            list.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1
          );
        });
        return {
          ...state,
          lists: filteredLists,
        };
      default:
        return state;
    }
  };
  
  export default studentReducer;
  