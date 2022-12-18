import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store, {persistor} from "./store";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Page from './components/Page/Page';
import PageProduct from './components/PageProduct/PageProduct';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { PersistGate } from 'redux-persist/integration/react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/PageProduct" element={<PageProduct />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>

  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
