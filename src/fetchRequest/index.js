import axios from "axios";

axios.defaults.baseURL = "https://tzfrontend.herokuapp.com/";

export const getAllImages = () => axios.get("images/");
export const getImageExtendedSrc = (image_id) =>
  axios.get(`images/${image_id}`);
export const getImageExtendedComments = (image_id) =>
  axios.get(`comments/${image_id}`);
export const addImageComment = (comment) =>
  axios.post("comments/add/", comment);
