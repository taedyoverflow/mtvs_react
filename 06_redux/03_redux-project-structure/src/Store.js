// import rootReducer from "./modules";
// import {createStore, applyMiddleware} from 'redux';
// import ReduxThunk from 'redux-thunk';

// const store = createStore(
//     rootReducer,
//     applyMiddleware(ReduxThunk)
// );

// export default store;

// npm install @reduxjs/toolkit 후 사용
import  {configureStore} from "@reduxjs/toolkit";
import pokemonReducer from "./modules/PokemonModule";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default configureStore({
    reducer: {
        pokemonReducer
    },
    middleware: [thunk, logger]
});