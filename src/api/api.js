import axios from "axios";

export const fetchTodoList = () => {
    return axios.get("http://localhost:5173/data.json");
}
