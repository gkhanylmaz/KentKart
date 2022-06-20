import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import MapPage from "pages/MapPage/MapPage";
import LoginPage from "pages/LoginPage/LoginPage";

// middlewares
import AuthCheck from "helpers/AuthCheck";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

const App = () => {
  return (
    <Routes>
      <Route
        path="/sign-in"
        element={
          <AuthCheck
            SpecificComponent={LoginPage}
            requiresAuthentication={false}
          />
        }
      />
      <Route
        path="/"
        element={
          <AuthCheck
            SpecificComponent={MapPage}
            requiresAuthentication={true}
          />
        }
      />
    </Routes>
  );
};

export default App;
