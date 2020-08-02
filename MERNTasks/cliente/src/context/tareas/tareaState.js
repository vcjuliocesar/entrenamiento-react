import React,{useReducer} from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

const TareaSate = (props) => {
    const initialSate={
       tareas:[], 
    }

    //Create dispatch y state
    const [state,dispatch] = useReducer(tareaReducer,initialSate);

    return (
        <tareaContext.Provider>
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaSate;