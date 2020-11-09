import axios from "axios";

axios.defaults.baseURL = "https://tzfrontend.herokuapp.com/";

export const getAllImages = () => axios.get("images/");
export const getImageExtendedInfo = (image_id) =>
  axios.get(`images/${image_id}`);
