import type { Post } from "../types/postsTypes";

    export function generateNewPost(params: Partial<Post> = {}): Post {
    return {
        title: `testTitle${Date.now()}`,
        body: `testBody${Date.now()}`,
        userId: `${Date.now}`,
        ...params
    }
}