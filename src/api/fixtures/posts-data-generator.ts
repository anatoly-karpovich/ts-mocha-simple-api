import type { Post } from "../types/postsTypes";

export function generateNewPost(params: {[P in keyof Post ] ?: string} ={}): Post {
    return {
        title: `testTitle${Date.now()}`,
        body: `testBody${Date.now()}`,
        userId: `${Date.now}`,
        ...params
    }
}