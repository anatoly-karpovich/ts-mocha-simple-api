import { AxiosResponse } from "axios";
import { RequestOptions } from "../types/requestOptions";
import request from "../RequestApi/requestApi";
import type { Post } from "../types/postsTypes";
import envConfig from "../config/environment.conf";


class PostsApi {
  async getListOfPosts(id?: number): Promise<AxiosResponse> {
    const options: RequestOptions = {
      method: "get",
      baseURL: process.env.baseURL ? process.env.baseURL : envConfig.baseUrl,
      url: id ? envConfig.endpoints.postById(id) : envConfig.endpoints.allPosts,
      headers: {}
    };
    return request.sendRequest(options);
  }

  async createPost(post: Post) {
    const options: RequestOptions = {
        method: 'post',
        baseURL: envConfig.baseUrl,
        url: envConfig.endpoints.allPosts,
        headers: {},
        data: post
    }
    return request.sendRequest(options);
  }
}

export default new PostsApi()
