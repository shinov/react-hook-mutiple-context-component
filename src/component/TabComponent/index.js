import { useContext } from "react";
import { TabWrapperContext } from "../context/tabWrapperProvider";
import { tabWrapperActions } from '../reducer/tabWrapperReducer';
import './tab-content.css';
function TabComponent() {
  const [state, tabWrapperDispatcher] = useContext(TabWrapperContext);
  const { vehicles = [] } = state;

  const onVehicleSelect = (e) => {
    const { dataset } = e.currentTarget;
    const { id } = dataset;
    if(id) {
      tabWrapperDispatcher({
        type: tabWrapperActions.ON_SET_ID,
        payload: {
          activeId:  id
        }
      })
    }
  }
  return (
    <div className="tab-component">
        <ul  className="vehicle-list">
          {vehicles.length > 0 && (
            vehicles.map(e => {
              return(<li onClick={onVehicleSelect} data-id={e.id} key={e.id}>{e.name}</li>)
            })
          )}
        </ul>
    </div>
  );
}

export default TabComponent;