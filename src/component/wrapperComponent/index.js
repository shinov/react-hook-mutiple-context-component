
import './wrapper.css';

import { useContext } from 'react';
import TabComponent from '../TabComponent';
import TabContent from '../TabContent';
import { WrapperContext } from '../context/wrapperProvider';
import { wrapperActions  } from '../reducer/wrapperReducer';
import TabWrapperProvider from '../context/tabWrapperProvider';

function WrapperComponent() {
  const [state, wrapperDispacher] = useContext(WrapperContext);
  const { stateCodes = {}, currentStateCode} = state;
  const statekeys = stateCodes ? Object.keys(stateCodes) : [];
  const onSelectState = (e) => {
    const { target } = e;
    const { value } = target;
    wrapperDispacher({
      type: wrapperActions.SET_CURRENT_STATE,
      payload: {
        currentStateCode: value
      }
    })
  }
  console.log("wrapper-component")
  return (
    <div className="wrapper-component">
        <div className="wrapper-component__header-main">
          <h2>Select Specfic Vehicle</h2>
          <div className="wrapper-component__header-main--state-select">
          {statekeys?.length && (
              <select onChange={onSelectState} value={currentStateCode} >
                {statekeys.map((e) => {
                  return(<option key={e} value={e}>{stateCodes[e]}</option>)
                })}
              </select>
          )}
          </div>
        </div>
        <TabWrapperProvider
          defaultIndex={0}
          currentStateCode={currentStateCode}
        >
          <>
              <TabComponent/>
              <TabContent
              
              />
          </>
        </TabWrapperProvider>
        
    </div>
  );
}

export default WrapperComponent;