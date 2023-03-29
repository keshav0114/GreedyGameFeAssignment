import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./Pages/Analytics";
import { Provider } from "react-redux";
import store from "./redux2/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Analytics />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
