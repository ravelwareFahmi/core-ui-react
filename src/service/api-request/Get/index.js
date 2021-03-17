import Axios from 'axios';
import { baseUrl } from 'src/config/url-config';

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        const token = localStorage.getItem('data')
        Axios.get(`${baseUrl}/${path}`, {headers: {
            'token': `${token}`
          }})
        .then((result) => {
            resolve(result.data)
        },(err) => {
            reject(err)
        })
    })
    // console.log(token);
    return promise
}

export default Get