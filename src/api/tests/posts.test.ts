import PostsApi from "../pages/postsApi";
import { AxiosResponse } from 'axios'
import { generateNewPost } from '../fixtures/posts-data-generator'

let response: AxiosResponse;

describe('Api tests', () => {
    it('Get posts', async function() {
        response = await PostsApi.getListOfPosts()
        expect(response.status).toBe(200)
    });

    it('Get post for id = 1', async function() {
        response = await PostsApi.getListOfPosts(1)
        expect(response.status).toBe(200)
        expect(response.data.id).toBe(1)
    });

    it('Should create new post with valid data', async function() {
        const params = generateNewPost();
        const actual = Object.assign(params)
        response = await PostsApi.createPost(params)
        expect(response.status).toBe(201)
        actual['id'] = 101;
        expect(response.data).toMatchObject(actual)
    });
    
    it('Should create new post with empty title', async function() {
        const params = generateNewPost({title: ''})
        response = await PostsApi.createPost(params)
        expect(response.status).toBe(500)
    });

    it('Should create new post with empty body', async function() {
        const params = generateNewPost({body: ''})
        response = await PostsApi.createPost(params)
        expect(response.status).toBe(500)
    });

    it('Should create new post with empty userId', async function() {
        const params = generateNewPost({userId: ''})
        response = await PostsApi.createPost(params)
        expect(response.status).toBe(500)
    });
})