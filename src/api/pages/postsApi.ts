import { AxiosResponse } from "axios";
import { RequestOptions } from "../types/requestOptions";
import request from "../RequestApi/requestApi";
import type { Post } from "../types/postsTypes";


class PostsApi {
  async getListOfPosts(id?: number): Promise<AxiosResponse> {
    const options: RequestOptions = {
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts/",
      headers: {}
    };
    if(id) options.url+= id
    return request.sendRequest(options);
  }

  async createPost(params: Post) {
    const options: RequestOptions = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        headers: {},
        data: params
    }
    return request.sendRequest(options);
  }
}

export default new PostsApi()
