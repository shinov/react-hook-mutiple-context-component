export const wrapperActions = {
  ON_SET_STATES: 'ON_SET_STATES',
  SET_CURRENT_STATE: 'SET_CURRENT_STATE'
};
function wrapperReducer(state, action) {
  switch (action.type) {
    case wrapperActions.ON_SET_STATES:
      return {
        ...state,
        stateCodes: action.payload.stateCodes,
        currentStateCode: action.payload.currentStateCode
      };
    case wrapperActions.SET_CURRENT_STATE:
      return {
        ...state,
        currentStateCode: action.payload.currentStateCode
      };
    default:
      return state;
  }
}

export default wrapperReducer;