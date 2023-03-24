import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer';



const initializeStore   = (preloadedState={}) => {
    const store = configureStore({
        reducer,
        preloadedState,

    })

    return store
}


export default initializeStore;
