import React from "react";
import axios from "axios";
const backEndUrl = `http://localhost:6002/api/v1`;

export const loginUser = async (email, password) => {
  try {
    const reqUrl = `${backEndUrl}/auth/login`;
    const response = await axios.post(reqUrl, { email, password });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const registerUser = async ({name, email, password}) => {
  try {
    const reqUrl = `${backEndUrl}/auth/register`;
    const response = await axios.post(reqUrl, { name, email, password });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
