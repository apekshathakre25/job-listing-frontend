import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const { Component } = props;

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogIn(!!token);
  }, []);

  return <div>{isLogIn ? <Component /> : <Navigate to="/login" />}</div>;
};

export default ProtectedRoute;
