import GetMethod from './Get'
import PostMethod from './Post'
import DeleteMethod from './Delete'

const Get = (urlPath) => GetMethod(`${urlPath}`); 
const Post = (urlPath, data) => PostMethod(`${urlPath}`, data)
const Delete = (urlPath, data) => DeleteMethod(`${urlPath}`, data)

const API = {
    Get,
    Post,
    Delete
}

export default API;