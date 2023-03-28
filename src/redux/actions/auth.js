import axios from "axios";
import { toast } from "react-toastify";
import { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_FAIL, SIGNUP_SUCCESS } from "./type";
import { API_URL } from "../actions/config";
export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    var body = JSON.stringify({
      email,
      password,
      passwordConfirm: password,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/users/login`,
        body,
        config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
      if (response?.data?.status === "success") {
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("userId", response?.data?.id);

        toast.success(response?.data.message);
        setTimeout(() => {
          return (window.location.href = "/");
        }, 2000);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
export const signupUser =
  ({ userName, email, password, phone }) =>
  async (dispatch) => {
    let data = JSON.stringify({
      userName,
      phone,
      email,
      password,
      passwordConfirm: password,
    });

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `${API_URL}/api/v1/users/signup`,
        data,
        config
      );
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
      if (response?.data?.status === "success") {
        toast.success(response?.data.message);
        setTimeout(() => {
          return (window.location.href = "/login");
        }, 2000);
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      dispatch({
        type: SIGNUP_FAIL,
      });
    }
  };
