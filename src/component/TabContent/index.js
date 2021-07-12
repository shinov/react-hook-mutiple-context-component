
import { useContext, useEffect, useState } from 'react';
import { TabWrapperContext } from '../context/tabWrapperProvider';

import useGetVehicle from '../hooks/useGetVehicle';

import { getMSRP } from '../utils/vehicleUtils';

import './tab-container.css';
function TabContent() {
  const [currentColorFilter, setCurrentColorFIlter] = useState(null)
  const [finalmsrp, setFinalMsrp] = useState(0)
  const [state] = useContext(TabWrapperContext);
  const { activeId, vehicle = {} } = state;
  const vehicleData = useGetVehicle(activeId);
  const { name, image, colors = [] } = vehicleData || {};
  const filterToSet = colors && colors[0] ? colors[0].filter : '';
  const { msrp = 0 } = vehicle;

  useEffect(()=>{
    if(filterToSet) {
      const color = colors[0];
      const price = getMSRP({
        color,
        basePrice: msrp
      });
      setCurrentColorFIlter(filterToSet);
      setFinalMsrp(price);
    }
  },[activeId, filterToSet]);

  const onColorSelect = (e) => {
    const { dataset } = e.currentTarget;
    const { filter, index } = dataset;
    const color = colors[index];
    const price = getMSRP({
      color,
      basePrice: msrp
    });
   
    if(filter) {
      setCurrentColorFIlter(filter);
      setFinalMsrp(price);
    }
  }
  return (
    <div className="tab-component">
        <h2 className="vehicle-name">
           {name}
           <br/>
           MSRP {finalmsrp}
        </h2>
        <div className="vehicle-image" >
          <img style={{filter: currentColorFilter}} alt={name} src={image} />
        </div>
        <div className="vehicle-colors" >
          <ul>
              {colors.map((s, index) => {
                return(
                <li onClick={onColorSelect} data-index={index} data-filter={s.filter} key={s.id} >
                  <img alt={s.name} style={{filter: s.filter}} src={image} />
                </li>
                )
              })}
          </ul>
        </div>
    </div>
  );
}
  
export default TabContent;