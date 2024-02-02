import axios from "axios";

export default axios.create({
  baseURL: "http://locahost:5000/api",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("i9lyfe--user-jwt")}`
  }
})