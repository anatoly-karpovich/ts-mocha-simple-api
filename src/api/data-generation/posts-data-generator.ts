import type { Post } from "../types/postsTypes"

export function generateNewPost(params: {[P in keyof Post] ?: string} = {}): Post {
    const post: Post = {
        title: `TestTitle${Date.now()}`,
        body: `TestBody${Date.now()}`,
        userId: `${Date.now()}`,
        ...params
    }
    return post
}   