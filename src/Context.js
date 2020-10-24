import React, {useReducer} from "react";
import Reducer from "Reducer";

export const MovieContext = React.createContext();

const MovieContextProvider = ({children}) => {
    const initialState = {loading:null, data: null, error: null};
    const [state, dispatch] = useReducer(Reducer,initialState);
    return(
        <MovieContext.Provider value={{state,dispatch}}>
            {children}
        </MovieContext.Provider>
    );
}

export default MovieContextProvider;