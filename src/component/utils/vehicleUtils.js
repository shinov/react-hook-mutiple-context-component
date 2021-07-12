const getStateBaseVehicles = args => {
  const { vehicles = {}, stateCode } = args;
  const { vehicles: vehiclesFromJson } = vehicles;
  const filteredResult = vehiclesFromJson.filter((e)=> {
      const { stateAavailable = [] } = e;
      if(stateAavailable.length > 0) {
        if(stateAavailable.indexOf(stateCode) > -1) {
            return true;
        } else {
            return false;
        }
      }
      return true;
      
  })
  return filteredResult;
}

const getMSRP = args => {
  let resultPrice = 0;
  const { color, basePrice } = args;
  const { additionalMsrp = 0 } = color;
  resultPrice = basePrice + additionalMsrp;
  return resultPrice
}

const getVehileData = args => {
  const { vehicles = [], activeId = null } = args;
  if(vehicles.length) {
    const veh = vehicles.find(e => e.id === activeId);
    return veh ? veh : null;
  }
  return null;
}

export {
  getStateBaseVehicles,
  getMSRP,
  getVehileData
}