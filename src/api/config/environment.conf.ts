const envConfig = {
    baseUrl: "https://jsonplaceholder.typicode.com",
    endpoints: {
        allPosts: "/posts",
        postById: (postId: number) => `/posts/${postId}`
    }
}

export default envConfig;