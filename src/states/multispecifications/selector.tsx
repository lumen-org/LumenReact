export const getMultiSpecById = (state: any, id: any) => {
    return state.multispecifications.multispecifications[id].specification;
  };
  
  export const getColorCatgeoryById = (state: any, id: any) => {
    return [...getMultiSpecById(state, id).Color] || [];
  };