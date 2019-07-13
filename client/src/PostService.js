/* eslint-disable space-before-blocks */
/* eslint-disable brace-style */
import axios from 'axios'
// import { resolve } from 'url';
// import { rejects } from 'assert';

const url = 'api/posts/'

// eslint-disable-next-line space-before-blocks
class PostService{
// get post
// eslint-disable-next-line space-before-function-paren
    static getPost() {
        return new Promise(async (resolve, reject) =>
        {
            try {
                const res = await axios.get(url)
                const data = res.data
                console.log(data)
            } catch (err) {
                reject(err)
            }
        })
    }
    // static getEtsyShop (){
    //     var axiosReturn = axios.get('api/posts/getShop')
    //     return axiosReturn
    // }
    static getImageUrl (listId){
        var axiosReturn = axios.post('api/posts/getImagesUrls', {
            'list': listId
        })
        return axiosReturn
    }
    static getLists (){
        return axios.get('api/posts/getLists')
    }
// create post
    static insertPost (userObj){
        return axios.post(url, userObj)
    }

// delete post
    static deletePost (id){
        return axios.delete(`${url}${id}`)
    }
}

export default PostService
