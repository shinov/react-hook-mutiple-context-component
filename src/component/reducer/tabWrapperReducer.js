import { getVehileData } from "../utils/vehicleUtils";

export const tabWrapperActions = {
  ON_SET_STATES: 'ON_SET_VEHICLES',
  ON_SET_ID: 'ON_SET_ID'
};
function TabWrapperReducer(state, action) {

  switch (action.type) {
    case tabWrapperActions.ON_SET_VEHICLES:
      const { vehicles, activeId } = action.payload;
      const vehicle = getVehileData({
        vehicles, activeId
      });
      return {
        ...state,
        vehicles: vehicles,
        activeId: activeId,
        vehicle
      };
    case tabWrapperActions.ON_SET_ID:
      const vehicleToSet = getVehileData({
        vehicles: state.vehicles,
        activeId: action.payload.activeId
      })
      return {
        ...state,
        activeId: action.payload.activeId,
        vehicle: vehicleToSet
      };
    default:
      return state;
  }
}
  
  export default TabWrapperReducer;