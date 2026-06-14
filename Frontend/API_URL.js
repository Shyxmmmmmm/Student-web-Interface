
const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://student-web-interface-2.onrender.com"

export default API_URL