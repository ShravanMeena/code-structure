import axios from 'axios';
import {Config} from '../config';

export const axiosRequestHandler = (method, data, url) => {
  axios.defaults.baseURL = Config.API_URL;

  let isAlreadyQueriesAvailableInUrl = url?.includes('?');

  let endpoint =
    url +
    `${isAlreadyQueriesAvailableInUrl ? '&' : '?'}api_key=${Config.API_KEY}`;

  console.log(endpoint, ' :endpoint');
  return new Promise(resolve => {
    axios({
      method,
      data,
      url: endpoint,
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        resolve(
          'status: ' +
            err.response.data?.meta?.status +
            ' and err: ' +
            err.response.data?.meta?.msg,
        );
      });

    // axios({
    //   method,
    //   url,
    //   data,
    //   headers: {
    //     // Authorization,
    //     // session_trace_id,
    //     // device: isFromWebView ? 'android' : 'web',
    //     // user_id,
    //   },
    // })
    //   .then(res => {
    //     resolve(res);
    //     if (!res?.data?.success) {
    //       // ErrorToast({msg: res.data.error});
    //     }
    //   })
    //   .catch(err => {
    //     if (!err?.response) {
    //       return;
    //     }
    //     // agr koi backend me kuchh fatta hain to: by akshat
    //     resolve(err.response);
    //     // if (err.response.status === 403) {
    //     //   ErrorToast({
    //     //     msg: 'Your account has been blocked by admin. Please contact support@khelgully.com',
    //     //   });
    //     //   set('logout', true);
    //     //   return;
    //     // }
    //     // if found 500 or greate error status
    //     if (err?.response?.status >= 500) {
    //       // ErrorToast({
    //       //   msg: isDev
    //       //     ? _extra_err?.slice(6)
    //       //     : 'Ooops something went wrong. Please try again after some time!',
    //       // });
    //     } else {
    //       // if found 400 error
    //       // ErrorToast({msg: err?.response?.data?.error?.message});
    //       if (err?.response?.status === 401 || err?.response?.status === 403) {
    //         // set('logout', true);
    //         return;
    //       }
    //     }
    //   });
  });
};
