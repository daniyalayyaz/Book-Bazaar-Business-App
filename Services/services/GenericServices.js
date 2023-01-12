import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
axios.defaults.baseURL = "http://192.168.100.72:5000/api/";

class GenericServices {
  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
         
          reject(err.response.data);
        });
    });
    geto = (url) =>
    new Promise(async(resolve, reject) => {
      const token= await AsyncStorage.getItem("user");
      axios
        .get(url,{headers:{'Authorization':`Bearer ${token}`}})
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
         
          reject(err.response.data);
        });
    });
  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
    posto = (url, data) =>
    new Promise(async (resolve, reject) => {
     const token= await AsyncStorage.getItem("user");
     console.log(token);
      axios
        .post(url, data,{headers:{'Authorization':`Bearer ${token}`}})
        .then((res) => {
          
          resolve(res.data);
        })
        .catch((err) => {
          console.log(32);
          reject(err.response.data);
        });
    });
  postconfig = (url, data, config) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data, config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  delete = (url) =>
    new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });

  put = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });

  putconfig = (url, data, config) =>
    new Promise((resolve, reject) => {
      axios
        .put(url, data, config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
}
export default GenericServices;
