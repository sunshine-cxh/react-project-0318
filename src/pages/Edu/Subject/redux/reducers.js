import {
  GET_USER_LIST, GET_SEC_SUBJECT_LIST
} from "./constants";

const initSubjectList = {
  total: 0, // 总数
  items: [], // 详细user数据
};

export default function subjectList (prevState = initSubjectList, action) {


  switch (action.type) {
    case GET_USER_LIST:
      action.data.items.forEach(item => {
        item.children = []
      })
      return action.data;

    case GET_SEC_SUBJECT_LIST:
      const SecItems = action.data.items
      const FirItems = prevState.items
      SecItems.length &&
        FirItems.forEach(item => {
          if (item._id === SecItems[0].parentId) {
            item.children = SecItems
          }
        })
      return {
        ...prevState,
        items: FirItems
      }

    default:
      return prevState;
  }
}
