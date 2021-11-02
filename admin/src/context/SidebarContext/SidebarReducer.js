const initialSidebarState = {
  page: null,
};
export default function SidebarReducer(state = initialSidebarState, action) {
  switch (action.type) {
    case "CHANGE_SELECT":
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
}
