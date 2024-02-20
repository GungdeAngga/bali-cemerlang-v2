import axios from "axios";

const baseApi = "http://localhost:8000/api/";

// for getting image
export const baseStorage = "http://localhost:8000/storage/";

// axios function
export const getPackage = () =>
  axios({
    method: "get",
    url: baseApi + "package",
    params: {
      order_direction: "desc",
    },
  }).then(({ data }) => data.data);

export const getOffer = () =>
  axios({
    method: "get",
    url: baseApi + "offer",
    params: {
      order_direction: "desc",
    },
  }).then(({ data }) => data.data);

export const getPromo = () =>
  axios({
    method: "get",
    url: baseApi + "promo",
    params: {
      order_direction: "desc",
    },
  }).then(({ data }) => data.data);
