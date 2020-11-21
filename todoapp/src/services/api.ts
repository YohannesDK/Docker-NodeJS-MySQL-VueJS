import axios from 'axios';

export default axios.create({
  baseURL: 'http://127.0.0.1:3000/api',
  headers: {
    // Accept: 'application/json',
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:3000/api*',
  },
});
