import axios from 'axios'
import {Toast} from 'vant'

const http=axios.create({
	baseURL:'https://m.maizuo.com',
	timeout:10000,
	headers:{
		'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"1645639611131138236448769","bc":"110100"}'	
	}
})
// Add a request interceptor
http.interceptors.request.use(function (config) {
    // Do something before request is sent
	Toast.loading({
	  message: '加载中...',
	  forbidClick: true,
	  duration:0
	});
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
  http.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
	  Toast.clear()
      return response;
    }, function (error) {
		 Toast.clear()
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });
export default http