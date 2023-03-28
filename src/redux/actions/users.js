import axios from "axios";
import { toast } from "react-toastify";
import { ADD_USERS, GET_USERS } from "./type";

export const Add_Users = (item) => async (dispatch) => {
  let data = JSON.stringify({
    userName: item?.userName,
    phone: item?.phone,
    gender: item?.gender,
    address: item?.address,
    country: item?.country,
    zip: item?.zip,
    city: item?.city,
    state: item?.state,
    method: item?.method,
  });
  const token = localStorage.getItem("token");

  let config = {
    headers: {
      "Content-Type": "application/json",
      Cookie: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(
      `http://localhost:8500/api/v1/users`,
      data,
      config
    );
    if (response?.data?.status === "success") {
      toast.success(response?.data.message);
      setTimeout(() => {
        return (window.location.href = "/payment-method");
      }, 2000);
    }
    dispatch({
      type: ADD_USERS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error, "error");
    toast.error(error?.response?.data?.message);
  }
};

export const getUsers = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  var config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(
      `http://localhost:8500/api/v1/users`,
      config
    );
    dispatch({
      type: GET_USERS,
      payload: response?.data,
    });
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
