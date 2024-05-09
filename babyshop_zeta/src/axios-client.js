import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  // baseURL: "https://admin.demo.reinforcelabhosting.com/api",

});

export default axiosClient;