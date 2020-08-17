import {
  reqSubjectList, reqSecSubjectList
} from "@api/edu/subject";

import {
  GET_USER_LIST,
  GET_SEC_SUBJECT_LIST
} from "./constants";
/**
 * 获取/搜索 用户分页数据
 */
const getSubjectListSync = (list) => ({
  type: GET_USER_LIST,
  data: list,
});
export const getSubjectList = (page, limit) => {
  return (dispatch) => {
    return reqSubjectList(page, limit).then((response) => {
      dispatch(getSubjectListSync(response));
      return response.total;
    });
  };
};



const getSecSubjectListSync = (list) => ({
  type: GET_SEC_SUBJECT_LIST,
  data: list,
});
export const getSecSubjectList = (parentId) => {
  return (dispatch) => {
    return reqSecSubjectList(parentId).then((response) => {
      dispatch(getSecSubjectListSync(response));
      return response.total;
    });
  };
};



