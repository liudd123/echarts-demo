import axios from "axios";


  //创建axios 的实例
  const request = axios.create({
    timeout: 5000,
  });
  //请求拦截器
  request.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  //响应拦截器
  request.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
export default request
