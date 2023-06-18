import React from "react";
import RootLayout from "./layouts/RootLayout";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Message from "./Pages/Message";

const App = () => {
  const location = useLocation();
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={<Message routeName={location.pathname} />}
          />
        </Routes>
      </RootLayout>
    </>
  );
};

export default App;
