import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Page1 />
              </>
            }
          />
          <Route
            path="/detail"
            element={
              <>
                <Page2 />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
