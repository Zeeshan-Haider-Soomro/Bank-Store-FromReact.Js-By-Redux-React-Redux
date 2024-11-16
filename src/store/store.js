import { combineReducers, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { BankReducer } from "./reducers/bankReducer";
import { CounterReducer } from "./reducers/counterReducer";


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    counter: CounterReducer,
    bank: BankReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)

console.log(store.getState());

