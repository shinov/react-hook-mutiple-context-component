import { useEffect, useState  } from 'react';
import fetch from 'isomorphic-fetch';

const useStateCode = (()=>{
    const [states, setStates] = useState(null);
    useEffect(()=>{
        fetch('/data/state.json').then(res => res.json()).then(json => {
            if(json) {
             setStates(json)
            }
        });
    }, []);
    return states;
});


export default useStateCode;