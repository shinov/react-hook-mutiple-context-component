import React, { createContext, useReducer, useEffect  } from 'react';
import useGetVehicles from '../hooks/useGetVehicles';
import tabWrapperReducer , { tabWrapperActions  } from '../reducer/tabWrapperReducer';
import { getStateBaseVehicles } from '../utils/vehicleUtils';


const initialState = {
  vehicles: []
};

export const TabWrapperContext = createContext([{}, () => {}]);

const TabWrapperProvider = (args) => {
  const { children, defaultIndex, currentStateCode } = args;
  const [state, dispatch] = useReducer(tabWrapperReducer, initialState);

  const vehicles = useGetVehicles();

  useEffect(()=>{
    if(vehicles && currentStateCode) {

      const result = getStateBaseVehicles({
        vehicles,
        stateCode: currentStateCode
      });

      /** This will reset the id */
      const activeIndexToSet = defaultIndex || 0;
      const activeId = result[activeIndexToSet].id;

      dispatch({
        type: tabWrapperActions.ON_SET_VEHICLES,
        payload: {
          vehicles: result,
          activeId
        }
      })
    }
  }, [vehicles, defaultIndex, currentStateCode]);
  
  return (
    <TabWrapperContext.Provider value={[state, dispatch]}>
        {children}
    </TabWrapperContext.Provider>
  );
}

export default TabWrapperProvider;