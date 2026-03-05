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

export const getPlans = async (userId) => {
  const route = `${baseUrl}/shop_plans/by-user/${userId}`;
  const response = await axios.get(route);
  return response.data;
};

export const createShopPlan = async ({
  created_by,
  address,
  date_scheduled,
  budget,
  number_of_items,
  items,
}) => {
  const route = `${baseUrl}/shop_plans`;
  const response = await axios.post(route, {
    created_by,
    address,
    date_scheduled,
    budget,
    number_of_items,
    items,
  });
  return response.data;
};
