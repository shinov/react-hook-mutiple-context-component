import { useEffect, useState  } from 'react';
import fetch from 'isomorphic-fetch';

const useGetVehicles = (()=>{
    const [vehicles, setVehicles] = useState(null);
    useEffect(()=>{
        fetch('/data/vehicles.json').then(res => res.json()).then(json => {
            if(json) {
                setVehicles(json)
            }
        });
    }, []);
    return vehicles;
});


export default useGetVehicles;