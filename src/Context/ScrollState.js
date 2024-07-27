import { createContext, useReducer } from "react";
import ScrollReducer from "./ScrollReducer";

const initialId = 'home';

export const ScrollContext = createContext(initialId);

export const ScrollProvider = ({children}) => {
    const [state, dispatch] = useReducer(ScrollReducer, initialId);
    function setId(id) {
        dispatch({
            type: 'SET_ID',
            payload: id
        });
    }
    return(
        <ScrollContext.Provider value={{id: state, setId}}>
            {children}
        </ScrollContext.Provider>
    );
}