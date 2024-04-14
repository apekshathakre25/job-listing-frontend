import axios from "axios";
const backEndUrl = `http://localhost:6002/api/v1`;

export const getJobDetailsById = async (jobID) => {
  try {
    const reqUrl = `${backEndUrl}/job/details/${jobID}`;
    const response = await axios.get(reqUrl);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createJobPost = async (requestPayload) => {
  try {
    const reqUrl = `${backEndUrl}/job/create`;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post(reqUrl, requestPayload);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateJobPost = async (jobID, updatedData) => {
  try {
    const reqUrl = `${backEndUrl}/job/edit/${jobID}`;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.put(reqUrl, updatedData);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
