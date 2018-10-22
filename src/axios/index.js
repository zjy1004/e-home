import axios from 'axios'
import qs from 'qs'

const baseURL = '/api/hhdj';
const instance = axios.create({
  baseURL,
  timeout:15000
});

instance.interceptors.request.use(function (config){
  // Do something before request
  if (window.sessionStorage.vuex) {
    let token = JSON.parse(window.sessionStorage.vuex).token;
    config.headers.token = token
  }
  
  if (config.method == 'post'){
    config.data = qs.stringify(config.data);
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
});

const xhr = {
  get(url, data, config) {
    return new Promise((resolve, reject)=> {
      instance.get(url, {params: data}, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  fetch(url, data, config, methods) {
    return new Promise((resolve, reject) => {
      instance[methods](url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config) {
    return this.fetch(url, data, config, 'post')
  }
};

export default xhr;
