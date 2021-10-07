import logger from "./logService";
import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.statusCode >= 400 &&
    error.response.statusCode < 5000;

  if (!expectedError) {
    logger.log(error);
    toast.error("An Unexpected Error Occured");
  }
  return Promise.reject(error);
});
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
