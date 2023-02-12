import axios from 'axios';
import {Config} from '../config';
import {showToast} from '../utils/helper';

export const axiosRequestHandler = options => {
  // method:: GET/POST/PUT/DELETE
  // data: request Body (if get method then send null value)
  // url : endpint

  axios.defaults.baseURL = Config.API_URL;

  let {url} = options; //destruture
  let isQueriesAvailableInUrl = url?.includes('?');

  let endpoint =
    url + `${isQueriesAvailableInUrl ? '&' : '?'}api_key=${Config.API_KEY}`;

  return new Promise(resolve => {
    axios({
      ...options,
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
        switch (status) {
          case 403:
            return showToast('status code 403');
          case 401:
            return showToast('unauthorized status code');
          case 400:
            return showToast('Client side error');
          case 500:
            return showToast(
              'Oops Error ! Something went wrong from server side',
            );
          default:
            return showToast('Error');
        }
      });
  });
};
