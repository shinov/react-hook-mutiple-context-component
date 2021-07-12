import { useEffect, useState  } from 'react';
import fetch from 'isomorphic-fetch';
const cache = {};
const useGetVehicle = ((id)=>{
    const [vehicle, setVehicle] = useState(null);
    useEffect(()=>{
        if(id && cache[id]){
            setVehicle(cache[id]);
        } else if(id && !cache[id]) {
            fetch(`/data/vehicleDetails/${id}.json`).then(res => res.json()).then(json => {
              if(json) {
                cache[id] = json;
                setVehicle(json)
              }
            });
        }
        else {
            setVehicle(null);
        }
    }, [id]);
    return vehicle;
});


export default useGetVehicle;