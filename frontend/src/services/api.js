import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth
export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);

// Products
export const getProducts = (search = '') => {
  const url = search ? `/products?search=${search}` : '/products';
  return API.get(url)
    .then(response => {
      console.log("API response:", response.data); // Loggar svar från API
      return response.data;  // Returnerar datan från API
    })
    .catch(error => {
      console.error("Error fetching products:", error);
      throw error;
    });
};

export const getProductById = (id) => API.get(`/products/${id}`);

// Orders
export const placeOrder = (items) => API.post("/orders", { items });
export const getOrders = () => API.get("/orders");

export default API;
