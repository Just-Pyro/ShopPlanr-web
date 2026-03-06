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

export const getPlanInfo = async (planId) => {
  const route = `${baseUrl}/shop_plans/${planId}`;
  const response = await axios.get(route);
  return response.data;
};

export const startPlan = async (planId, userId) => {
  const checkRoute = `${baseUrl}/shop_plans/checkStarted/${userId}`;
  const res = await axios.get(checkRoute);
  // console.log("res", res);

  if (res.data?.success) {
    const route = `${baseUrl}/shop_plans/start/${planId}`;
    const response = await axios.put(route);
    return response.data;
  }

  return res.data;
};

export const completePlan = async ({ status, updated_at, items }, planId) => {
  const route = `${baseUrl}/shop_plans/update-status/${planId}`;
  const response = await axios.put(route, {
    status,
    updated_at,
    items,
  });

  return response.data;
};
