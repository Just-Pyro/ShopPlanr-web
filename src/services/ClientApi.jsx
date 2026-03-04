import axios from "axios";

// const baseUrl = "http://10.10.1.102:8005/api";
const baseUrl = "http://127.0.0.1:8000/api";

export const loginUser = async ({ email, password }) => {
  const route = `${baseUrl}/users/login`;
  const response = await axios.post(route, {
    email,
    password,
  });
  return response.data;
};

export const registerUser = async ({
  first_name,
  last_name,
  email,
  password,
}) => {
  const route = `${baseUrl}/users`;
  const response = await axios.post(route, {
    first_name,
    last_name,
    email,
    password,
  });
  return response.data;
};
