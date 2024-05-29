import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RootStore from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = RootStore.create({});
export const StoreContext = createContext(store);
root.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>

        </StoreContext.Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();