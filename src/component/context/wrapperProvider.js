import React, { createContext, useReducer, useEffect  } from 'react';
import useStateCode from '../hooks/useGetStateCodes';
import wrapperReducer, { wrapperActions  } from '../reducer/wrapperReducer';

const initialState = {
  stateCodes: [],
  currentStateCode: null
};

export const WrapperContext = createContext([{}, () => {}]);

const WrapperProvider = (args) => {
  const { children, defaultState } = args;
  const [state, dispatch] = useReducer(wrapperReducer, initialState);
  const stateCodes = useStateCode();
  useEffect(()=>{
    if(stateCodes) {
      dispatch({
        type: wrapperActions.ON_SET_STATES,
        payload: {
          stateCodes,
          currentStateCode: defaultState || stateCodes[0]
        }
      })
    }
  }, [stateCodes, defaultState]);
  
  return (
    <WrapperContext.Provider value={[state, dispatch]}>
        {children}
    </WrapperContext.Provider>
  );
}

export default WrapperProvider;