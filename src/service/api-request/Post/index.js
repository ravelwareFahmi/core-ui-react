import Axios from 'axios';
import { baseUrl } from 'src/config/url-config';

const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        const token = localStorage.getItem('data')
        Axios.post(`${baseUrl}/${path}`, data, {headers: {
            'token': `${token}`
          }})
        .then((result) => {
            resolve(result)
        }, (err) => {
            reject(err)
        })
    })
    return promise
}

export default Post