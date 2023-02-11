import axios from 'axios';
import {Config} from '../config';
import {showToast} from '../utils/helper';

export const axiosRequestHandler = (method, data, url) => {
  // method:: GET/POST/PUT/DELETE
  // data: request Body (if get method then send null value)
  // url : endpint

  axios.defaults.baseURL = Config.API_URL;

  let isAlreadyQueriesAvailableInUrl = url?.includes('?');

  let endpoint =
    url +
    `${isAlreadyQueriesAvailableInUrl ? '&' : '?'}api_key=${Config.API_KEY}`;

  return new Promise(resolve => {
    axios({
      method,
      data,
      url: endpoint,
    })
      .then(res => {
        resolve(res.data);

        // some time status code 200 but we need for error handling ::: TODO: THIS CODE ONLY FOR SHOWING YOU
        // if (!res.data.success) {
        //   showToast('some error goes here');
        //   return;
        // }
      })
      .catch(err => {
        // we can handle error here for example :: i will give you some examples
        let {status, msg} = err.response.data?.meta;
        resolve(msg);

        if (status === 403) {
          showToast('status code 403');
          return;
        } else if (status === 401) {
          showToast('unauthorized status code');
          return;
        } else if (status === 500) {
          showToast('Oops Error ! Something went wrong from server side');
          return;
        } else if (status === 400) {
          showToast('Client side error');
          return;
        }
      });
  });
};
