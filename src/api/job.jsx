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
