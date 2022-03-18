const Main: React.FC<any> = (state, action) => {
  switch (action.type) {
    case "setNews":
      state.ListNews.push(...action.payload);
      return { ...state};
    case "restNews":
      state.ListNews = [];
      return { ...state };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default Main;
