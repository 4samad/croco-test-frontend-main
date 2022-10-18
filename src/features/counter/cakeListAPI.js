import axios from "axios";

// A Function to fetch cake List
export default function fetchCakeList() {
  return axios.get('/cake/list')
}
