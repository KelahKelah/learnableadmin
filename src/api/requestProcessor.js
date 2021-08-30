import axios from "axios";
import { BASE_URL } from "../api/config";

axios.defaults.baseURL = BASE_URL;

const RequestProcessor = async ({method, url, payload:data}) => {
  try {
    const result = await axios({
      method,
      url,
      data,
    });
    // console.log(result);
    return { result };
  } catch (error) {
    console.log(error);
  }
};

export default RequestProcessor;
